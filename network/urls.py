
from django.urls import path
from django.urls import path, re_path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # API Routes
    path("api/create_post", views.create_post, name="create_post"),
    path("api/posts", views.posts, name="posts"),
    path("api/post/<int:post_id>", views.post, name="post"),
    path("api/user/<str:username>", views.user, name="user"),
    path("api/user_info", views.user_info, name="user_info"),
    path("api/login", views.login_view, name="login"),
    path("api/logout", views.logout_view, name="logout"),
    path("api/register", views.register, name="register"),
    re_path(r"^(?:.*)/?$", TemplateView.as_view(template_name="network/index.html")),

]
