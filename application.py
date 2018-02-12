import os
import requests
from flask import Flask, render_template, request, session, flash, g, redirect, url_for
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from flask.ext.bcrypt import Bcrypt
from form import *

port = int(os.environ.get("PORT", 5433))

application = Flask(__name__) #instance of application
bcrypt = Bcrypt(application)

#  "postgresql://mananhora@localhost/messamis"

# application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://mananhora@localhost/mesamis"
application.secret_key = "wahe guru"


# Notice how you don't have to make any changes to the config file
# - it's setting the database based on the newly created DATABASE_URL environment variable.

application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip"
application.config['DEBUG'] = True


db = SQLAlchemy(application) #create instance of sql alchemy with application as parameter

from models import * #import after creating the db
db.create_all()

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
    # g.db = connect_db() #connect to database
    # #perform queries here..
    # g.db.close() #close connection with database..
    return render_template('index.html')  # render a template


@application.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


@application.route('/welcome')
def welcome():
    return render_template('welcome.html')  # render a template


@application.route('/login', methods=['GET', 'POST'])
def login():
    flash('in login')
    error = None
    form = LoginForm(request.form)
    if request.method=='POST':
        #if the form is VALID
        #if form.validate_on_submit():
        #QUERY THE DATABASE to check if the user exists
        # user = User.query.filter_by(name=request.form['username']).first()
        user = User.query.filter_by(name='Tarin').first()

        #if user exists, check password
        if user is not None and bcrypt.check_password_hash(user.password, 'hello_tarin'):
            session['logged_in'] = True
            flash('You were logged in. Go Crazy.')
            return redirect(url_for('home.home'))
        else:
            error = 'Invalid username or password.'
            flash('ERROR')
    return render_template('login.html', error=error, form=form)


@application.route('/logout', methods=['GET', 'POST'])
def logout():
    error = None
    session.pop('logged_in', None)
    print ('logged out')
    flash('you were just logged out')
    return redirect(url_for('welcome'))



if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0', port=port)
