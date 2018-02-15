import os
from flask import Flask, render_template, session, flash, redirect, url_for
from functools import wraps
from flask_sqlalchemy import SQLAlchemy
from flask.ext.login import LoginManager
debug = False

login_manager = LoginManager()

app = Flask(__name__) #instance of application
login_manager.init_app(app)


# bcrypt = Bcrypt(application)
#"postgresql://mananhora@localhost/mesamis"


app.config.from_object(os.environ['APP_SETTINGS'])
app.secret_key = "wahe guru"


# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://mananhora@localhost/mesamis"
# Notice how you don't have to make any changes to the config file
# - it's setting the database based on the newly created DATABASE_URL environment variable.
# application.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip"
# from project.models import * #import after creating the db


# from project.users.views import users_blueprint
# app.register_blueprint(users_blueprint)
# db = SQLAlchemy(app) #create instance of sql alchemy with application as parameter



# login required decorator
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap


@app.route('/')
@login_required
def home():
    # g.db = connect_db() #connect to database
    # #perform queries here..
    # g.db.close() #close connection with database..
    return render_template('index.html')  # render a template


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


@app.route('/welcome')
def welcome():
    return render_template('welcome.html')  # render a template



# login_manager.login_view = "users.login"
# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.filter(User.id == int(user_id)).first()
#

# if __name__ == '__main__':
#     port = int(os.environ.get("PORT", 5433))
#     host = '0.0.0.0'
#     if(os.environ['APP_SETTINGS']=='config.BaseConfig'):
#         app.run(debug=debug, host=host)
#     else:
#         app.run(debug=debug, host =host, port=port)