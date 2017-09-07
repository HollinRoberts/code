# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,redirect,HttpResponse
from datetime import date,datetime
from datetime import timedelta
from models import User,UserManager
from django.contrib import messages

def register(request):
    print "register page"
    return render(request,'login_app/index.html')
def submit(request):
    errors= User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "errors"
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        print 'in submit else'
        User.objects.user_create(request.POST)
        return redirect( '/birthdays/dashboard')

