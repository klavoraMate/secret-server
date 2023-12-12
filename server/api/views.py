from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import FormParser
from .models import Secret
from .serializers import SecretSerializer, SecretCreateSerializer
from .renderers import JSONRenderer, XMLRenderer
from datetime import datetime, timedelta


@api_view(['GET'])
def get_secret(request, hash_value):
    try:
        secret = Secret.objects.get(hash=hash_value)
    except Secret.DoesNotExist:
        return Response({'message': 'Secret not found'}, status=404)
    serializer = SecretSerializer(secret)
    return Response(serializer.data, status=200)


get_secret.renderer_classes = [JSONRenderer, XMLRenderer]


@api_view(['POST'])
def create_secret(request):
    serializer = SecretCreateSerializer(data=request.data)
    if serializer.is_valid():
        secret = serializer.save()
        response_serializer = SecretSerializer(secret)
        return Response(response_serializer.data, status=200)
    return Response({'message': 'Invalid input'}, status=405)


create_secret.parser_classes = [FormParser]
create_secret.renderer_classes = [JSONRenderer, XMLRenderer]
