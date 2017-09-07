from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
def index(request):
  
  context = {
  "string":get_random_string(length=14)
  }
  request.session['counter']+=1
  return render(request,'random_word_app/index.html', context)

def reset(request):
  request.session['counter']=0
  print "made it here"
  return redirect('/random_word')