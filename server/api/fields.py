from django.db import models
from cryptography.fernet import Fernet
from decouple import config


class EncryptedField(models.TextField):
    """EncryptedField is a custom Django model field that encrypts its data in the database.

    It uses the Fernet symmetric encryption method provided by the cryptography library.

    Attributes:
    cipher_suite (Fernet): The Fernet instance used for encryption and decryption.
    """

    def __init__(self, *args, **kwargs):
        """Initialize the EncryptedField with the encryption key from the environment variables."""
        key = config('ENCRYPTION_KEY')
        self.cipher_suite = Fernet(key)
        super().__init__(*args, **kwargs)

    def from_db_value(self, value, expression, connection):
        """Convert the value as it's returned from the database to Python."""
        if value is not None:
            return self.decrypt(value)
        return value

    def to_python(self, value):
        """Convert the value as it's returned from deserialization or the database to Python."""
        if isinstance(value, str):
            return value

        if value is not None:
            return self.decrypt(value)

    def get_prep_value(self, value):
        """Convert the value from Python to a format that can be serialized to the database."""
        if value is not None:
            return self.encrypt(value)
        return value

    def encrypt(self, text):
        """Encrypt the text using the Fernet cipher suite.

        Parameters:
        text (str): The text to be encrypted.

        Returns:
        str: The encrypted text.
        """
        return self.cipher_suite.encrypt(text.encode()).decode()

    def decrypt(self, cipher_text):
        """Decrypt the cipher text using the Fernet cipher suite.

        Parameters:
        cipher_text (str): The cipher text to be decrypted.

        Returns:
        str: The decrypted text.
        """
        return self.cipher_suite.decrypt(cipher_text.encode()).decode()