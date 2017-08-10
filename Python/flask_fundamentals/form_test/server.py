from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = "ThisIsSecret"


# @app.route('/users/<username>/<id>')
# def show_user_profile(username,id):
#    print username
#    print id
#    return render_template("user.html")
   

@app.route('/users', methods=['POST'])
def create_user():
   session["name"] = request.form['name']
   session["email"] = request.form['email']
	
   return redirect("/show")

@app.route('/show')
def show_user():
  return render_template('user.html')

app.run(debug=True) # run our server