from django.db import models
from datetime import datetime, timedelta
from .fields import EncryptedField
import hashlib


class Secret(models.Model):
    hash = models.CharField(max_length=255)
    secretText = EncryptedField()
    createdAt = models.DateTimeField()
    expiresAt = models.DateTimeField()
    remainingViews = models.IntegerField()

    @classmethod
    def create_secret(cls, secret, expireAfterViews, expireAfter):
        createdAt = datetime.now()
        expiresAt = createdAt + timedelta(minutes=expireAfter)

        hash_input = secret + str(expireAfterViews) + str(expiresAt) + str(createdAt)
        hash_value = hashlib.sha256(hash_input.encode()).hexdigest()

        return cls.objects.create(secretText=secret, remainingViews=expireAfterViews, expiresAt=expiresAt,
                                  createdAt=createdAt, hash=hash_value)
