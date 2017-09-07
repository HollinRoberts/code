from django.conf.urls import url
from . import views

def test(request):
    print "this is working"

urlpatterns = [
    
    url(r'^new', views.register),
    url(r'^register', views.register),
    url(r'^login', views.login),
    url(r'^$', views.users),
]