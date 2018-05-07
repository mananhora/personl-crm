from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.bcrypt import Bcrypt
from flask.ext.login import LoginManager
import os
from functools import wraps
# from flask_security import SQLAlchemyUserDatastore, Security
from flask import Flask, render_template, request, session, flash, redirect, url_for
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy import create_engine
# from pyicloud import PyiCloudService


################
#### config ####
################

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config.from_object(os.environ['APP_SETTINGS'])
db = SQLAlchemy(app)

from sqlalchemy.ext.declarative import declarative_base


# app.config['SECURITY_POST_LOGIN'] = '/profile'
engine = create_engine('postgresql://mananhora@localhost/mesamis', convert_unicode=True)


db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()

from project.users.functions import users_blueprint
from project.home.functions import home_blueprint
from project.contacts.functions import contacts_blueprint
from project.circles.functions import circles_blueprint
from project.reminders.functions import reminders_blueprint
# from project.import_data.functions import import_data_blueprint





# register our blueprints
from project.models import *

app.register_blueprint(users_blueprint)
app.register_blueprint(home_blueprint)
app.register_blueprint(contacts_blueprint)
app.register_blueprint(circles_blueprint)
app.register_blueprint(reminders_blueprint)
# app.register_blueprint(import_data_blueprint)


login_error_message = 'It seems you are not logged in. Please log in and try again.'
something_wrong_message = 'Woops, something went wrong. Sorry, try again later.'
desc = 'description'

#LOGIN MANAGER
login_manager = LoginManager()
login_manager.init_app(app)

login_manager.login_view = "users.login"

# user_datastore = SQLAlchemyUserDatastore(db, User, None)
# security = Security(app, user_datastore)

# app.config['SOCIAL_FACEBOOK'] = {
#     'consumer_key': '2110167129228190',
#     'consumer_secret': 'd4507ca7ee29238e632c9a646162aac5'
# }



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
