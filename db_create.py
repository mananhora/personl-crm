from app import db

from project.models import User
db.create_all()


#insert entries into users table
db.session.add(User("Manan", "manan@gmail.com", "hello_manan"))
db.session.add(User("Tarin", "tarin@gmail.com", "hello_tarin"))

#commit changes
db.session.commit()