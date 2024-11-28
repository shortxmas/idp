# IDP


## Get Started

1. Create and activate a project virtual environment for Python https://flask.palletsprojects.com/en/stable/installation/#virtual-environments
2. Create local_settings.py file in core and add local development configuration
```
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG=True

DATABASES = {
  "default":{
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': BASE_DIR / 'db.sqlite3',
  }
}

```
3. Install all Python and Node related dependencies ```pip install -r requirements.txt```, ```npm --prefix website/frontend install```, ```npm install```
4. Build all JavaScript and static files ```npm run build```
5. Migrate your local database ```python manage.py migrate```
6. Start on port 8000 ```npm run dev``` 
7. Edit the Database config in settings.py starting at line 90 for production database, make sure to use ENV variables as well

