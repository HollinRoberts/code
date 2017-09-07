from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'heros$', views.heros), 
    url(r'powers$', views.powers), 
    url(r'add_power$', views.add_power),
    url(r'add_hero$', views.add_hero),
    url(r'log_out$', views.log_out),
    url(r'heros_app/(\w+)$', views.profile), 
    url(r'like/(\w+)$', views.like),
    url(r'^', views.index), 
]