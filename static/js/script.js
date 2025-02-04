document.getElementById("searchForm").addEventListener('submit', function(event) {
    event.preventDefault();
    const fields = document.querySelectorAll(".Query");
    let query = 'https://www.googleapis.com/books/v1/volumes?';
    let firstField = true;
    fields.forEach((field) => {
        
        if(field.value.trim() == "")
        {
            return;
        }
        
        if(firstField)
        {
            query+='q='+field.dataset.param+field.value.trim();
            firstField = false;
        }

        else
        {
            query+='+'+field.dataset.param+field.value.trim();
        }   
    });

    query += "&maxResults=40";

    let encodedQuery = encodeURIComponent(query);


    fetch(`http://127.0.0.1:8000/booksearch?query=${encodedQuery}`).then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('Results');
        resultDiv.innerHTML = '';
        data.books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            const bookContentsDiv = document.createElement('div');
            bookContentsDiv.className = "book-content";
           

            const bookTextDiv = document.createElement('div');
            bookTextDiv.className = "book-text";
            const title = document.createElement('h3');
            title.textContent = book.title;
            const description = document.createElement('p');
            description.textContent = book.description;
            bookTextDiv.appendChild(title);
            bookTextDiv.appendChild(description);
            const authors = document.createElement('p');
            authors.textContent = `Authors: ${book.authors.join(', ')}`;
            bookTextDiv.appendChild(authors);
            if(book.image_link)
                {
                    const image = document.createElement('img');
                    image.src = book.image_link;
                    image.alt = "Image for ${book.title}";
                    bookContentsDiv.appendChild(image);
                }
            bookContentsDiv.appendChild(bookTextDiv);
            bookDiv.appendChild(bookContentsDiv)
            resultDiv.appendChild(bookDiv);
            
            
        })
    });
})