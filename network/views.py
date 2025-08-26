from django.contrib.auth import authenticate, login, logout
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
import json

from .models import User, Post

def index(request):
    return render(request, "network/index.html")

@csrf_exempt
@login_required
def create_post(request):
    
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    data = json.loads(request.body)
    # Get contents of post
    image_url = data.get("image_url", "")
    body = data.get("body", "")

    if body == "":
        return JsonResponse({"error": "The body of the post shouldn't be empty"}, status=402)

    if image_url:  # only validate if provided
        validator = URLValidator()
        try:
            validator(image_url)
        except ValidationError:
            return JsonResponse(
                {"error": "Invalid image URL"},
                status=400
            )

    post = Post(
        image_url=image_url,
        owner=request.user,
        body=body,
    )
    post.save()
    return JsonResponse({"message": "Post posted successfully."}, status=201)


@login_required
def posts(request):
    if (request.method != "GET"):
        return JsonResponse({"error": "GET request required."}, status=400)
    
    type = request.headers.get("type", "all")

    if type == "follows":
       followers = User.objects.filter(followers=request.user)
       posts = Post.objects.filter(owner__in=followers).order_by("-created_at")
       return JsonResponse([post.serialize() for post in posts], safe=False)
    else:
        posts = Post.objects.all().order_by("-created_at")
        return JsonResponse([post.serialize() for post in posts], safe=False)


@csrf_exempt
@login_required
def user(request, username):
    try:
        target_user = User.objects.get(username=username)  
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found."}, status=404)

    if request.method == "PUT":
        try:
            data = json.loads(request.body.decode("utf-8"))
        except (ValueError, TypeError):
            return JsonResponse({"error": "Invalid JSON body."}, status=400)

        to_follow = data.get("to_follow")
        if to_follow is None:
            return JsonResponse({"error": "'to_follow' field required."}, status=400)

        if isinstance(to_follow, bool):
            should_follow = to_follow
        else:
            should_follow = str(to_follow).strip().upper() == "YES"

        if should_follow:
            target_user.followers.add(request.user) 
        else:
            target_user.followers.remove(request.user)

        return HttpResponse(status=204)
    elif request.method == "GET":
        return JsonResponse(target_user.serialize(), safe=False)
    
    return JsonResponse({"error": "request method is wrong!"}, status=400)


@csrf_exempt
@login_required
def post(request, post_id):
    try:
        target_post = Post.objects.get(id=post_id)  
    except Post.DoesNotExist:
        return JsonResponse({"error": "Post not found."}, status=404)

    if request.method == "PUT":
        try:
            data = json.loads(request.body.decode("utf-8"))
        except (ValueError, TypeError):
            return JsonResponse({"error": "Invalid JSON body."}, status=400)

        to_like = data.get("to_like")
        if to_like is None:
            return JsonResponse({"error": "'to_like' field required."}, status=400)

        if isinstance(to_like, bool):
            should_like = to_like
        else:
            should_like = str(to_like).strip().upper() == "YES"

        if should_like:
            target_post.liked_users.add(request.user) 
        else:
            target_post.liked_users.remove(request.user)

        return HttpResponse(status=204)
    elif request.method == "GET":
        return JsonResponse(target_post.serialize(), safe=False)
    
    return JsonResponse({"error": "request method is wrong!"}, status=400)


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "network/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "network/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        profile_pic_url = request.POST["profile_pic"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "network/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                profile_pic_url=profile_pic_url
            )

            user.save()
        except IntegrityError:
            return render(request, "network/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "network/register.html")

