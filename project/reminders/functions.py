from datetime import datetime, timedelta

from flask import Blueprint, jsonify
from flask.ext.login import current_user, login_required

from project import *
from project.models import *


################
#### config ####
################

reminders_blueprint = Blueprint(
    'reminders', __name__,
    template_folder='../../templates'
)

@login_required
@reminders_blueprint.route('/setreminderfrequency', methods = ['GET','POST'])
def set_frequency():
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      json_data = request.get_json()
      n = json_data['frequency']
      friend_id = json_data['friend_id']
      friend = Friend.query.get(friend_id)
      friend.num_weeks_reminder = n
      db.session.commit()
      return jsonify({'result': True})
    return jsonify({'error': True})
  return jsonify({'error': True})


@login_required
@reminders_blueprint.route('/setlastcontacted', methods = ['GET','POST'])
def set_last_contacted():
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      json_data = request.get_json()
      date = json_data['date']
      friend_id = json_data['friend_id']
      friend = Friend.query.get(friend_id)
      friend.last_contacted = date
      db.session.commit()
      return jsonify({'result': True})
    return jsonify({'error': True})
  return jsonify({'error': True})


@login_required
@reminders_blueprint.route('/getreminders', methods = ['GET', 'POST'])
def get_reminders():
  if current_user is not None:
    a = current_user.is_anonymous()
    reminders_list = []
    if current_user.id is not None and a == False:
      for friend in current_user.friends:
        now = datetime.datetime.utcnow()
        if(friend.last_contacted is not None and friend.num_weeks_reminder is not None):
          reminder_date = get_next_contact_date(friend.last_contacted, friend.num_weeks_reminder)
          num_days_left = abs((reminder_date - now).days)
          if(num_days_left<8):
            reminders_list.append([friend.serialize, num_days_left])
      return (jsonify(reminders_list))
  return (jsonify({"result":"Error"}))


def get_next_contact_date(last_contacted_date, n):
  num_days_to_add = n*7
  end_date = last_contacted_date + timedelta(days=num_days_to_add)
  return end_date


@login_required
@reminders_blueprint.route('/upcomingreminderforfriend', methods=['GET', 'POST'])
def get_upcoming_reminders_for_friend():
  json_data = request.get_json()
  if current_user is not None:
    a = current_user.is_anonymous()
    if current_user.id is not None and a == False:
      friend_id = json_data['friend_id']
      friend = Friend.query.get(friend_id)
      last_contacted_date = friend.last_contacted
      num_weeks_reminder = friend.num_weeks_reminder
      if last_contacted_date is None:
        return (jsonify({'reminder':False}))
      if num_weeks_reminder is None:
        return (jsonify({'reminder': False}))
      now = datetime.datetime.utcnow()
      reminder_date = get_next_contact_date(last_contacted_date, num_weeks_reminder)
      num_days_left = (reminder_date-now).days
      if(num_days_left<8):
        return (jsonify({'reminder':True, 'num_days_left':num_days_left}))
      else:
        return (jsonify({'reminder':False}))
    return jsonify({"result":"error"})



"""ADD GMAIL API stuff here"""
