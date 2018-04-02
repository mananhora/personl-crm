from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint, jsonify
from flask.ext.bcrypt import Bcrypt
# from project import app
# bcrypt = Bcrypt(app)
from functools import wraps

from project.circles.functions import add_member_to_circle
from project.models import *
from project import *
from project.form import *
from flask.ext.login import login_user, LoginManager, current_user, login_required
from project.users.functions import user


################
#### config ####
################

contacts_blueprint = Blueprint(
    'contacts'
  , __name__,
    template_folder='../../templates'
)



@login_required
@contacts_blueprint.route('/addfriend/', methods = ['GET', 'POST'])
def add_friend():
  json_data = request.get_json()
  call_add_to_circle = json_data(['addToCircle']) #if the user is adding the friend to a circle

  #Check if user is logged in..
  if current_user is not None :
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
        #check if location is specified..
        location = None
        if(json_data['location']):
          location = json_data['location']

        #create friend object
        friend = Friend(
          name = json_data['name'],
          email = json_data['email'],
          user_id= current_user.id,
          location = location)
        try:
          db.session.add(friend)
          status = True
          if(call_add_to_circle):
            circles = json_data['circles']
            for i in circles:
              status = add_member_to_circle(False, friend.id, i)
              if status == False:
                print("error")
                break
            db.session.commit()
        except:
          status = False
        return jsonify({'result': status, 'friend_id':friend.id})
  status = False
  return jsonify({'result': status})


@login_required
@contacts_blueprint.route('/searchbylocation/', methods = ['GET', 'POST'])
def search_by_location():
  form = SearchByLocationForm()
  if current_user is not None :
      if form.validate_on_submit():
        location = form.location.data
        friends = Friend.query.filter_by(location=location).all()
        for i in range(0, len(friends)):
          print(friends[i].name)
  return render_template('searchbylocation.html', form=form)




@login_required
@contacts_blueprint.route('/friendinfo/', methods = ['GET', 'POST'])
def get_friend_info():
  if current_user is not None:
    json_data = request.get_json()
    friend_id = json_data['friend_id']
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
        friend = Friend.query.get(friend_id)
        return jsonify(friend.serialize)
    return jsonify({'error':True})
