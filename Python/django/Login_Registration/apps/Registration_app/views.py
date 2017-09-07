# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import *
import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect


def index(request):
    # context={'course':Course.objects.all()}
    return render(request,'Registration_app/index.html')
def submit(request):
    print 'in submit'
    errors = User.objects.basic_validator(request.POST)
    print errors
    if len(errors):
        for tag, error in errors.iteritems():
            print "errors"
            messages.error(request, error, extra_tags=tag)
        return redirect('/new')
    else:
        name=request.POST['first_name']
        last=request.POST['last_name']
        email=request.POST['email']
        password=request.POST['password']
        password=bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        birthdate=request.POST['birthdate']
        created=User.objects.create(first_name=name,last_name=last,email=email,password=password,birthdate=birthdate)
        context={"user":created.id,"action":"register"}
        return redirect('/results/{}/{}'.format(created.id,'register'))
def login(request):
    print 'in log in'
    email=request.POST['email']
    password=request.POST['password']
    print email
    print User.objects.filter(email=email)
    user=User.objects.filter(email=email)
    
    print password
    user_password=user[0].password
    print user[0].email
    if user[0].email==email and bcrypt.checkpw(password.encode(),user_password.encode()):
        print 'in if in login'
        context=user[0]
        return redirect('/results/{}/{}'.format(user[0].id,'log'))
    else:
        print 'login redirect'
        return redirect('/')

def results(request,user_id,action):
    if action == 'log':
        context={"user":User.objects.get(id=user_id),"action":"logged in"}
    elif action == 'register':
        context={"user":User.objects.get(id=user_id),"action":"registered"}
    print 'results'
    return render(request, 'Registration_app/results.html',context)



# def result():
#     i=datetime.date.today()
#     new_date=i.strftime("%m/%d/%Y")
#     # print (len(request.form['password']))
#     if len(request.form['Your Name']) < 1:
#         flash("First name cannot be blank!","error")

#     if len(request.form['Last']) < 1:
#         flash("Last name cannot be blank!","error")

#     if len(request.form['email']) < 1:
#         print "check 2"
#         flash("Email cannot be blank!","error")
    
#     if not EMAIL_REGEX.match(request.form["email"]):
#         flash("Invalid Email Address!","error")
    
#     if request.form['birthdate'] == new_date:
#         print "check"
#         flash("You can't have been born today")
    
#     if not DATE.match(request.form['birthdate']):
#         flash("Not a valid date")

#     if len(request.form['password']) < 8:
#         flash("Password must be at least 8 characters!","error")
    
#     elif not PASSWORD.match(request.form["password"]):
#         flash("Password must be at least 8 characters and have at least one capital and one number!","error")
    
#     # if len(request.form['confirm']) < 8:
#     #     flash("Confirm Password must be at least 8 characters!","error")
#     elif request.form['password'] != request.form['confirm']:
#         flash('Passwords must match!',"error")


#     else:
#         flash("Thanks for submitting your information!","success")
#     # if request.method== 'POST':
#     #     name=request.form['Your Name']
#     #     location=request.form['location']
#     #     language=request.form['language']
#     #     comment=request.form['text']
        
#     #     print name
#     #     print location
#     #     print language
#     #     print comment
#     return redirect('/')

# app.run(debug=True) 