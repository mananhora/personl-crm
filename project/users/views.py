#################
#### imports ####
#################

from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint
from flask.ext.bcrypt import Bcrypt
from .forms import LoginForm, RegistrationForm   # pragma: no cover
from functools import wraps
from flask.ext.login import login_user
from project.models import User
from project import db


################
#### config ####
################

users_blueprint = Blueprint(
    'users', __name__,
    template_folder='templates'
)

##########################
#### helper functions ####
##########################

# login required decorator
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('users.login'))
    return wrap


@users_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    form = LoginForm(request.form)
    if request.method=='POST':
        if form.validate_on_submit(): #if the form is VALID
            #QUERY THE DATABASE to check if the user exists
            user = User.query.filter_by(name=request.form['username']).first()
            if user is not None: #if user exists, check password
                pw = user.password
                if user is not None and pw==request.form['password']:
                    session['logged_in'] = True
                    flash('You were logged in. Go Crazy.')
                    return redirect(url_for('home.home'))
                else:
                    flash('ERROR')
                    error = 'Invalid username or password.'
            else:
                error = 'Invalid username or password.'
                flash('ERROR')
    return render_template('login.html', error=error, form=form)


@users_blueprint.route('/register/', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(
            name=form.username.data,
            email=form.email.data,
            password=form.password.data
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return redirect(url_for('home.home'))
    return render_template('register.html', form=form)


@users_blueprint.route('/logout')
@login_required
def logout():
    error = None
    session.pop('logged_in', None)
    print ('logged out')
    flash('you were just logged out')
    return redirect(url_for('home.welcome'))
