# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
from django.contrib import messages
from django.shortcuts import render,redirect, HttpResponse

def index(request):
    print 'here'
    context={'users':User.objects.all()}
    
    return render(request,'restful_app/index.html',context)

def new(request):

    return render(request, 'restful_app/new.html')

def edit(request,user_id):
    print 'edit'
    context={'user':user_id}

    return render(request, 'restful_app/edit.html',context)

def show(request,user_id):
    print "in show"
   
    context={'user':user_id, 'info':User.objects.get(id=user_id)}

    
    return render(request, 'restful_app/show.html',context)

def create(request):
    print User.objects.basic_validator(request.POST)
    errors = User.objects.basic_validator(request.POST)
    print errors
    if len(errors):
        for tag, error in errors.iteritems():
            print "errors"
            messages.error(request, error, extra_tags=tag)
        return redirect('/new')
    else:
        name=request.POST['first_name']
        last=request.POST['last_name']
        email=request.POST['email']
        User.objects.create(first_name=name,last_name=last,email=email)
        return redirect('/')

def destroy(request,user_id):
    print "in delete"
    User.objects.get(id=user_id).delete()
    return redirect('/')
def update(request,user_id):
    print 'in update'
    print user_id
    print User.objects.get(id=user_id).first_name
  
    update=User.objects.get(id=user_id)
    update.first_name=request.POST['first_name']
    update.last_name=request.POST['last_name']
    update.email=request.POST['email']
    update.save()
    return redirect('/user/{}'.format(user_id))