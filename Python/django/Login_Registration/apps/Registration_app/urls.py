from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'submit$', views.submit),
    url(r'results/(\d+)/(\w+)$', views.results),
    url(r'login$', views.login), 
    url(r'^', views.index),

    
]