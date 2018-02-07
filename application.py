import os
from flask import Flask, render_template, request #import flask
port = int(os.environ.get("PORT", 5433))
from flask_sqlalchemy import SQLAlchemy


application = Flask(__name__) #instance of application



#  "postgresql://mananhora@localhost/messamis"


application.config['SQLALCHEMY_DATABASE_URI'] = "postgres://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip"
# application.config['DEBUG'] = True

db = SQLAlchemy(application)

from models import User



@application.route('/')
def home():
    return render_template("index.html")


@application.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0', port=port)