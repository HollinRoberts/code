from random import *
from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = "ThisIsSecret"


@app.route('/')
def rando():
    
    rand=randrange(0,101)
    print rand
    session["rand"]=rand
    print session["rand"]
    return render_template('index.html')

@app.route('/guess', methods=["POST"])
def guesses():
    guess = request.form['guess']
    rand = session["rand"]
    guess = int(guess)
    rand = int(rand)
    print guess
    print session["rand"]
    print rand
    if guess>rand:
        print guess
        print rand
        result="Too high try again"
        return render_template('index.html',result=result)
    elif guess<rand:
        result="Too low try again"
        return render_template('index.html',result=result)
    else:
        result="good job wanna play again?"
        rand=randrange(0,101)
        session["rand"]=rand
        return render_template('index.html',result=result)
	
   



app.run(debug=True)