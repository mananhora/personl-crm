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



@login_required
@circles_blueprint.route('/addcircle/', methods = ['GET', 'POST'])
#add a circle for the user..parent_id can be passed in as null
def add_circle():
  form = CircleCreationForm()
  if current_user is not None:
    print ('current user is not none!!')
    user_id = current_user.id,
    print("hello")
    if form.validate_on_submit():
      circle = Circle(circle_name=form.circle_name.data, user_id=user_id, parent_id=1)
      db.session.add(circle)
      print("what is the problem")
      db.session.commit()
  else:
    print('current user is None')
  return render_template('add_circle.html', form=form)


#add a friend to a circle, given that the friend already exists in the user's friend_list
def add_member_to_circle(circle_id, friend_id):
  circle = Circle.query.get(circle_id)
  friend = Friend.query.get(friend_id)
  form = FriendCircleForm()
  if current_user is not None:
    circle.friends.append(friend)
    friend.circles.append(circle)
    db.session.commit()



#for a given circle, get all friends in that circle, and in child circles..
def get_all_friends_in_circle(circle_id):
  circle = Circle.query.get(circle_id)
  friends = circle.friends.all()
  print(friends)




#for a given friend, get all circles that they are in
def get_all_circles_for_friend(friend_id):
  circles=[]



#for a given user, get all circles they have
@circles_blueprint.route('/showallcircles/', methods = ['GET'])
def get_all_circles_for_user():
  user_id = current_user.id
  user = User.query.get(user_id)
  circles = user.circles.all()
  print (circles)
  return render_template('index.html')














