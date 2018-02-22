import os
import requests
from flask import Flask, render_template, request, session, flash, g, redirect, url_for
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from flask.ext.bcrypt import Bcrypt
from form import *
from flask.ext.login import login_user, logout_user, LoginManager, current_user
debug = False
from flask import jsonify

login_manager = LoginManager()

app = Flask(__name__) #instance of application
login_manager.init_app(app)


# bcrypt = Bcrypt(application)
#"postgresql://mananhora@localhost/mesamis"


app.config.from_object(os.environ['APP_SETTINGS'])
app.secret_key = "wahe guru"


# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://mananhora@localhost/mesamis"
# Notice how you don't have to make any changes to the config file
# - it's setting the database based on the newly created DATABASE_URL environment variable.
# application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip"


db = SQLAlchemy(app) #create instance of sql alchemy with application as parameter

from models import * #import after creating the db

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


@app.route('/')
@login_required
def home():
    # g.db = connect_db() #connect to database
    # #perform queries here..
    # g.db.close() #close connection with database..
    return render_template('index_archive.html')  # render a template


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


@app.route('/welcome')
def welcome():
    return render_template('welcome.html')  # render a template


@app.route('/login', methods=['GET', 'POST'])
def login():
    if(debug):
        flash('in login')
    error = None
    form = LoginForm(request.form)
    if request.method=='POST':
        if form.validate_on_submit(): #if the form is VALID
            #QUERY THE DATABASE to check if the user exists
            user = User.query.filter_by(name=request.form['username']).first()
            if user is not None: #if user exists, check password
                pw = user.password
                if user is not None and pw==request.form['password']:
                    session['logged_in'] = True
                    flash('You were logged in. Go Crazy.')
                    return redirect(url_for('home'))
                else:
                    flash('ERROR')
                    error = 'Invalid username or password.'
            else:
                error = 'Invalid username or password.'
                flash('ERROR')
    return render_template('login.html', error=error, form=form)



user = None

@app.route('/register/', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(
            name=form.username.data,
            email=form.email.data,
            password=form.password.data
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return redirect(url_for('home'))
    return render_template('register.html', form=form)



@app.route('/logout', methods=['GET', 'POST'])
def logout():
    error = None
    session.pop('logged_in', None)
    print ('logged out')
    flash('you were just logged out')
    return redirect(url_for('welcome'))


login_manager.login_view = "users.login"
@login_manager.user_loader
def load_user(user_id):
    user = User.query.filter(User.id == int(user_id)).first()
    flash('hello')
    if user is not None:
      flash(user.id)
    return user


@login_required
@app.route('/addfriend/', methods = ['GET', 'POST'])
def add_friend():
  form = FriendCreationForm()
  if form.validate_on_submit():
    friend = Friend(
      name = form.name.data,
      email = form.email.data,
      user_id=current_user.id,
    location = form.location.data)
    db.session.add(friend)
    db.session.commit()
    flash('friend successfully added!')
    return redirect(url_for('home'))
  return render_template('addfriend.html', form=form)


@login_required
@app.route('/showallfriends/', methods = ['GET'])
def get_friends():
    user_id = current_user.id
    friends = Friend.query.filter_by(user_id=user_id).all()
    # for i in range(0, len(friends)):
    #   print(friends[i].name)
    # flash(str(friends.name))
    return render_template('index.html')







if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5433))
    host = '0.0.0.0'
    if(os.environ['APP_SETTINGS']=='config.BaseConfig'):
        app.run(debug=debug, host=host)
    else:
        app.run(debug=debug, host =host, port=port)
