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





@users_blueprint.route('/register/', methods=['GET', 'POST'])
def register():
    print("HELLOOO")
    print (request)
    print (app.static_folder)
    print(request.json)
    json_data = request.json
    user = User(
      name = json_data['name'],
      email=json_data['email'],
      password=json_data['password']
    )
    db.session.add(user)
    db.session.commit()
    login_user(user)
    print (app.static_folder)
    # return redirect(url_for('home.home'))
    return app.send_static_file('dist/index.html')



@users_blueprint.route('/logout', methods=['GET', 'POST'])
def logout():
    error = None
    session.pop('logged_in', None)
    print ('logged out')
    logout_user()
    flash('you were just logged out')
    return redirect(url_for('home.home'))



@users_blueprint.route('/login', methods=['GET', 'POST'])
def login():
  if (debug):
    flash('in login')
  json_data = request.json
  user = User.query.filter_by(email=json_data['email']).first()
  pw = user.password
  if user is not None and pw == json_data['password']:
    session['logged_in'] = True
    flash('You were logged in. Go Crazy.')
    login_user(user)
    session['logged_in'] = True
    status = True
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
