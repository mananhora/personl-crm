from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint
from flask.ext.bcrypt import Bcrypt
from project import app
# bcrypt = Bcrypt(app)
from functools import wraps
from project.models import *
from project import *
from flask.ext.login import login_user, LoginManager, current_user, login_required


################
#### config ####
################

home_blueprint = Blueprint(
    'home', __name__,
    template_folder='../../templates'
)

@home_blueprint.route('/showallfriends/', methods = ['GET'])
@login_required
def get_friends():
    if current_user is not None:
      if current_user.id is not None:
        user_id = current_user.id
        friends = Friend.query.filter_by(user_id=user_id).all()
        for i in range(0, len(friends)):
          print(friends[i].name)
    # flash(str(friends.name))
    return render_template('index.html')


@home_blueprint.route('/')
def home():
    # g.db = connect_db() #connect to database
    # #perform queries here..
    # g.db.close() #close connection with database..
    return app.send_static_file('dist/index.html')  # render a template
