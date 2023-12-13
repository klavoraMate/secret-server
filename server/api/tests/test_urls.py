from django.test import SimpleTestCase
from django.urls import reverse, resolve
from api.views import get_secret, create_secret


class TestUrls(SimpleTestCase):

    def test_get_secret_url_is_resolved(self):
        url = reverse('get_secret', args=['some_hash'])
        self.assertEquals(resolve(url).func, get_secret)

    def test_create_secret_url_is_resolved(self):
        url = reverse('create_secret')
        self.assertEquals(resolve(url).func, create_secret)
