# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import random
from django.shortcuts import render,redirect,HttpResponse


def index(request):
    output=''
    if "gold" not in request.session:
        gold=0
        request.session['gold']=gold
        print request.session['gold']
    if "action" not in request.session:    
        request.session['action']=[]
        request.session['action'].append("Welcome")
    return render(request,'gold_app/index.html')
def process(request):
    print request.POST
    print 'hey'
    print request.session['action']
    gain_loose= "made"
    if 'farm' in request.POST:
        earnings=random.randrange(10,20)
        building='farm'
    elif "cave" in request.POST:
        earnings=random.randrange(5,10)
        building='cave'
    elif "house" in request.POST:
        earnings=random.randrange(2,5)
        building='house'
    elif "casino" in request.POST:
        earnings=random.randrange(-50,50)
        building='casino'
        if earnings < 0:
            gain_loose="lost"
    request.session['gold']=request.session['gold']+earnings
    request.session['action'].append('<p >You went to the {0} and {1} {2} gold</p>' .format (building,gain_loose,earnings))
    return redirect('/',)
# Create your views here.
#  request.session['action'].append('<p >You went to the farm and earned {1}</p>' .format (earnings)