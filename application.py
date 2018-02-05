from flask import Flask, render_template, request #import flask

application = Flask(__name__) #instance of application

import os
port = int(os.environ.get("PORT", 5000))


# from application import db
# from application.models import Data
# from flask.ext.sqlalchemy import SQLAlchemy
# from application.forms import EnterDBInfo, RetrieveDBInfo
# import os
# from models import Result


# application.debug=True



# application.config.from_object(os.environ['APP_SETTINGS'])
# application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(application)



@application.route('/')
def home():
    render_template("index.html")


# @app.route('/<name>')
# def hello_name(name):
#     return "Hello {}!".format(name)


if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0', port=port)