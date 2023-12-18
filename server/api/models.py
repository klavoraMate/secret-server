from django.db import models
from datetime import datetime, timedelta
from .fields import EncryptedField
import hashlib


class Secret(models.Model):
    hash = models.CharField(max_length=255)
    secret_text = EncryptedField()
    created_at = models.DateTimeField()
    expires_at = models.DateTimeField()
    remaining_views = models.IntegerField()

    @classmethod
    def create_secret(cls, secret, expire_after_views, expire_after):
        created_at = datetime.now()
        expires_at = created_at + timedelta(minutes=expire_after)

        hash_input = secret + str(expire_after_views) + str(expires_at) + str(created_at)
        hash_value = hashlib.sha256(hash_input.encode()).hexdigest()

        return cls.objects.create(hash=hash_value,
                                  secret_text=secret,
                                  created_at=created_at,
                                  expires_at=expires_at,
                                  remaining_views=expire_after_views)

