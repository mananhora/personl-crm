from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import ForeignKey
from project import db

from flask_security import UserMixin, RoleMixin
from sqlalchemy import create_engine
from sqlalchemy.orm import relationship, backref
from sqlalchemy import Boolean, DateTime, Column, Integer, \
                       String


#User class corresponding to user table
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False) # NEED TO ADD ENCRYPTION
    profile_url = db.Column(db.String(512), nullable=True)

    #constructor
    def __init__(self, name, email, password, profile_url):
        self.name = name
        self.email = email
        self.password = password
        self.profile_url = profile_url

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return str(self.id)

    def __repr__(self):
        return '<name - {}>'.format(self.name)


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
    email = db.Column(db.String())
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    location = db.Column(db.String())

    # constructor
    def __init__(self, name, email, user_id, location):
      self.name = name
      self.email = email
      self.user_id = user_id
      self.location = location

    def is_anonymous(self):
      return False

    def get_id(self):
      return str(self.id)

    def __repr__(self):
      return '<name - {}>'.format(self.name)


class Tag(db.Model):
    __tablename__ = 'tags'
    id = db.Column(db.Integer, primary_key=True)
    friend_id = db.Column(db.Integer, ForeignKey('friends.id'))
    name = db.Column(db.String())

    # constructor
    def __init__(self, name):
      self.name = name

    def is_anonymous(self):
      return False

    def get_id(self):
      return str(self.id)

    def __repr__(self):
      return '<name - {}>'.format(self.name)
