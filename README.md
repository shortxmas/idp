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
3. Install python related dependencies ```pip install -r requirements.txt```
4. Install website frontend dependencies ```npm --prefix website/frontend install```
5. Install root script dependencies ```npm install```
6. Run ```npm run build``` to build all static files
7. Run ```npm run dev``` 
8. Edit the Database config in settings.py starting at line 90 for production database, make sure to use ENV variables as well

