from rest_framework import serializers
from .models import Secret


class SecretSerializer(serializers.ModelSerializer):
    """This class represents a serializer for the Secret model.

    It inherits from the ModelSerializer class provided by Django Rest Framework.

    The Meta class within defines the model to be serialized and the fields to be included in the serialized representation.
    """

    class Meta:
        model = Secret
        fields = ['hash', 'secret_text', 'created_at', 'expires_at', 'remaining_views']


class SecretCreateSerializer(serializers.Serializer):
    """This class represents a serializer for creating a new Secret.
    It inherits from the Serializer class provided by Django Rest Framework.

    The fields defined are the ones required to create a new Secret.

    The create method is overridden to provide custom creation logic.
    """
    secret = serializers.CharField(write_only=True)
    expireAfterViews = serializers.IntegerField(write_only=True)
    expireAfter = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        """This method creates a new Secret instance.

        It uses the validated_data dictionary to get the necessary data.

        Parameters:
        validated_data (dict): The validated data to create a new Secret.

        Returns:
        Secret: The created Secret instance.
        """
        return Secret.create_secret(
            secret=validated_data.pop('secret'),
            expire_after_views=validated_data.pop('expireAfterViews'),
            expire_after=validated_data.pop('expireAfter')
        )
