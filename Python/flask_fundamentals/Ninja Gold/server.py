from random import *
from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = "ThisIsSecret"


@app.route('/')
def gold():
    output=''
    if "gold" not in session:
        gold=0
        session['gold']=gold
        print session['gold']
    if "action" not in session:
        action="Welcome"
        session['action']=action
    # for i in range(0,len(action)):
    #     output= output+action[i]
    return render_template("index.html")

@app.route('/process_money', methods=["POST"])
def process():
    print request.form['building']
    if request.form['building']=='farm':
        gold=session['gold']
        earnings=randrange(10,20)
        session['gold']=int(gold)+earnings
        print session['gold']
        action=session['action']
        print action
        action= action+" You went to the farm and earned " + str(earnings) + " gold"
        print action
        session['action']=action 
        return redirect('/')
    if request.form['building']=='cave':
        gold=session['gold']
        earnings=randrange(5,10)
        session['gold']=int(gold)+earnings
        action=session['action']
        action= action+" You went to the cave and earned " + str(earnings) + " gold"
        session['action']=action
        return redirect('/',)
    if request.form['building']=='house':
        gold=session['gold']
        earnings=randrange(2,5)
        session['gold']=int(gold)+earnings
        action=session['action']
        action= action+" You went to the house and earned " + str(earnings) + " gold"
        session['action']=action
        return redirect('/',)
    if request.form['building']=='casino':
        gold=session['gold']
        if randint(0,1)==int(1):
            earnings=randrange(0,50)
            session['gold']=int(gold)+earnings
            action=session['action']
            action= action+" You went to the casino and earned " + str(earnings) + " gold"
            session['action']=action
        else:
            earnings=randrange(0,50)
            session['gold']=int(gold)-earnings
            action=session['action']
            action= action+" You went to the casino and lost " + str(earnings) + " gold"
            session['action']=action
        return redirect('/',)
@app.route('/reset')
def reset():
    session['gold']=0
    session['action']="Welcome"
    return redirect('/')
   



app.run(debug=True)