import os
from flask import Flask, render_template, request #import flask
port = int(os.environ.get("PORT", 5000))
from flask_sqlalchemy import SQLAlchemy

application = Flask(__name__) #instance of application


application.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']

db = SQLAlchemy(application)

@application.route('/')
def home():
    return render_template("index.html")


@application.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0', port=port)