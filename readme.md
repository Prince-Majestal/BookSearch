# BookSearch

<img width="1624" alt="image" src="https://github.com/user-attachments/assets/1f593437-71a1-41a1-8b2c-d1e5f7d06ef2">



## Setup Guide
This is a simple app that allows you to serach books by keywords/titles, authors or both by interfacing with the google books api.

On Linux:

1) Clone this directory using `git clone https://github.com/Prince-Majestal/BookSearch.git`

2) You will need to create a virtual python environment.
	
 	i) cd into the cloned directory.

	ii) Create the environment with `python -m venv venv`

	iii) Activate the environment with `source/venv/bin/activate`

4) Install the required dependencies from the requirements list using `pip install -r requirements.txt`.

5) You will now need to get an activation key for google books api.

	i) Go to https://console.cloud.google.com/ and sign in with your Google account.

	ii) Select "create new project" at the top.

 	iii) Give the project any name you want and click "create".

	iv) Once you are on the dashboard, select "library" from the left hand menu.

 	v) Search for "books" and click activate.

 	vi) This will take you to the api page. Once there click on the "Credentials" tab.

 	vii) Select "API key". This will generate the api key. Make sure to copy it!

7) In the project directory create a .env file and write `GOOGLE_BOOKS_API_KEY=PASTE_YOUR API_KEY_HERE`

8) Finally, to use the app, run `gunicorn -p 4 -b 127.0.0.1:8000 app:app` and go to http://127.0.0.1:8000 . You are now ready to use the app! 


On Windows:

COMING SOON!
