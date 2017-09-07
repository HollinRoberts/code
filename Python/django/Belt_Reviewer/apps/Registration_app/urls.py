from django.conf.urls import url,include
from . import views

urlpatterns = [
    url(r'submit$', views.submit),
    url(r'books$', views.books),
    url(r'login$', views.login), 
    url(r'log_out$',views.log_out),
    url(r'add$',views.add),
    url(r'new_book$',views.new_book),
    url(r'^', views.index),
 
    
]