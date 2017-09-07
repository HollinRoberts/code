from django.conf.urls import url,include
from . import views

urlpatterns = [
    
    url(r'new$', views.new),
    url(r'^user/(\d+)$', views.show),
    url(r'^edit/(\d+)$', views.edit),
    url(r'^create$', views.create),
    url(r'^destroy/(\d+)$', views.destroy),
    url(r'^update/(\d+)$', views.update),
    url(r'$', views.index),
]