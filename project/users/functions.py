from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint, jsonify
from flask.ext.bcrypt import Bcrypt
# from project import app
# bcrypt = Bcrypt(app)
from functools import wraps
from flask.ext.login import login_user, login_required, logout_user, current_user
from project.models import User
from project.form import *
from project import *
# from flask.ext.social import Social
# from facebook import get_user_from_cookie, GraphAPI


user = None

################
#### config ####
################

users_blueprint = Blueprint(
    'users', __name__,
    template_folder='../../templates'
)


FB_APP_ID='2110167129228190'
FB_APP_NAME = 'mes_amis'
FB_APP_SECRET = 'd4507ca7ee29238e632c9a646162aac5'



from flask import g, render_template, redirect, request, session, url_for

@users_blueprint.route('/isloggedin', methods=['GET'])
def is_logged_in():
  a = current_user.is_anonymous
  print(a)
  if current_user:
    if current_user is not None:
      if a is not True:
        return jsonify({'is_logged_in':True})
      else:
        return jsonify({'is_logged_in': False})
    else:
      return jsonify({'is_logged_in': False})
  else:
    return jsonify({'is_logged_in':False})


@users_blueprint.route('/register', methods=['POST'])
def register():
    print("in register")
    json_data = request.get_json()
    user = User(
      name = json_data['name'],
      email=json_data['email'],
      password=json_data['password']
    )
    try:
      db.session.add(user)
      db.session.commit()
      status = True
    except:
      status = False
    # return redirect(url_for('home.home'))
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
  json_data = request.get_json()
  print (json_data)
  print("username", json_data['username'])
  print("password", json_data['password'])

  user = User.query.filter_by(email=json_data['username']).first()

  if user is not None:
    print (user)
    pw = user.password
    pw_hash = bcrypt.generate_password_hash(pw)
    password_match = bcrypt.check_password_hash(pw_hash, pw)
    if user is not None and password_match is True:
      session['logged_in'] = True
      login_user(user)
      session['logged_in'] = True
      status = True
      print("logged in go crazy")
  else:
    status = False
  return jsonify({'result': status})


@users_blueprint.route('/loginwithfb', methods=['POST', 'GET'])
def index():
    # If a user was set in the get_current_user function before the request,
    # the user is logged in.
    # g.user = None
    # if g.user:
    #   print("g. user")
    #   print(g.user)
    #   return render_template('index.html', app_id=FB_APP_ID,
    #                            app_name=FB_APP_NAME, user=g.user)
    # Otherwise, a user is not logged in.
    # print("i guess there was no g.user..")
    print("redirecting to login.html..")
    return render_template('login.html', app_id=FB_APP_ID, name=FB_APP_NAME)


@app.route('/fblogin')
def index():
  print("in index")
  # If a user was set in the get_current_user function before the request,
  # the user is logged in.
  if current_user.is_authenticated is True:
    print("current user exists")
    print(current_user.__str__)
    return render_template('index.html', app_id=FB_APP_ID,
                         app_name=FB_APP_NAME, user=current_user)
# Otherwise, a user is not logged in.
  return render_template('fb_login.html', app_id=FB_APP_ID, name=FB_APP_NAME)


@login_required
@users_blueprint.route('/userinfo', methods = ['GET'] )
def get_user_info():
  #send info about user
  a = current_user.is_anonymous()

  if a is not True:
    return jsonify(current_user.serialize)
  else:
    print("not logged in!")
    return jsonify({"error":"true"})


@login_required
@users_blueprint.route('/update_user_info', methods = ['POST'])
def update_user_info():
  a = current_user.is_anonymous()
  if a is not True:
    json_data = request.get_json()
    location = json_data['location']
    user = User.get(current_user.id)
    user.location = location
    return jsonify({'result': True})
  return jsonify({'error': True})


@login_required
@users_blueprint.route('/deleteaccount', methods=['GET', 'POST'])
def delete_account():
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      # json_data = request.get_json()
      # password = json_data['password']
      user = User.query.get(current_user.id)
      friends = user.friends
      for friend in friends:
        db.session.delete(friend)
        db.session.commit()
      db.session.delete(user)

      db.session.commit()
      return jsonify({'result':True})
    return jsonify({'result':False})
