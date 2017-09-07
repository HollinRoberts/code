# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,HttpResponse, redirect
def index(request):
    response= "here"
    return render(request,'words_app/index.html')
def add(request):
    print "in add"
    if 'bob' not in request.session:
        request.session['bob']=[]
    if request.method == "POST":
        print "in if"
        print request.POST
        print request.session
        request.session['word']=request.POST['word']
        request.session['radio']=request.POST['radio']
        if 'big' in request.POST:
            request.session['big']=request.POST['big']
        else :
            request.session['big']=''
        # TODO:add date time to end of string. skipping for time reasons.
        request.session['bob'].append('<p class="{0} {1}">{2}</p>' .format (request.session['big'] , request.session['radio'], request.session['word']))
        print request.session['bob']


        return redirect('/words')
    else:
        return redirect('/words')

