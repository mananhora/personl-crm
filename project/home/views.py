#################
#### imports ####
#################

from flask import render_template, Blueprint, \
    request, flash, redirect, url_for
from flask.ext.login import login_required, current_user

from project import db

################
#### config ####
################

home_blueprint = Blueprint(
    'home', __name__,
    template_folder='templates'
)


################
#### routes ####
################

# use decorators to link the function to a url
@home_blueprint.route('/', methods=['GET', 'POST'])
@login_required
def home():
    error = None
    return render_template('index.html', error=error)


@home_blueprint.route('/welcome')
def welcome():
    return render_template('welcome.html')