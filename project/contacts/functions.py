from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint, jsonify, make_response
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

login_error_message = 'It seems you are not logged in. Please log in and try again.'
something_wrong_message = 'Woops, something went wrong. Sorry, try again later.'
desc = 'description'



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
  call_add_to_circle = json_data['addToCircle'] #if the user is adding the friend to a circle

  #Check if user is logged in..
  if current_user is not None :
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
        #check if location is specified..
        location = None
        if 'location' in json_data:
          location = json_data['location']

        #create friend object
        friend = Friend(
          name = json_data['name'],
          email = json_data['email'],
          user_id= current_user.id,
          location = location)

        db.session.add(friend)
        db.session.commit()

        status = True
        if(call_add_to_circle):
          circles = json_data['circles']
          for i in circles:
            status = add_member_to_circle(False, friend.id, i)
            if status == False:
              print("error")
              break
          db.session.commit()

          status = True
        return jsonify({'result': status})
  status = True
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
        return jsonify({'result':True, 'friend':friend.serialize})
    return jsonify({'result':False, desc:login_error_message})


@login_required
@contacts_blueprint.route('/addnote', methods = ['POST'])
def add_note_for_friend():
  if current_user is not None:
    json_data = request.get_json()
    friend_id = json_data['friend_id']
    note = json_data['note']
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      try:
        friend = Friend.query.get(friend_id)
        friend.note = note
        db.session.commit()
        return jsonify({'result':True})
      except:
        return jsonify({'result':False, desc:something_wrong_message})
    return jsonify({'result': False, desc:login_error_message})


@login_required
@contacts_blueprint.route('/updatefriendinfo', methods = ['POST'])
def update_info():
  if current_user is not None:
    json_data = request.get_json()
    print (json_data)

    friend_id = json_data['friend_id']
    location = json_data['location']
    notes = json_data['notes']
    phone_number = json_data['phone_number']
    job =json_data['job']
    image_url=json_data['img']
    is_favorite = json_data['is_favorite']

    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      try:
        friend = Friend.query.get(friend_id)
        friend.location = location
        friend.notes = notes
        friend.phone_number = phone_number
        friend.job = job
        friend.image_url = image_url
        friend.is_favorite = is_favorite
        db.session.commit()
        print("success")
        return jsonify({'result': True})
      except:
        return jsonify({'result':False, desc:something_wrong_message})
    return jsonify({'result': False, desc:login_error_message})


@login_required
@contacts_blueprint.route('/setasfavorite', methods = ['POST', 'GET'])
def set_as_favorite():
  if current_user is not None:
    json_data = request.get_json()
    friend_id = json_data['friend_id']
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      try:
        friend = Friend.query.get(friend_id)
        print("helo")
        friend.is_favorite = True
        db.session.commit()
        return jsonify({'result': True})
      except:
        return jsonify({'result': False, desc: something_wrong_message})
    return jsonify({'result': False, desc: login_error_message})






@login_required
@contacts_blueprint.route('/searchbykeyword', methods = ['POST', 'GET'])
def search_by_keyword():
  json_data = request.get_json()
  search_word = json_data['keyword'].lower()

  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      friends = current_user.friends
      result = []
      for friend in friends:
        if friend.location is not None:
          if friend.location.lower() == search_word:
            result.append((friend.serialize))
        if friend.job is not None:
          if friend.job.lower() == search_word:
            result.append(((friend.serialize)))
        if friend.name.lower() == search_word:
          result.append(friend.serialize)
        for circle in friend.circles:
          if circle.circle_name.lower() == search_word:
            result.append((friend.serialize))
      print(result)
      return make_response(jsonify(result))
  return None


@login_required
@contacts_blueprint.route('/addimageurl', methods = ['GET'])
def add_image_url():
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      try:
        json_data = request.get_json()
        image_url = json_data['image_url']
        friend_id = json_data['friend_id']
        friend = Friend.query.get(friend_id)
        friend.image_url = image_url
        db.session.commit()
        return jsonify({'result':True})
      except:
        return jsonify({'result':False, desc:something_wrong_message})
    return jsonify({'result': False, desc:login_error_message})
  return jsonify({'result': False, desc: login_error_message})


@login_required
@contacts_blueprint.route('/deletefriend', methods = ['GET','POST'])
def delete_friend():
  json_data = request.get_json()
  if current_user is not None :
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      friend_id = json_data['friend_id']
      try:
        friend = Friend.query.get(friend_id)
        db.session.delete(friend)
        db.session.commit()
        print("successfully deleted")
        return jsonify({'result':True})
      except:
        return jsonify({'result':False, desc:something_wrong_message})
    return jsonify({'result': False, desc:login_error_message})
  return jsonify({'result': False, desc: login_error_message})
