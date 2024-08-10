import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
API_KEY = "AIzaSyCMRFbzAXHBeHybYaAEHJmswO5hdUDmSv4"
@app.route("/booksearch")
def search():
    query = request.args.get('query')
    books = requests.get(query, params={'key': API_KEY})
    return jsonify(books.json())
    