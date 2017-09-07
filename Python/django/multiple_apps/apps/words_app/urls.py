from django.conf.urls import url
from . import views

def test(request):
    print "this is working"

urlpatterns = [
    url(r'add_word$', views.add),
    url(r'$', views.index),
   
]