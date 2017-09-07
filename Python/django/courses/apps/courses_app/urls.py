from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'submit$', views.submit),
    url(r'remove/(\d+)', views.remove),
]