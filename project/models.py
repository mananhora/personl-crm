from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import ForeignKey
from project import db


#User class corresponding to user table
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False) # NEED TO ADD ENCRYPTION
    circles = db.relationship('Circle', backref='user', lazy='dynamic')
    friends = db.relationship('Friend', backref='user', lazy='dynamic')


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
        return str(self.id)

    def __repr__(self):
        return '<name - {}>'.format(self.name)


class Circle(db.Model):
    #describe circle table here
    #each circle has id, parent_id, circle name
    #each circle has at most one parent, but can have multiple children
    __tablename__ = 'circles'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'))
    parent_id = db.Column(db.Integer, ForeignKey('circles.id'), nullable=True)
    circle_name = db.Column(db.String(), nullable=False)

    # constructor
    def __init__(self, circle_name, user_id, parent_id):
      self.circle_name = circle_name
      self.user_id = user_id
      self.parent_id = parent_id

    def is_anonymous(self):
      return False

    def get_id(self):
      return str(self.id)

    def __repr__(self):
      return '<name - {}>'.format(self.circle_name)





#JUNCTION TABLE FOR friends and circles
#one friend can be in many circles
#one circle can have many friends
friends_circles = db.Table('friends_circles',
                            db.Column('circle_id', db.Integer,db.ForeignKey('circles.id'), nullable=False),
                            db.Column('friend_id',db.Integer,db.ForeignKey('friends.id'),nullable=False),
                            db.PrimaryKeyConstraint('circle_id', 'friend_id') )



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
