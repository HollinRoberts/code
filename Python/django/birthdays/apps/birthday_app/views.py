# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from ..login_app.models import User,UserManager

def dashboard(request):
    print "dashboard page"
    # users=User.objects.all().order_by(birthdate)
    print User.objects.dates('birthdate','month')
    Jan=User.objects.filter(birthdate__month=1)
    Feb=User.objects.filter(birthdate__month=2)
    Mar=User.objects.filter(birthdate__month=3)
    Apr=User.objects.filter(birthdate__month=4)
    May=User.objects.filter(birthdate__month=5)
    Jun=User.objects.filter(birthdate__month=6)
    Jul=User.objects.filter(birthdate__month=7)
    Aug=User.objects.filter(birthdate__month=8)
    Sep=User.objects.filter(birthdate__month=9)
    Oct=User.objects.filter(birthdate__month=10)
    Nov=User.objects.filter(birthdate__month=11)
    Dec=User.objects.filter(birthdate__month=12)
    context={"month":[Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec]}
    print context
    return render(request,'birthday_app/index.html',context)