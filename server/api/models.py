from django.db import models
from datetime import timedelta
from django.utils import timezone
from .fields import EncryptedField
import hashlib


class Secret(models.Model):
    """Secret is a Django model that represents a secret entity in the database.

    Attributes:
    hash (str): The hash of the secret.
    secret_text (EncryptedField): The secret text, stored in an encrypted format.
    created_at (datetime): The time when the secret was created.
    expires_at (datetime): The time when the secret will expire.
    remaining_views (int): The number of remaining views for the secret.
    """

    hash = models.CharField(max_length=255)
    secret_text = EncryptedField()
    created_at = models.DateTimeField()
    expires_at = models.DateTimeField()
    remaining_views = models.IntegerField()

    @classmethod
    def create_secret(cls, secret, expire_after_views, expire_after):
        """This class method is used to create a new secret.

        Parameters:
        secret (str): The secret text.
        expire_after_views (int): The number of views after which the secret will expire.
        expire_after (int): The number of minutes after which the secret will expire.

        Returns:
        Secret: A new Secret object.
        """
        created_at = timezone.now()
        expires_at = created_at + timedelta(minutes=expire_after)

        hash_input = secret + str(expire_after_views) + str(expires_at) + str(created_at)
        hash_value = hashlib.sha256(hash_input.encode()).hexdigest()

        return cls.objects.create(hash=hash_value,
                                  secret_text=secret,
                                  created_at=created_at,
                                  expires_at=expires_at,
                                  remaining_views=expire_after_views)
