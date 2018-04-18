
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
      export DATABASE_URL='postgresql+psycopg2://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip'
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
