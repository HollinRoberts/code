# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
def submit(request):
    print "here"
    print request.POST
    if request.method == "POST":
        print "in if"
        print request.POST
        request.session['counter']+=1
        request.session['name']=request.POST['name']
        request.session['city']=request.POST['location']
        request.session['language']=request.POST['language']
        request.session['comment']=request.POST['text']
        print request.session['name']
        
        return redirect('/result')
    else:
        return redirect('/result')
def index(request):
    request.session['counter']=0
    return render(request,'survey_app/index.html')

def result(request):
    print "hey"
    return render(request,'survey_app/result.html')

# Create your views here.
