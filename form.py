from flask_wtf import Form
from wtforms import TextField, PasswordField
from wtforms.validators import DataRequired

class LoginForm(Form):
    username = TextField('Username', validators=[DataRequired()]) #datarequired validator ensures that the form is not empty
    password = PasswordField('Password', validators=[DataRequired()])