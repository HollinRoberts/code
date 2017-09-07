# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
import bcrypt

from django.db import models

NAME = re.compile(r'^[a-zA-Z\s]*$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name'])<2:
            errors['name']="Please enter a name."
        elif not NAME.match(postData['name']):
            errors['name']="Name can only have letters."  
        if len(postData['password'])==0:
            errors['password']="You must enter a password"
        if not postData['email']:
            errors['email']="You must enter an email"
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email2']="Improper Email"
        
        return errors;
    def login_validation(self, postData,request):
        user = User.objects.get(email=postData['email'])
        print user.email
        print postData['email']
        if postData['email'] == user.email:
            request.session['user_id']= user.id
            return True
        else:
            return False
    def user_create(self,postData,request):
        name=postData['name']
        email=postData['email']
        password=postData['password']
        password=bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        created=User.objects.create(name=name,email=email,password=password)
        request.session['id']=created.id
        return self


class User(models.Model):
    objects = UserManager()
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    def __repr__(self):
        return "<User object: {} {} {}>".format(self.name, self.email, self.password)



