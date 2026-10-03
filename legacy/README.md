
# MyVillage

## Run App Locally
1. Set environment variables:
    ```
      export APP_SETTINGS='config.BaseConfig'
      DATABASE_URL='postgresql://mananhora@localhost/mesamis'
    ```
      *or*
    ```
      export APP_SETTINGS='config.BaseConfig'
      export DATABASE_URL='postgresql+psycopg2://<user>:<password>@<host>:5432/<db>  (redacted; credentials removed)'
    ```

2. Run the command:
    `ng build --dev --watch && python run.py`

***

## Initial Set Up
### Heroku DB Connection
```
    cd ~
    sudo -u postgres psql postgres
    create database mesamis
    \c mesamis
    \dt
```

### Flask Set Up
`pip install -r requirements.txt` *or* `sudo pip install [missing module]``

### Angular Installation
  `npm install`

***

## Documentation
@ http://127.0.0.1:8080/index.html
  `compodoc -p project/static/tsconfig.app.json -s`

***

Activate virtual environment: `source venv/bin/activate`
