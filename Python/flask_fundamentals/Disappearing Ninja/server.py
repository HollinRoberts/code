from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route("/")
def index():
    
    return render_template("index.html")
@app.route("/ninja")
def ninja():
    
    return render_template("ninja.html")
@app.route("/ninja/<color>")
def ninja_color(color):
    if color=="blue":
        return render_template("leonardo.html" )
    elif color=="orange":
        return render_template("michelangelo.html")
    elif color=="red":
        return render_template("raphael.html")
    elif color=="purple":
        return render_template("donatello.html")
    else:
        return render_template("notapril.html")

    


app.run(debug=True) 