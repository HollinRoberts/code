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
    def email_check(self,postData):
  
        try:
            email=postData['email']
            user=User.objects.filter(email=email)
            user[0].email==email
            return True
        except:
            return False

    def basic_validator(self, postData):
        errors = {}
        if User.objects.email_check(postData):
            errors["user"]="User already exists"
        print postData
        # if not user[0]==undefined:
        #     errors['user']="user already exists"
        if len(postData['name'])<2:
            errors['name']="Please enter a first name."
        if not NAME.match(postData['name']):
            errors['name']="Name can only have letters."
        if len(postData['alias'])<2:
            errors['alias']="Please enter an alias."
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

    def user_creation(self,postData,request):
        name=postData['name']
        alias=postData['alias']
        email=postData['email']
        password=postData['password']
        password=bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        birthdate=postData['birthdate']
        created=User.objects.create(name=name,alias=alias,email=email,password=password,birthdate=birthdate)
        request.session['id']=created.id
        print request.session['id']
        request.session['name']=created.name
        print request.session['name']
        return self;
    
    def book_creation(self,postData,request):
        print postData
        title=postData['title']
        try:
            author=postData['existing_author']
        except:
            author=postData['author']
        book=Book.objects.create(title=title,author=author)
        request.session['book']=book.id
        return self

    def review_creation(self,postData,request):
        content=postData['review']
        stars=postData['stars']
        book_id=request.session['book']
        user_id=request.session['id']
        Review.objects.create(content=content,stars=stars,book_id=book_id,reviewer_id=user_id)
        return self

    def login_check(self,request):
    
        try:
            temp = request.session['id']
            print request.session['id']
        except:
            print "no id"
            return False
        return True

    def login(self,postData,request):
        email=postData['email']
        user=User.objects.filter(email=email)
        password=postData['password']
        user_password=user[0].password
        if User.objects.email_check(postData) and bcrypt.checkpw(password.encode(),user_password.encode()):
            request.session['id']=user[0].id
            print request.session['id']
            request.session['name']=user[0].name
            print request.session['name']
            return True
        else:
            return False



class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255,null=True,blank=True)
    birthdate = models.CharField(max_length=255,null=True,blank=True)
 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<User object: {} {} {}>".format(self.first_name, self.last_name, self.email)
    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length=255)
    author =models.CharField(max_length=255,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return "<Book object: {} {}>".format(self.title, self.author)

class Review(models.Model):
    content = models.TextField(null=True)
    stars = models.IntegerField(null=True)
    reviewer = models.ForeignKey(User, related_name = "user_reviews")
    book = models.ForeignKey(Book, related_name = "book_reviews")
    def __repr__(self):
        return "<Review object: {} {} {}>".format(self.content, self.reviewer, self.book)