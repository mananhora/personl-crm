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
      return jsonify({'result':True })
    except:
      return jsonify({'result': False, desc:something_wrong_message})


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
  # print("user")
  print (user)
  pw = user.password
  pw_hash = bcrypt.generate_password_hash(pw)
  password_match = bcrypt.check_password_hash(pw_hash, pw)
  if user is not None and password_match is True:
    session['logged_in'] = True
    # flash('You were logged in. Go Crazy.')
    login_user(user)
    session['logged_in'] = True
    print("logged in go crazy")
    return jsonify({'result': True})

  else:
    return jsonify({'result': False, desc:something_wrong_message})


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
  return jsonify({'result': False, desc:login_error_message})

# @app.before_request
# def get_current_user():
#     """Set g.user to the currently logged in user.
#     Called before each request, get_current_user sets the global g.user
#     variable to the currently logged in user.  A currently logged in user is
#     determined by seeing if it exists in Flask's session dictionary.
#     If it is the first time the user is logging into this application it will
#     create the user and insert it into the database.  If the user is not logged
#     in, None will be set to g.user.
#     """
#     print("before request, get current user")
#     # Set the user in the session dictionary as a global g.user and bail out
#     # of this function early.
#     if session.get('user'):
#         print("if session gets user")
#         user = session.get('user')
#         print("user")
#         print(user)
#         return
#
#     # Attempt to get the short term access token for the current user.
#     result = get_user_from_cookie(cookies=request.cookies, app_id=FB_APP_ID,
#                                   app_secret=FB_APP_SECRET)
#
#     print("result")
#     print(result)
#
#     # If there is no result, we assume the user is not logged in.
#     if result:
#         print("in if result")
#         # Check to see if this user is already in our database.
#         # user = User.query.filter(User.id == result['uid']).first()
#         user = None
#
#         if not user or user is None:
#             print("user is none or doesnt exist")
#             # Not an existing user so get info
#             graph = GraphAPI(result['access_token'])
#             profile = graph.get_object('me')
#             print("profile")
#             print(profile)
#             if 'link' not in profile:
#                 profile['link'] = ""
#
#             # Create the user and insert it into the database
#             # user = User(id=(profile['id']), name=profile['name'],
#             #             profile_url=profile['link'],
#             #             access_token=result['access_token'])
#
#             user = User(name=profile['name'],
#                         profile_url=profile['link'],
#                         access_token=result['access_token'])
#
#             db.session.add(user)
#         elif user.access_token != result['access_token']:
#             print("user access token isnt the same")
#             # If an existing user, update the access token
#             user.access_token = result['access_token']
#
#         # Add the user to the current session
#         session['user'] = dict(name=user.name, profile_url=user.profile_url,
#                                id=user.id, access_token=user.access_token)
#
#     # Commit changes to the database and set the user as a global g.user
#     db.session.commit()
#     print("exited iff")
#     user = session.get('user', None)
