from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint, jsonify
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
  json_data = request.get_json()
  print(current_user)
  a = (current_user.is_anonymous==True)

  if current_user is not None and a==False:
    print ('current user is not none!!')
    try:
      print("in add circle")
      user_id = current_user.id,
      circle = Circle(circle_name=json_data['circle_name'], user_id=user_id, parent_id=1)
      db.session.add(circle)
      db.session.commit()
      db.session.add(circle)
      db.session.commit()
      status = True
      print("done...")
    except:
      status = False
    return jsonify({'result': status})
  else:
    print('current user is None')
    return jsonify({'message':"ERROR, NOT LOGGED IN", 'error':True})


@login_required
@circles_blueprint.route('/addtocircle/', methods = ['GET', 'POST'])
#add a friend to a circle, given that the friend already exists in the user's friend_list
def add_member_to_circle(json=False, friend_id=None, circle_id=None):
  status = False
  if(json==True):
    json_data = request.get_json()
    circle_id = json_data['circle_id']
    friend_id = json_data['friend_id']

  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      print("adding to circle..")
      friend = Friend.query.get(friend_id)
      circle = Circle.query.get(circle_id)
      print("got the friend and the circle")
      try:
          circle.friends.append(friend)
          friend.circles.append(circle)
          db.session.commit()
      except:
          status = False
      try:
        db.session.commit()
        status = True
        print("added member to circle successfully")
      except:
        status = False
  if(json==True):
      return jsonify({'result': status})
  else :
    return status



@login_required
@circles_blueprint.route('/friendsincircle/', methods = ['GET', 'POST'])
#for a given circle, get all friends in that circle, and in child circles..
def get_all_friends_in_circle(circle_id=None):
  """if circle id is not passed in, takes data from request json
  if it is passed in, takes that.."""
  json_data = request.get_json()

  if circle_id is None:
    circle_id = json_data['id']
  print(circle_id)

  if current_user is not None:
    circle = Circle.query.get(circle_id)
    friends = circle.friends
    for i in range(0, len(friends)):
        print(friends[i].name)
    db.session.commit()
    return jsonify(json_list=[i.serialize for i in friends])






@login_required
@circles_blueprint.route('/circlesforfriend/', methods = ['GET', 'POST'])
#for a given friend, get all circles that they are in
def get_all_circles_for_friend():
  json_data = request.get_json()
  friend_id = json_data['friend_id']

  if current_user is not None:
    friend = Friend.query.get(friend_id)
    circles = friend.circles
    db.session.commit()
    return jsonify(json_list=[i.serialize for i in circles])




#for a given user, get all circles they have
@login_required
@circles_blueprint.route('/showallcircles/', methods = ['GET'])
def get_all_circles_for_user():
  print ("in show all circles")
  user_id = current_user.id
  user = User.query.get(user_id)
  circles = user.circles.all()
  circles_to_friends_map_list = []
  # response = make_response(200)
  # response.headers['circles'] = circles

  return jsonify(json_list=[i.serialize for i in circles])
