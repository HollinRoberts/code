# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect


def index(request):
    return render(request,'Registration_app/index.html')
def submit(request):
    print 'in submit'
    errors = User.objects.basic_validator(request.POST)
    print errors
    if len(errors):
        for tag, error in errors.iteritems():
            print "errors"
            messages.error(request, error, extra_tags=tag)
        return redirect('/new')
    else:
        print 'in submit else'
        User.objects.user_creation(request.POST,request)
        return redirect('/books')
def login(request):
    print 'in log in'
    if User.objects.login(request.POST,request):
        print 'in if in login'
        return redirect('/books')
    else:
        print 'login redirect'
        return redirect('/')

def books(request):
    print 'books'
    if User.objects.login_check(request):
        return render(request, 'Registration_app/books.html')
    else:
        return redirect('/')
def log_out(request):
    print 'in logout'
    request.session.flush()
    print "session flushed"
    return redirect('/')

def add(request):
    print "add"
    context={"book":Book.objects.all()}
    return render(request, 'Registration_app/add.html',context)

def new_book(request):
    print 'in new_book'
    print request.POST
    User.objects.book_creation(request.POST,request)
    User.objects.review_creation(request.POST,request)
    print 'book created'
    return render(request, 'Registration_app/books.html')
