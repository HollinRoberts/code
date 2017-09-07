from django.conf.urls import url
from . import views

def test(request):
    print "this is working"

urlpatterns = [
    

    
    url(r'^/reset', views.reset),
    url(r'^$', views.index),
    url(r'/index', views.index),
]