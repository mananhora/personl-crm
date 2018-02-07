import os
import requests
from flask import Flask, render_template, request, session, flash, g
from functools import wraps
port = int(os.environ.get("PORT", 5433))
from flask_sqlalchemy import SQLAlchemy


application = Flask(__name__) #instance of application


#  "postgresql://mananhora@localhost/messamis"

application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://mananhora@localhost/messamis"
application.secret_key = "wahe guru"


# Notice how you don't have to make any changes to the config file
# - it's setting the database based on the newly created DATABASE_URL environment variable.

# application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip"
# application.config['DEBUG'] = True

db = SQLAlchemy(application) #create instance of sql alchemy with application as parameter 

import models, config

# login required decorator
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap



@application.route('/')
@login_required
def home():
	g.db = connect_db() #connect to database
	#perform queries here..
	g.db.close() #close connection with database..
    return render_template('index.html')  # render a template


@application.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')  # render a template


@application.route('/login', methods=['GET', 'POST'])
def login():
	flash('in login')
	error = None
	if request.method=='POST':
		if request.form['username']!='admin' or request.form['password']!='admin':
			error = 'Invalid credentials. Please try again.'
			flash('ERROR')
		else:
			session['logged_in'] = True
			print ('logged in')
			flash('you were just logged in ')
			return redirect(url_for('home'))
	return render_template('index.html', error=error)



@application.route('/logout', methods=['GET', 'POST'])
def logout():
	error = None
	session.pop('logged_in', None)
	print ('logged out')
	flash('you were just logged out')
	return redirect(url_for('welcome'))

# connect to database

def connect_db():
    #add code here..











if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0', port=port)