# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re
import bcrypt
NAME = re.compile(r'^\w+')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD = re.compile(r'[A-Za-z0-9]{8,}')
DATE= re.compile(r'^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$')

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name'])<2:
            errors['first_name']="Please enter a first name."
        if not NAME.match(postData['first_name']) and not NAME.match(postData['last_name']):
            errors['first_name']="Name can only have letters."
        if len(postData['last_name'])<2:
            errors['last_name']="Please enter a last name."
        if len(postData['email'])==0:
            errors['email']="Please enter an email."
        elif not EMAIL_REGEX.match(postData['email']):
            errors['email2']="Improper Email"
        if postData['password']!=postData['confirm']:
            errors['password']="Passwords don't match"
        if not PASSWORD.match(postData['password']):
            errors['password']="Password must have an upercase and lowercase leter, a number and be a minimum of 8 characters."
        if not DATE.match(postData['birthdate']):
              errors['birthdate']="Not a valid birthdate"  
        return errors;

    # def password_validator(self, postData)
    


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255,null=True,blank=True)
    birthdate = models.CharField(max_length=255,null=True,blank=True)
 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<User object: {} {} {}>".format(self.first_name, self.last_name, self.email)
    objects = UserManager()