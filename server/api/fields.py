from django.db import models
from cryptography.fernet import Fernet
from decouple import config


class EncryptedField(models.TextField):
    def __init__(self, *args, **kwargs):
        key = config('ENCRYPTION_KEY')
        self.cipher_suite = Fernet(key)
        super().__init__(*args, **kwargs)

    def from_db_value(self, value, expression, connection):
        if value is not None:
            return self.decrypt(value)
        return value

    def to_python(self, value):
        if isinstance(value, str):
            return value

        if value is not None:
            return self.decrypt(value)

    def get_prep_value(self, value):
        if value is not None:
            return self.encrypt(value)
        return value

    def encrypt(self, text):
        return self.cipher_suite.encrypt(text.encode()).decode()

    def decrypt(self, cipher_text):
        return self.cipher_suite.decrypt(cipher_text.encode()).decode()
<<<<<<< HEAD
=======
    
>>>>>>> b3fd8e5d3a42cbce24ae57413a52e5621eebbb37
