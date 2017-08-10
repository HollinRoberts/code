from flask import Flask,flash, render_template, request, redirect, session 
import re
import datetime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD = re.compile(r'[A-Za-z0-9]{8,}')
DATE= re.compile(r'^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$')



app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route("/")
def index():
    print datetime.date.today
    return render_template("index.html")

@app.route("/result", methods=["POST"])

def result():
    i=datetime.date.today()
    new_date=i.strftime("%m/%d/%Y")
    # print (len(request.form['password']))
    if len(request.form['Your Name']) < 1:
        flash("First name cannot be blank!","error")

    if len(request.form['Last']) < 1:
        flash("Last name cannot be blank!","error")

    if len(request.form['email']) < 1:
        print "check 2"
        flash("Email cannot be blank!","error")
    
    if not EMAIL_REGEX.match(request.form["email"]):
        flash("Invalid Email Address!","error")
    
    if request.form['birthdate'] == new_date:
        print "check"
        flash("You can't have been born today")
    
    if not DATE.match(request.form['birthdate']):
        flash("Not a valid date")

    if len(request.form['password']) < 8:
        flash("Password must be at least 8 characters!","error")
    
    elif not PASSWORD.match(request.form["password"]):
        flash("Password must be at least 8 characters and have at least one capital and one number!","error")
    
    # if len(request.form['confirm']) < 8:
    #     flash("Confirm Password must be at least 8 characters!","error")
    elif request.form['password'] != request.form['confirm']:
        flash('Passwords must match!',"error")


    else:
        flash("Thanks for submitting your information!","success")
    # if request.method== 'POST':
    #     name=request.form['Your Name']
    #     location=request.form['location']
    #     language=request.form['language']
    #     comment=request.form['text']
        
    #     print name
    #     print location
    #     print language
    #     print comment
    return redirect('/')

app.run(debug=True) 