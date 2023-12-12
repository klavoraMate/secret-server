from django.db import models


class Secret(models.Model):
    hash = models.CharField(max_length=255)
    secretText = models.TextField()
    createdAt = models.DateTimeField()
    expiresAt = models.DateTimeField()
    remainingViews = models.IntegerField()
