from django.conf.urls import url
from . import views

def test(request):
    print "this is working"

urlpatterns = [
    url(r'buy$', views.buy),
    url(r'checkout$', views.checkout),
    url(r'$', views.index),
   
]