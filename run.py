import os
debug = False

from project import app

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5433))
    host = '0.0.0.0'
    if(os.environ['APP_SETTINGS']=='config.BaseConfig'):
        app.run(debug=debug, host=host)
    else:
        app.run(debug=debug, host =host, port=port)
