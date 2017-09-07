# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *

from django.shortcuts import render,redirect,HttpResponse

def index(request):
    context={'course':Course.objects.all()}
    return render(request,'courses_app/index.html',context)
def submit(request):
    print 'in submit'
    name=request.POST['name']
    desc=request.POST['desc']
    core=Course.objects.create(name=name)
    core.save()
    deck=Desc.objects.create(desc=desc,course=core)
    deck.save()
    return redirect('/')
def remove(request,course_id):
    print "in delete"
    Course.objects.get(id=course_id).delete()
    return redirect('/')
