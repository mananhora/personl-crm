"""DATABASE CONFIG INFO

Host: ec2-184-73-201-79.compute-1.amazonaws.com
Database: d1d5c4sdakh9ip
User: kabpjhzvtsincy
Port: 5432
Password: da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9
URI: postgres://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip
Heroku CLI: heroku pg:psql postgresql-angular-50915 --app mesamis

"""

#HEROKU:
"""Connection information for default credential.
Connection info string:
   "dbname=d1d5c4sdakh9ip host=ec2-184-73-201-79.compute-1.amazonaws.com port=5432 user=kabpjhzvtsincy password=da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9 sslmode=require"
Connection URL:
   postgres://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip
"""


import os
basedir = os.path.abspath(os.path.dirname(__file__))

#base config
class BaseConfig(object):
    DEBUG = True
    TESTING = True
    CSRF_ENABLED = True
    SECRET_KEY = 'Wahe Guru'
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']


class ProductionConfig():
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = 'Wahe Guru'
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']


# class StagingConfig(Config):
#     DEVELOPMENT = True
#     DEBUG = True


# class DevelopmentConfig(Config):
#     DEVELOPMENT = True
#     DEBUG = True


# class TestingConfig(Config):
#     TESTING = True







