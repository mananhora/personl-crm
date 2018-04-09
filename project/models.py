from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import ForeignKey
from project import db

# from flask_security import UserMixin, RoleMixin
from sqlalchemy import create_engine
from sqlalchemy.orm import relationship, backref
from sqlalchemy import Boolean, DateTime, Column, Integer, \
                       String
import datetime
from sqlalchemy import Column, Integer, DateTime

#User class corresponding to user table
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), nullable=True)
    password = db.Column(db.String(), nullable=True) # NEED TO ADD ENCRYPTION
    circles = db.relationship('Circle', backref='user', lazy='dynamic')
    friends = db.relationship('Friend', backref='user', lazy='dynamic')
    profile_url = db.Column(db.String(), nullable=True)
    access_token = db.Column(db.String, nullable=True)


    #constructor
    def __init__(self, name, email=None, password=None, profile_url=None, access_token=None):
        self.name = name
        self.email = email
        self.password = password
        self.profile_url = profile_url
        self.access_token = access_token

    @property
    def serialize(self):
      """Return object data in easily serializeable format"""
      return {
        'id': self.id,
        'name': self.name,
        'email': self.email
      }




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

friends_circles = db.Table('friends_circles',
                            db.Column('circle_id', db.Integer,db.ForeignKey('circles.id'), nullable=False),
                            db.Column('friend_id',db.Integer,db.ForeignKey('friends.id'),nullable=False),
                            db.PrimaryKeyConstraint('circle_id', 'friend_id') )


class Circle(db.Model):
    #describe circle table here
    #each circle has id, parent_id, circle name
    #each circle has at most one parent, but can have multiple children
    __tablename__ = 'circles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    parent_id = db.Column(db.Integer, ForeignKey('circles.id'), nullable=True)
    circle_name = db.Column(db.String(), nullable=False)
    friends = db.relationship("Friend", secondary=friends_circles, backref='friends')

    # constructor
    def __init__(self, circle_name, user_id, parent_id):
      self.circle_name = circle_name
      self.user_id = user_id
      self.parent_id = parent_id

    @property
    def serialize(self):
      """Return object data in easily serializeable format"""
      return {
        'id': self.id,
        'circle_name': self.circle_name,
        'user_id': self.user_id,
        'parent_id': self.parent_id,
      }

    def is_anonymous(self):
      return False

    def get_id(self):
      return str(self.id)

    def __repr__(self):
      return '<name - {}>'.format(self.circle_name)

#JUNCTION TABLE FOR friends and circles
#one friend can be in many circles
#one circle can have many friends


class Friend(db.Model):
    #describe friend table here
    __tablename__ = 'friends'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String())
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    location = db.Column(db.String())
    circles = db.relationship("Circle",
                    secondary=friends_circles, backref='circles')

    """ [dates: (key, value), profile_pic, location, phone, email, birthday, job,
     notes, fb_profile, twitter_profile, linkedin_profile, insta_profile ]"""


    # constructor
    def __init__(self, name, email, user_id, location):
      self.name = name
      self.email = email
      self.user_id = user_id
      self.location = location

    @property
    def serialize(self):
      """Return object data in easily serializeable format"""
      return {
        'id': self.id,
        'name': self.name,
        'user_id': self.user_id,
        'location': self.location,
        'email': self.email
      }

    def is_anonymous(self):
      return False

    def get_id(self):
      return str(self.id)

    def __repr__(self):
      return '<name - {}>'.format(self.name)

#
class Dates(db.Model):
  __tablename__ = 'dates'
  id = db.Column(db.Integer, primary_key=True)
  friend_id = db.Column(db.Integer, ForeignKey('friends.id'), nullable=False)
  key = db.Column(db.String())
  value = db.Column(DateTime, default=datetime.datetime.utcnow)






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
