from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Post


class CustomUserAdmin(BaseUserAdmin):
    model = User
    list_display = ("id", "username", "email", "total_posts", "profile_pic_url", "followers_count", "following_count")
    search_fields = ("username", "email")
    ordering = ("id",)

    fieldsets = BaseUserAdmin.fieldsets + (
        (None, {"fields": ("followers", "profile_pic_url")}),
    )

    filter_horizontal = ("followers",)

    def total_posts(self, obj):
        return obj.posts.count()
    total_posts.short_description = "Posts"

    def followers_count(self, obj):
        return obj.followers.count()
    followers_count.short_description = "Followers"

    def following_count(self, obj):
        return obj.following.count()
    following_count.short_description = "Following"


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "owner", "short_body", "created_at", "likes_count")
    search_fields = ("body", "owner__username")
    list_filter = ("created_at",)
    ordering = ("-created_at",)

    def short_body(self, obj):
        return (obj.body[:50] + "...") if len(obj.body) > 50 else obj.body
    short_body.short_description = "Body"

    def likes_count(self, obj):
        return obj.liked_users.count()
    likes_count.short_description = "Likes"


admin.site.register(User, CustomUserAdmin)
