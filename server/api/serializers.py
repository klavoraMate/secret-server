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
        return Secret.create_secret(
            secret=validated_data.pop('secret'),
            expireAfterViews=validated_data.pop('expireAfterViews'),
            expireAfter=validated_data.pop('expireAfter')
        )
