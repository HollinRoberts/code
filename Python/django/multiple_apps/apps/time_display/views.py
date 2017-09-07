from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime, localtime
def index(request):
  context = {
  "time":strftime('%c', localtime())
  }
  return render(request,'time_display/index.html', context)