from django.test import TestCase
from django.urls import reverse
from ..models import Secret
import json


class SecretTest(TestCase):
    # Tests for get_secret
    # Happy path
    def test_get_secret_returns_200_when_secret_exists(self):
        valid_secret = Secret.create_secret('secret', 3, 3)
        response = self.client.get(reverse('get_secret', kwargs={'hash_value': valid_secret.hash}))
        self.assertEqual(response.status_code, 200)

    # Sad path
    def test_get_secret_returns_404_when_secret_does_not_exist(self):
        response = self.client.get(reverse('get_secret', kwargs={'hash_value': 'nonexistenthash'}))
        self.assertEqual(response.status_code, 404)

    def test_get_secret_returns_410_when_secret_has_expired(self):
        expired_secret = Secret.create_secret('secret', 3, 0)
        response = self.client.get(reverse('get_secret', kwargs={'hash_value': expired_secret.hash}))
        self.assertEqual(response.status_code, 410)

    def test_get_secret_returns_410_when_secret_has_no_remaining_views(self):
        viewed_secret = Secret.create_secret('secret', 0, 3)
        response = self.client.get(reverse('get_secret', kwargs={'hash_value': viewed_secret.hash}))
        self.assertEqual(response.status_code, 410)

    # Tests for create_secret
    # Happy path
    def test_post_secret_returns_200_when_payload_is_valid(self):
        valid_payload = {
            'secret': 'secret',
            'expireAfterViews': 3,
            'expireAfter': 3
        }
        response = self.client.post(
            reverse('create_secret'),
            data=json.dumps(valid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 200)

    # Sad path
    def test_post_secret_returns_405_when_payload_is_invalid(self):
        invalid_payload = {
            'invalid': 'payload'
        }
        response = self.client.post(
            reverse('create_secret'),
            data=json.dumps(invalid_payload),
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 405)
