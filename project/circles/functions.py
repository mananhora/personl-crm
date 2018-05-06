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
  a = (current_user.is_anonymous==True)

  if current_user is not None and a==False:
    print ('current user is not none!!')
    try:
      print("in add circle")
      user_id = current_user.id,
      circle = Circle(circle_name=json_data['circle_name'], user_id=user_id)
      db.session.add(circle)
      db.session.commit()
      return jsonify({'result':True, 'circle':circle.serialize})
    except:
      return jsonify({'result':False, 'description':'Whoops, something went wrong.'})
  else:
    return jsonify({'result':False, 'description':'It seems you are not logged in.'})


#add a child circle
@login_required
@circles_blueprint.route('/addchildcircle/', methods = ['GET', 'POST'])
def add_child_circle():
  json_data = request.get_json()
  a = (current_user.is_anonymous==True)

  if current_user is not None and a==False:
    print ('current user is not none!!')
    try:
      print("in add circle")
      user_id = current_user.id,
      circle = Circle(circle_name=json_data['circle_name'], user_id=user_id, parent_id=json_data['parent_id'])
      db.session.add(circle)
      db.session.commit()
      print("done...")
      return jsonify({'result':True, 'circle':circle.serialize})
    except:
      return jsonify({'result': False, desc:something_wrong_message})
  else:
    print('current user is None')
    return jsonify({'result':False, desc:login_error_message})


@login_required
@circles_blueprint.route('/getchildcircles', methods = ['GET', 'POST'])
def get_child_circles():
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      json_data = request.get_json()
      parent_id = json_data['circle_id']
      circle = Circle.query.get(parent_id)
      child_circles = circle.child_circles
      return jsonify({'result':True, 'child_circles':[i.serialize for i in child_circles]})
    return jsonify({'result':False, 'description':login_error_message})
  return jsonify({'result': False, desc:login_error_message})


#add a friend to a circle, given that the friend already exists in the user's friend_list
@login_required
@circles_blueprint.route('/addtocircle/', methods = ['GET', 'POST'])
def add_member_to_circle(json=True, friend_id=None, circle_id=None):
  status = False

  if(json==True):
    print("json is true")
    json_data = request.get_json()
    circle_id = json_data['circle_id']
    friend_id = json_data['friend_id']

  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      print("adding to circle..")
      print(friend_id)
      friend = Friend.query.get(friend_id)
      circle = Circle.query.get(circle_id)
      print("got the friend and the circle")
      circle.friends.append(friend)
      friend.circles.append(circle)
      db.session.commit()
      status = True
      print("added member to circle successfully")
  if(json==True):
      return jsonify({'result': status})
  else :
    return status



#for a given circle, get all friends in that circle, and in child circles..
@login_required
@circles_blueprint.route('/friendsincircle/', methods = ['GET', 'POST'])
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
    return jsonify({'result':True, 'friends':[i.serialize for i in friends]})
  return jsonify({'result':False, desc:login_error_message})



#for a given friend, get all circles that they are in
@login_required
@circles_blueprint.route('/circlesforfriend/', methods = ['GET', 'POST'])
def get_all_circles_for_friend():
  json_data = request.get_json()
  friend_id = json_data['friend_id']

  if current_user is not None:
    friend = Friend.query.get(friend_id)
    circles = friend.circles
    db.session.commit()
    return jsonify({'result':True, circles:[i.serialize for i in circles]})




#for a given user, get all circles they have
@login_required
@circles_blueprint.route('/showallcircles/', methods = ['GET'])
def get_all_circles_for_user():
  print ("in show all circles")
  if current_user is not None:
    a = current_user.is_anonymous()
    if a is False and current_user.id is not None:
      print("current user id not none")
      user_id = current_user.id
      user = User.query.get(user_id)
      circles = user.circles.all()
      return jsonify({'result':True, 'circles':[i.serialize for i in circles]})
    return jsonify({'result':False, desc:login_error_message})
  return jsonify({'result': False, desc: login_error_message})


@login_required
@circles_blueprint.route('/removefriendfromcircle', methods=['POST', 'GET'])
def remove_friend_from_circle():
  json_data = request.get_json()
  if current_user is not None:
    a = current_user.is_anonymous()
    if a is False and current_user.id is not None:
      friend_id = json_data['friend_id']
      circle_id = json_data['circle_id']
      try:
        circle = Circle.query.get(circle_id)
        friend = Friend.query.get(friend_id)
        circle.friends.remove(friend)
        db.session.commit()
        print("Successfully removed")
        return jsonify({'result':True})
      except:
        return jsonify({'result':False, desc:something_wrong_message})
    return jsonify({'result':False, desc:login_error_message})
  return jsonify({'result': False, desc: login_error_message})


@login_required
@circles_blueprint.route('/deletecircle', methods = ['GET','POST'])
def delete_circle():
  json_data = request.get_json()
  if current_user is not None :
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      circle_id = json_data['circle_id']
      print("entering try")
      try:
        circle = Circle.query.get(circle_id)
        db.session.delete(circle)
        db.session.commit()
        print("successfully deleted")
        return jsonify({'result':True})
      except:
        return jsonify({'result':False, desc:something_wrong_message})
    return jsonify({'result':False, desc:login_error_message})
  return jsonify({'result': False, desc: login_error_message})


@login_required
@circles_blueprint.route('/getcircleinfo', methods = ['GET','POST'])
def get_circle_by_id():
  json_data = request.get_json()
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      circle_id = json_data['circle_id']
      print("entering try")
      circle = Circle.query.get(circle_id)
      return jsonify({'result': True, 'circle':circle.serialize})
    return jsonify({'result':False, desc:login_error_message})
  return jsonify({'result': False, desc: login_error_message})


@login_required
@circles_blueprint.route('/assignchildcircle', methods=['GET', 'POST'])
def assign_child_circle():
  json_data = request.get_json()
  a = (current_user.is_anonymous == True)
  if current_user is not None and a == False:
    print ('current user is not none!!')
    try:
      print("in assign child circle")
      parent_circle_id = json_data['parent_id']
      child_circle_id = json_data['child_id']
      parent_circle = Circle.query.get(parent_circle_id)
      child_circle = Circle.query.get(child_circle_id)
      child_circle.parent = parent_circle
      db.session.commit()
      status = True
      print("done...")
      return jsonify({'result': status})
    except:
      status = False
      return jsonify({'result': status, desc:something_wrong_message})
  else:
    return jsonify({'result': False, desc: login_error_message})


@login_required
@circles_blueprint.route('/removechildcircle', methods = ['GET', 'POST'])
def remove_child_circle():
  json_data = request.get_json()
  a = (current_user.is_anonymous == True)
  if current_user is not None and a == False:
    print ('current user is not none!!')
    try:
      print("in remove child circle")
      parent_circle_id = json_data['parent_id']
      child_circle_id = json_data['child_id']
      parent_circle = Circle.query.get(parent_circle_id)
      child_circle = Circle.query.get(child_circle_id)
      parent_circle.child_circles.remove(child_circle)
      db.session.commit()
      status = True
      print("done...")
      return jsonify({'result': status})
    except:
      status = False
      return jsonify({'result': status, desc:something_wrong_message})
  else:
    print('current user is None')
    return jsonify({'result': False, desc: login_error_message})
