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
    response = requests.get(query, params={'key': API_KEY})
    books = response.json()
    results = []
    for book in books.get('items', []):
        info = book.get('volumeInfo', {})
        title = info.get('title', "Title not available")
        authors = info.get('authors', [])
        description = info.get('description', "No description available")
        image_link = info.get('imageLinks', {}).get('thumbnail', '')

        book_dictionary = {
            "title": title,
            "authors": authors,
            "description": description,
            "image_link": image_link
        }

        results.append(book_dictionary)

    return jsonify({"books": results})
    
if __name__ == '__main__':
    app.run()

