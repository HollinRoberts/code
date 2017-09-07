from django.conf.urls import url, include
from . import views

urlpatterns = [
    
    url(r'result$', views.result),

    url(r'process$', views.submit),
    url(r'^', views.index),
]