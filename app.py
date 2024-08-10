import os

import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
app = Flask(__name__)
CORS(app)
API_KEY = os.getenv('GOOGLE_BOOKS_API_KEY') 
@app.route("/booksearch")
def search():
    query = request.args.get('query')
    books = requests.get(query, params={'key': API_KEY})
    return jsonify(books.json())
    