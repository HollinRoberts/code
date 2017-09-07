# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
from django.contrib import messages
from django.shortcuts import render,redirect

def index(request):
    print "in index"
    return render(request,'age_sort/index.html')

def login(request):
    print "in login"
    print User.objects.user_check(request.POST,request)
    if User.objects.user_check(request.POST,request)==True:
        print 'user exists'
        return redirect( '/dashboard')
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print "errors"
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        print 'in submit else'
        User.objects.user_create(request.POST,request)
    return redirect( '/dashboard')

def dashboard(request):
    return render(request,'age_sort/dashboard.html')

def age_group(request,age):
    print age
    User.objects.biggest_group(request)
    request.session['age']=age
    context={'users':User.objects.filter(age_group=age)}
    print context
    return render(request, 'age_sort/age_page.html',context)

def comment(request)
    print 'comment'
    return render(request, 'age_sort/comment.html')
