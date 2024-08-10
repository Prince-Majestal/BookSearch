import requests
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/booksearch")
def search():
    query = request.args.get('query')
    return f"Searching for: {query}"