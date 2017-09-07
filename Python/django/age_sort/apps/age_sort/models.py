# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
from collections import Counter
from django.db import models
NAME = re.compile(r'^[a-zA-Z\s]*$')

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name'])<2:
            errors['name']="Please enter a name."
        elif not NAME.match(postData['name']):
            errors['name']="Name can only have letters."  
        if not postData['age']:
            errors['age']="you must enter an age"
        if postData['age']==0:
            errors['age']="You can't be zero years old"
        return errors;

    def user_create(self,postData,request):
        name=postData['name']
        age=postData['age']
        print "in user_create"
        print age
        if 0<int(age)<18:
            age_group='0-10'
        if 10<int(age)<19:
            age_group='11-18'
        if 18<int(age)<25:
            age_group='19-24'
        if 24<int(age)<36:
            age_group='25-35'
        if 35<int(age)<51:
            age_group='36-50'
        if int(age)>50:
            age_group='51+'
        print age_group
        user=User.objects.create(name=name,age=age,age_group=age_group)
        request.session['id']=user.id
        return self

    def user_check(self,postData,request):
        print postData['age']
        try:
            user=User.objects.filter(name=postData['name'])
            print user
            if int(user[0].age)==int(postData['age']):
                print "in if"
                request.session['user']=user[0].id
                return True
        except:
            return False

    def biggest_group(self,request):
        groups={'0-10':0,'11-18':0,'19-24':0,'25-35':0,'36-50':0,'51+':0}
        for each in groups:
            groups[each]=(User.objects.filter(age_group=each).count())
            c = Counter(groups)
            top_three = c.most_common(3)
        print top_three
        request.session['top']=top_three
        print request.session['top']
        return self




class User(models.Model):
    objects = UserManager()
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    age_group=models.CharField(max_length=255, null=True)
    def __repr__(self):
        return "<User object: {} {} {}>".format(self.name, self.age, self.age_group)

class Comment(models.Model):
    content= models.TextField()
    user = models.ForeignKey(User, related_name = "comments")