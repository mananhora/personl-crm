from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint
from flask.ext.bcrypt import Bcrypt
# from project import app
# bcrypt = Bcrypt(app)
from functools import wraps
from project.models import *
from project import *
from project.form import *
from flask.ext.login import login_user, LoginManager, current_user, login_required
from project.users.functions import user

################
#### config ####
################

circles_blueprint = Blueprint(
    'circles', __name__,
    template_folder='../../templates'
)

#add a circle for the user..parent_id can be passed in as null
def add_circle(circle_name, user_id, parent_id):
  circle = Circle(circle_name, user_id, parent_id)
  db.session.add(circle)
  db.session.commit()


#add a friend to a circle, given that the friend already exists in the user's friend_list
def add_member_to_circle(circle_id, friend_id):
  friends_circle = friends_circles()
  db.session.commit()



#for a given circle, get all friends in that circle, and in child circles..
def get_all_friends_in_circle(circle_id):
  list_of_friends = []



#for a given friend, get all circles that they are in
def get_all_circles_for_friend(friend_id):
  circles=[]



#for a given user, get all circles they have
def get_all_circles_for_user(user_id):
  circles= []















