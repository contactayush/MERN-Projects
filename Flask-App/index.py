from flask import Flask, render_template,redirect,url_for

app = Flask(__name__)

name = "Prajwal"

@app.route("/")
def index():
    return render_template("index.html", myName=name)

@app.route("/login")
def show():
    return redirect(url_for('index'))

app.run(debug=True)