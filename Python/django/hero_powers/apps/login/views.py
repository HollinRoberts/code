# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
from django.contrib import messages
from django.shortcuts import render,redirect

def index(request):
    print "login index"
    return render(request, 'login/index.html')
def login(request):
    print "logging in"
    if User.objects.login_validation(request.POST,request):
        return redirect( '/dashboard')
    else:
        return redirect('/')
def register(request):
    print "registering"
    errors=User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "errors"
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        print 'in submit else'
        User.objects.user_create(request.POST,request)
    return redirect( 'heros/dashboard')
