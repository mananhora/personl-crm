# import codecs
# import sys
# import click
# from flask import Blueprint, jsonify, json
# from flask.ext.login import login_required
# import csv
# import itertools
# import re
# from project import *
#
#
#
#
# import_data_blueprint = Blueprint(
#     'import_data', __name__,
#     template_folder='../../templates'
# )
#
#
# @login_required
# @import_data_blueprint.route('/importiosdata', methods = ['GET', 'POST'])
# def get_ios_contacts():
#   print("Import Contacts From iOS")
#   api = PyiCloudService('tellmanan@yahoo.com')
#
#
#   if api.requires_2fa:
#       print ("Two-factor authentication required. Your trusted devices are:")
#
#       devices = api.trusted_devices
#       for i, device in enumerate(devices):
#           print ("  %s: %s" % (i, device.get('deviceName',
#               "SMS to %s" % device.get('phoneNumber'))))
#
#       device = click.prompt('Which device would you like to use?', default=0)
#       device = devices[device]
#       if not api.send_verification_code(device):
#           print ("Failed to send verification code")
#           sys.exit(1)
#
#       code = click.prompt('Please enter validation code')
#       if not api.validate_verification_code(device, code):
#           print ("Failed to verify verification code")
#           sys.exit(1)
#
#   for c in api.contacts.all():
#     #print (c.get("streetAddresses"))
#     full_name = get_full_name(c)
#     email = get_email(c)
#     phone_number = get_phone_number(c)
#     birthday = get_birthday(c)
#     city = get_city(c)
#     print(full_name, phone_number, email, birthday, city)
#
#   return jsonify('Success')
#
#
# @login_required
# @import_data_blueprint.route('/importfromcsv', methods=['GET', 'POST'])
# def import_contacts_from_csv():
#   file_name = '/Users/mananhora/Desktop/contacts.csv'
#   """
#   read file, parse input
#   """
#   list, fields = read_data_from_csv(file_name)
#   contact_objects = create_json_contact_objects(list, fields)
#
#   return None
#
#
#
# def get_email(contact):
#   #returns the first email, if it exists
#   if (contact.get('emailAddresses') is not None):
#     if (contact.get('emailAddresses')[0] is not None):
#       if ('field' in contact.get('emailAddresses')[0].keys()):
#         email = contact.get('emailAddresses')[0]['field']
#         return email
#       return None
#     return None
#   return None
#
# def get_city(contact):
#   if (contact.get('streetAddresses')) is not None:
#     if(contact.get('streetAddresses')[0]) is not None:
#       if('field' in contact.get('streetAddresses')[0].keys()):
#         return (contact.get("streetAddresses")[0]['field'])
#
#       return None
#     return None
#   return None
#
#
# def get_phone_number(contact):
#   #returns the first phone number, if it exists
#   if (contact.get('phones') is not None):
#     if (contact.get('phones')[0] is not None):
#       if ('field' in contact.get('phones')[0].keys()):
#         phone_number = contact.get('phones')[0]['field']
#         return phone_number
#   return None
#
#
# def get_full_name(contact):
#   first_name = contact.get('firstName')
#   last_name = contact.get('lastName')
#   full_name = ''
#   try:
#     full_name = str(first_name)  +' '+str(last_name)
#   except UnicodeEncodeError:
#     pass
#   if first_name is not None:
#     for f in first_name:
#       try:
#         full_name+=f
#       except UnicodeEncodeError:
#         pass
#   if last_name is not None:
#     for l in last_name:
#       try:
#         full_name+=l
#       except UnicodeEncodeError:
#         pass
#   return full_name
#
#
# def get_birthday(contact):
#   if(contact.get('birthday')) is not None:
#     return contact.get('birthday')
#   return None
#
#
# def create_json_contact_objects(list, fields):
#   contacts = list[1:]
#   contact_objects = []
#   print(len(fields))
#   for contact in contacts:
#     contact_info = re.split(r',', contact)
#     print(len(contact_info))
#     contact_object = ''
#     for i in range(0, min(len(fields), len(contact_info))):
#       if(contact_info[i] is not None and contact_info[i]!='' and contact_info[i]!=" " and contact_info[i]):
#         print(contact_info[i]=='')
#         print(contact_info[i]==None)
#         print(contact_info[i]=="")
#
#
#         print(contact_info[i])
#         print("HELLLOOOOO")
#         contact_object = contact_object + '{'+fields[i]+':'+contact_info[i]+'}'
#       else:
#         break
#
#     contact_objects.append(contact_object)
#     # print(contact_object)
#   #print (contact_objects)
#   contact_objects = jsonify(contact_objects)
#   #print(contact_objects)
#   return contact_objects
#
#
# def read_data_from_csv(file_name):
#   import csv
#   f = open(file_name, "r")
#   line = f.read()
#   line = line.replace(u'\xa0', u' ')
#   f = open(file_name, "w")
#   f.write(line)
#   with open(file_name) as csvfile:
#     reader = csv.reader(codecs.open(file_name, 'rU', 'utf-16'))
#     for row in reader:
#       print (row)
#
#   return [],[]
#
#   # for row in reader:
#   # f = open(file_name, "rb")
#   # line = f.read()
#   # list = re.split(r'\n+', line)
#   # fields = re.split(r',', list[0])
#   # return list, fields
#
#
#
#
# """{u'firstName': u'Abhinav', u'middleName': u'', u'lastName': u'Verma', u'normalized': u'abhinav:::verma::::', u'phones': [{u'field': u'+919768116611', u'label': u'HOME'}]}
#
#
# """
