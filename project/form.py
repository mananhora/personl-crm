from flask_wtf import Form
from wtforms import TextField, PasswordField, IntegerField
from wtforms.validators import DataRequired, Length, Email, EqualTo


class LoginForm(Form):
    username = TextField('Username', validators=[DataRequired()]) #datarequired validator ensures that the form is not empty
    password = PasswordField('Password', validators=[DataRequired(), Length(min=3, max=25)])


class RegistrationForm(Form):
    username = TextField('Username', validators=[DataRequired()]) #datarequired validator ensures that the form is not empty
    email = TextField('email', validators=[DataRequired(), Email(message=None), Length(min=6, max=40)]) #datarequired validator ensures that the form is not empty
    password = PasswordField('Password', validators=[DataRequired(), Length(min=6, max=25)])
    confirm = PasswordField('Repeat password', validators=[DataRequired(), EqualTo('password', message='Passwords must match.')])


class FriendCreationForm(Form):
    name = TextField('name', validators=[DataRequired()])
    email = TextField('email', validators=[Email(message=None), Length(min=6, max=40)])  # datarequired validator ensures that the form is not empty
    location = TextField('location')


class CircleCreationForm(Form):
  circle_name = TextField('circle_name', validators=[DataRequired()])


class FriendCircleForm(Form):
  friend_id = IntegerField('friend_id', validators=[DataRequired()])
  circle_id = IntegerField('circle_id', validators=[DataRequired()])

class FriendsInCircleForm(Form):
  circle_id = IntegerField('circle_id', validators=[DataRequired()])


class CirclesForFriendForm(Form):
  friend_id = IntegerField('friend_id', validators=[DataRequired()])


class SearchByLocationForm(Form):
  location = TextField('location', validators=[DataRequired()])
