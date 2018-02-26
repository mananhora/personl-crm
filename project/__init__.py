from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.bcrypt import Bcrypt
from flask.ext.login import LoginManager
import os
from functools import wraps
from flask import Flask, render_template, request, session, flash, redirect, url_for



################
#### config ####
################

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config.from_object(os.environ['APP_SETTINGS'])
db = SQLAlchemy(app)
# app.static_folder=os.path.join(os.curdir, 'static/dist')

from project.users.functions import users_blueprint
from project.home.functions import home_blueprint
from project.contacts.functions import contacts_blueprint


# register our blueprints
from project.models import *

app.register_blueprint(users_blueprint)
app.register_blueprint(home_blueprint)
app.register_blueprint(contacts_blueprint)

#LOGIN MANAGER
login_manager = LoginManager()
login_manager.init_app(app)

login_manager.login_view = "users.login"


# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.filter(User.id == int(user_id)).first()


# @login_manager.user_loader
# def load_user(user_id):
#     return User.get(user_id)


@login_manager.user_loader
def load_user(user_id):
    user = User.query.filter(User.id == int(user_id)).first()
    flash('hello')
    if user is not None:
      flash(user.id)
    return user



# # login required decorator
# def login_required(f):
#     @wraps(f)
#     def wrap(*args, **kwargs):
#         if 'logged_in' in session:
#             return f(*args, **kwargs)
#         else:
#             flash('You need to login first.')
#             return redirect(url_for('login'))
#     return wrap
