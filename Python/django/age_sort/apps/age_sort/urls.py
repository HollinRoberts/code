from django.conf.urls import url,include
from . import views

urlpatterns = [
    # url(r'dashboard$', views.dashboard),
    url(r'login$', views.login),
    url(r'dashboard$', views.dashboard),
    url(r'(0-10)$', views.age_group),
    url(r'(11-18)$', views.age_group),
    url(r'(19-24)$', views.age_group),
    url(r'(25-35)$', views.age_group),
    url(r'(36-50)$', views.age_group),
    url(r'(51\+)$', views.age_group),
     url(r'^', views.index),
]