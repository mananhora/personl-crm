static- css, js files
templates- HTML files

## Running instructions:
on local:
1. Set environment variables:
    a. In the terminal, type `export APP_SETTINGS='config.BaseConfig'` and press enter.
    b. Next, type `DATABASE_URL='postgresql://mananhora@localhost/mesamis'`
       `export DATABASE_URL='postgresql+psycopg2://kabpjhzvtsincy:da9b7e11e66d93cb77f054465b4c399742e87555c4129b038a56eda6626014e9@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d1d5c4sdakh9ip'`

2. Run the command: `ng build && python run.py`
