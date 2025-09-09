from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    followers = models.ManyToManyField ('User', blank=True, symmetrical=False, related_name="following")
    profile_pic_url = models.URLField(max_length=500, blank=True, null=True)

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "followers": [u.username for u in self.followers.all()],
            "following": [u.username for u in self.following.all()],
            "profile_pic_url": self.profile_pic_url,
            "total_posts": self.posts.count(),
        }

class Post(models.Model):
   
    body = models.TextField(max_length=4000)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    liked_users = models.ManyToManyField('User', blank=True, related_name="liked_posts")

    def serialize(self):
        return {
            "id": self.id,
            "body": self.body,
            "image_url": self.image_url,
            "created_at": self.created_at.strftime("%b %d %Y, %I:%M %p"),
            "owner": self.owner.username,
            "liked_users": [user.username for user in self.liked_users.all()]
        }

    def __str__(self):
        return f"{self.body} from user: ({self.owner.username})"