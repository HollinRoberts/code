# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,HttpResponse, redirect
def index(request):
    response= "here"
    return render(request,'amadon_app/index.html')
def buy(request):
    if 'items' not in request.session:
        request.session['items']=0
    if 'charge' not in request.session:
        request.session['charge']=0
    if 'total' not in request.session:
        request.session['total']=0
    if request.method == "POST":
        quantity=request.POST['quantity']
        price=request.POST['price']
        request.session['items']+=int(quantity)
        request.session['charge']=int(quantity)*float(price)
        request.session['total']+=request.session['charge']
        return redirect('/amadon/checkout')
    else:
        return redirect('/amadon/checkout')
    
def checkout(request):
    return render(request,'amadon_app/checkout.html')
# Create your views here.
