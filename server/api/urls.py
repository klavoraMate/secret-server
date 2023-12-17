from django.urls import path
from . import views

urlpatterns = [
    path('secret', views.create_secret, name='create_secret'),
    path('secret/<str:hash_value>', views.get_secret, name='get_secret'),
]
