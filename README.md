# IDP


## Get Started

1. Create and activate a project virtual environment for Python https://flask.palletsprojects.com/en/stable/installation/#virtual-environments
2. Run ```python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'``` to generate a project secret key then add to .env in the /core folder as SECRET_KEY
3. Create local_settings.py file in core and add local development configuration
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
4. Run ```pip install -r requirements.txt```
5. Run ```python manage.py runserver``` to start the app locally
6. Edit the Database config in settings.py starting at line 90 for production database, make sure to use ENV variables as well

