# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re
import bcrypt
from datetime import date,datetime
from datetime import timedelta
NAME = re.compile(r'^\w+')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name'])<3:
            errors['first_name']="Please enter a first name."
        elif not NAME.match(postData['first_name']) and not NAME.match(postData['last_name']):
            errors['first_name']="Name can only have letters."
        if len(postData['last_name'])<3:
            errors['last_name']="Please enter a last name."
        if len(postData['email'])==0:
            errors['email']="Please enter an email."
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email2']="Improper Email"
        date = postData['birthdate']
        try:
            d = datetime.strptime(date, '%m/%d/%Y')
            if d>datetime.now()-timedelta(days=6570):
                errors['age']="You must be at least 18"
        except:
            errors['birthdate']="Invalide Birthdate"
        return errors;
    def user_create(self, postData):
        first=postData['first_name']
        last=postData['last_name']
        email=postData['email']
        
        date=postData['birthdate']
        birthdate= datetime.strptime(date, '%m/%d/%Y')
        birthdate.strftime('%Y-%m-%d')
        User.objects.create(first_name=first,last_name=last,email=email,birthdate=birthdate)

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    birthdate = models.DateField()
    created_at = models.DateField(auto_now_add=True)
    objects=UserManager()