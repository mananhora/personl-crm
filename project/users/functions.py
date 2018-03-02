from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint, jsonify
from flask.ext.bcrypt import Bcrypt
# from project import app
# bcrypt = Bcrypt(app)
from functools import wraps
from flask.ext.login import login_user, login_required, logout_user
from project.models import User
from project.form import *
from project import *
# from flask.ext.social import Social

user = None

################
#### config ####
################

users_blueprint = Blueprint(
    'users', __name__,
    template_folder='../../templates'
)

debug = False


# default = Blueprint('cast', __name__, static_folder=Config.STATIC_FOLDER, static_url_path='')





@users_blueprint.route('/signup/', methods=['GET','POST'])
def register():
  print("in signup")
  json_data = request.get_json()
  # user = User(
  #   name = json_data['name'],
  #   email=json_data['email'],
  #   password=json_data['password']
  # )
  # try:
  #   db.session.add(user)
  #   db.session.commit()
  #   status = 'success'
  # except:
  status = 'this user is already registered'
  # # return redirect(url_for('home.home'))
  return jsonify({'result': status})




@users_blueprint.route('/logout', methods=['GET', 'POST'])
def logout():
    error = None
    session.pop('logged_in', None)
    print ('logged out')
    logout_user()
    flash('you were just logged out')
    return redirect(url_for('home.home'))



@users_blueprint.route('/login', methods=['POST'])
def login():
  print("in login")
  if (debug):
    flash('in login')
  json_data = request.get_json()
  print (json_data)
  print(json_data['username'])
  user = User.query.filter_by(name=json_data['username']).first()
  # print("user")
  print (user)
  pw = user.password
  if user is not None and pw == json_data['password']:
    session['logged_in'] = True
    # flash('You were logged in. Go Crazy.')
    login_user(user)
    session['logged_in'] = True
    status = True
    print("logged in go crazy")
  else:
    status = False
  return jsonify({'result': status})


# social = Social(app, db)

# @app.route('/profile')
# @login_required
# def profile():
#     return render_template(
#         'profile.html',
#         content='Profile Page',
#         facebook_conn=social.facebook.get_connection())
