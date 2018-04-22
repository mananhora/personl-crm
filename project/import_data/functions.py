import codecs
import sys
import click
from flask import Blueprint, jsonify, json
from flask.ext.login import login_required
from pyicloud import PyiCloudService
import csv
import itertools
import re


# from project import app
# bcrypt = Bcrypt(app)


import_data_blueprint = Blueprint(
    'import_data', __name__,
    template_folder='../../templates'
)


@login_required
@import_data_blueprint.route('/importiosdata', methods = ['GET', 'POST'])
def get_ios_contacts():
  print("Import Contacts From iOS")
  api = PyiCloudService('tellmanan@yahoo.com')

  if api.requires_2fa:
      print ("Two-factor authentication required. Your trusted devices are:")

      devices = api.trusted_devices
      for i, device in enumerate(devices):
          print ("  %s: %s" % (i, device.get('deviceName',
              "SMS to %s" % device.get('phoneNumber'))))

      device = click.prompt('Which device would you like to use?', default=0)
      device = devices[device]
      if not api.send_verification_code(device):
          print ("Failed to send verification code")
          sys.exit(1)

      code = click.prompt('Please enter validation code')
      if not api.validate_verification_code(device, code):
          print ("Failed to verify verification code")
          sys.exit(1)

  for c in api.contacts.all():
    first_name = c.get('firstName')
    last_name = c.get('lastName')
    full_name = str(first_name)  +' '+str(last_name)
    phone_number = ''
    if(c.get('phones') is not  None):
      if(c.get('phones')[0] is not None):
        if('field' in c.get('phones')[0].keys()):
          phone_number = c.get('phones')[0]['field']
    print(full_name, phone_number)


  return jsonify('Success')



@login_required
@import_data_blueprint.route('/importfromcsv', methods=['GET', 'POST'])
def create_contacts_from_csv():
  file_name = '/Users/mananhora/Desktop/contacts.csv'
  """
  read file, parse input
  """
  list, fields = read_data_from_csv(file_name)
  contact_objects = create_json_contact_objects(list, fields)

  return None


def create_json_contact_objects(list, fields):
  contacts = list[1:]
  contact_objects = []
  print(len(fields))
  for contact in contacts:
    contact_info = re.split(r',', contact)
    print(len(contact_info))
    contact_object = ''
    for i in range(0, min(len(fields), len(contact_info))):
      if(contact_info[i] is not None and contact_info[i]!='' and contact_info[i]!=" " and contact_info[i]):
        print(contact_info[i]=='')
        print(contact_info[i]==None)
        print(contact_info[i]=="")


        print(contact_info[i])
        print("HELLLOOOOO")
        contact_object = contact_object + '{'+fields[i]+':'+contact_info[i]+'}'
      else:
        break

    contact_objects.append(contact_object)
    # print(contact_object)
  #print (contact_objects)
  contact_objects = jsonify(contact_objects)
  #print(contact_objects)
  return contact_objects


def read_data_from_csv(file_name):
  import csv
  f = open(file_name, "r")
  line = f.read()
  line = line.replace(u'\xa0', u' ')
  f = open(file_name, "w")
  f.write(line)
  with open(file_name) as csvfile:
    reader = csv.reader(codecs.open(file_name, 'rU', 'utf-16'))
    for row in reader:
      print (row)

  return [],[]

  # for row in reader:
  # f = open(file_name, "rb")
  # line = f.read()
  # list = re.split(r'\n+', line)
  # fields = re.split(r',', list[0])
  # return list, fields




"""{u'firstName': u'Abhinav', u'middleName': u'', u'lastName': u'Verma', u'normalized': u'abhinav:::verma::::', u'phones': [{u'field': u'+919768116611', u'label': u'HOME'}]}
   

"""
