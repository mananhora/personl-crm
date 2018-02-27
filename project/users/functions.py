from flask import flash, redirect, render_template, request, \
    session, url_for, Blueprint
from flask.ext.bcrypt import Bcrypt
# from project import app
# bcrypt = Bcrypt(app)
from functools import wraps
from flask.ext.login import login_user, login_required, logout_user
from project.models import User
from project.form import *
from project import *
from flask.ext.social import Social

user = None

################
#### config ####
################

users_blueprint = Blueprint(
    'users', __name__,
    template_folder='../../templates'
)

debug = False


# default = Blueprint('cast', __name__, static_folder=Config.STATIC_FOLDER, static_url_path='')





@users_blueprint.route('/register/', methods=['GET', 'POST'])
def register():
    print (app.static_folder)
    print ("in register")
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
        print (app.static_folder)
        return redirect(url_for('home.home'))
    return app.send_static_file('dist/index.html')



@users_blueprint.route('/logout', methods=['GET', 'POST'])
def logout():
    error = None
    session.pop('logged_in', None)
    print ('logged out')
    logout_user()
    flash('you were just logged out')
    return redirect(url_for('home.home'))



@users_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    if(debug):
        flash('in login')
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
                    login_user(user)
                    next = request.args.get('next')
                    return redirect(url_for('home.home'))
                else:
                    flash('ERROR')
                    error = 'Invalid username or password.'
            else:
                error = 'Invalid username or password.'
                flash('ERROR')
    return render_template('login.html', error=error, form=form)


social = Social(app, db)

@app.route('/profile')
@login_required
def profile():
    return render_template(
        'profile.html',
        content='Profile Page',
        facebook_conn=social.facebook.get_connection())
