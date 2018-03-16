from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint
from project import *
from project.form import *
from flask.ext.login import login_user, LoginManager, current_user, login_required

################
#### config ####
################

tags_blueprint = Blueprint(
    'tags', __name__,
    template_folder='../../templates'
)



#add tag to a friend, given friend id

#show tags for a friend object, given friend object

#remove tags for a friend object, given friend object
