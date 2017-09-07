# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    print 'here'
    return render(request,'likes_app/index.html')