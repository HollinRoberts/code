# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.validators import RegexValidator, validate_email
from django.db import models
import re
email_regex = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")


class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['first_name'])==0:
            errors['first_name']="Please enter a first name."
        if len(postData['last_name'])==0:
            errors['last_name']="Please enter a last name."
        if len(postData['email'])==0:
            errors['email']="Please enter an email."
        elif not email_regex.match(postData['email']):
            errors['email2']="Improper Email"
        return errors;

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<User object: {} {} {}>".format(self.first_name, self.last_name, self.email)
    objects = UserManager()