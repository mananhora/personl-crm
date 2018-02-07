import os
from flask import Flask, render_template, request #import flask
port = int(os.environ.get("PORT", 5000))
from flask_sqlalchemy import SQLAlchemy


application = Flask(__name__) #instance of application



#  "postgresql://mananhora@localhost/messamis"


application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://mananhora@localhost/mesamis"
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