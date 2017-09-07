from django.conf.urls import url
from . import views

def test(request):
    print "this is working"

urlpatterns = [
    

    url(r'^', views.index),
    
]