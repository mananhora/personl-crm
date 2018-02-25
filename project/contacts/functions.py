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

contacts_blueprint = Blueprint(
    'contacts', __name__,
    template_folder='../../templates'
)



@login_required
@contacts_blueprint.route('/addfriend/', methods = ['GET', 'POST'])
def add_friend():
  form = FriendCreationForm()
  hello = current_user.is_authenticated
  print (hello)
  if current_user is not None :
    print (current_user)
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
