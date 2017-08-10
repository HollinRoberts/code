from flask import Flask,flash, render_template, request, redirect


app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
@app.route("/")
def index():
    
    return render_template("index.html")

@app.route("/result", methods=["POST", 'GET'])
def result():
    if len(request.form['Your Name']) < 1:
        flash("Name cannot be blank!")
   
    if len(request.form['text']) < 1:
        flash("Comment cannot be blank!")
    if len(request.form["text"])>120:
        flash("Comment cant be more than 120 characters.")
    else:
        flash("Success!")
    if request.method== 'POST':
        name=request.form['Your Name']
        location=request.form['location']
        language=request.form['language']
        comment=request.form['text']
        
        print name
        print location
        print language
        print comment
        return render_template('/result.html',name=name,location=location,language=language,comment=comment)

app.run(debug=True) 