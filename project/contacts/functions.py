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

contacts_blueprint = Blueprint(
    'contacts'
  , __name__,
    template_folder='../../templates'
)



@login_required
@contacts_blueprint.route('/addfriend/', methods = ['GET', 'POST'])
def add_friend():
  form = FriendCreationForm()
  if current_user is not None :
    print ('current user is not none!!')
    if current_user.id is not None :
      if form.validate_on_submit():
        friend = Friend(
          name = form.name.data,
          email = form.email.data,
          user_id=current_user.id,
        location = form.location.data)
        db.session.add(friend)
        db.session.commit()
        flash('friend successfully added!')
        return redirect(url_for('home.home'))
    else:
      print('user not none but user id none?..')
  else:
    print ('current user is none')

  return render_template('addfriend.html', form=form)


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


