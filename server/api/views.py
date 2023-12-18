from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from .models import Secret
from .serializers import SecretSerializer, SecretCreateSerializer
from .renderers import JSONRenderer, XMLRenderer
from django.utils import timezone


@api_view(['GET'])
@renderer_classes([JSONRenderer, XMLRenderer])
def get_secret(request, hash_value):
    """This function retrieves a secret based on the provided hash value.

    Parameters:
    request (HttpRequest): The request object.
    hash_value (str): The hash value of the secret to retrieve.

    Returns:
    Response: The response object containing the secret data or an error message.
    """
    try:
        secret = Secret.objects.get(hash=hash_value)
    except Secret.DoesNotExist:
        return Response({'message': 'Secret not found'}, status=404)

    secret.remaining_views -= 1

    if secret.expires_at <= timezone.now():
        return Response({'message': 'Secret expired'}, status=410)

    if secret.remaining_views <= 0:
        return Response({'message': 'Secret expired'}, status=410)

    secret.save()
    serializer = SecretSerializer(secret)
    return Response(serializer.data, status=200)


@api_view(['POST'])
@renderer_classes([JSONRenderer, XMLRenderer])
def create_secret(request):
    """This function creates a new secret based on the provided data.

    Parameters:
    request (HttpRequest): The request object containing the data to create a new secret.

    Returns:
    Response: The response object containing the created secret data or an error message.
    """
    serializer = SecretCreateSerializer(data=request.data)
    if serializer.is_valid():
        secret = serializer.save()
        response_serializer = SecretSerializer(secret)
        return Response(response_serializer.data, status=200)
    return Response({'message': 'Invalid input'}, status=405)
