from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = "ThisIsSecret"

@app.route('/')
def create_user():
    if "count" not in session:
        count=0
        session['count']=count
    if "count" in session:
        count=session['count']
        session['count']=count+1
        print session['count']
    return render_template('index.html')

@app.route('/reset', methods=["POST"])
def clear_count():
    if "count" in session:
        session["count"]=0
	
    return render_template('index.html')

@app.route('/plus_2', methods=["POST"])
def plus_2():
    if "count" in session:
        count=session['count']
        session["count"]=count+2
	
    return render_template('index.html')

app.run(debug=True)