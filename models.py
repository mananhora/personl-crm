from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import ForeignKey
from app import db


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
        self.password = password

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return unicode(self.id)

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
      return unicode(self.id)

    def __repr__(self):
      return '<name - {}>'.format(self.name)


