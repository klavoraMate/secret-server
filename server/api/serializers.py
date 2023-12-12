from rest_framework import serializers
from .models import Secret
from datetime import datetime, timedelta
import hashlib


class SecretSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secret
        fields = ['hash', 'secretText', 'createdAt', 'expiresAt', 'remainingViews']


class SecretCreateSerializer(serializers.Serializer):
    secret = serializers.CharField(write_only=True)
    expireAfterViews = serializers.IntegerField(write_only=True)
    expireAfter = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        secretText = validated_data.pop('secret')
        remainingViews = validated_data.pop('expireAfterViews')
        createdAt = datetime.now()
        expiresAt = createdAt + timedelta(minutes=validated_data.pop('expireAfter'))

        hash_input = secretText + str(remainingViews) + str(expiresAt) + str(createdAt)
        hash_value = hashlib.sha256(hash_input.encode()).hexdigest()
        return Secret.objects.create(secretText=secretText, remainingViews=remainingViews, expiresAt=expiresAt,
                                     createdAt=createdAt, hash=hash_value)
