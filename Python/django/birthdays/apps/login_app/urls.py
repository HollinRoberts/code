from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'submit$', views.submit),
    url(r'^$', views.register),
   
]