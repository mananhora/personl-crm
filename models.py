from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import ForeignKey
from application import db, bcrypt


#User class corresponding to user table
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False) # NEED TO ADD ENCRYPTION

    #constructor
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = bcrypt.generate_password_hash(password)

    #how we want the object to be represented when it's printed
    def __repr__(self):
        return '<email {}>'.format(self.email)


class Circle(db.Model):
    #describe circle table here
    __tablename__ = 'circles'

    id = db.Column(db.Integer, primary_key=True)
    parent_id = db.Column(db.Integer, ForeignKey('circles.id'))
    circle_name = db.Column(db.String(), nullable=False)


class Friend(db.Model):
    #describe friend table here
    __tablename__ = 'friends'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)


