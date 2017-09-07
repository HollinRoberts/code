# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import Power,Hero,HeroManager
from ..login.models import User
from django.shortcuts import render,redirect,HttpResponse

def index(request):
    print "heros index"
    context = {"heros":Hero.objects.all()}

    # print heros['heros'].powers.all()
    # context={'heros':Hero.objects.all()}
    return render(request, 'heros_app/dashboard.html',context)

def heros(request):
    print "heros"
    return render(request, "heros_app/heros.html")

def log_out(request):
    request.session.flush()
    print request.session['id']
    return redirect('/login')

def powers(request):
    print "powers"
    return render(request, "heros_app/powers.html")
def add_power(request):
    print "adding power"
    Power.objects.power_create(request.POST)
    return redirect('/dashboard')
def add_hero(request):
    print "adding hero"
    Hero.objects.hero_create(request.POST)
    return redirect('/dashboard')
def profile(request,name):
    print "profile"
    hero=Hero.objects.filter(name=name)
    print hero[0].name
    powers=hero[0].powers.all()
    print powers
    context = {'hero':Hero.objects.filter(name=name),'powers':Power.objects.all(),'hp':powers}
    try:
        print "try"
        power=request.POST['powers']
        print "*"
        print power
        power_object=Power.objects.get(name=power)
        print "*"
        hero=Hero.objects.get(name=name)
        print hero
        hero.powers.add(power_object)
        print "after add"
        hero.save()
        return render(request, "heros_app/profile.html",context)
    except:
        return render(request, "heros_app/profile.html",context)
def like(request,name):
    print "in like"
    hero=Hero.objects.get(name=name)
    print hero.name
    print request.session['user_id']
    user=User.objects.get(id=request.session['user_id'])
    print user.name
    print hero.likes.add(user)
    hero.save()
    print hero.likes.all().count()
    
    return redirect("/dashboard")