
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),

    # API Routes
    path("api/create_post", views.create_post, name="create_post"),
    path("api/posts", views.posts, name="posts"),
    path("api/post/<int:post_id>", views.post, name="post"),
    path("api/user/<str:username>", views.user, name="user"),
    path("api/user_info", views.user_info, name="user_info"),
    
]
