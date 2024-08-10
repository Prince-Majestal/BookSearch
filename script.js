document.getElementById("searchForm").addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submit button pressed");
    const fields = document.querySelectorAll(".Query");
    let query = 'https://www.googleapis.com/books/v1/volumes?';
    let firstField = true;
    fields.forEach((field) => {
        if(firstField)
        {
            query+=field.dataset.param+field.value.trim();
            firstField = false;
        }

        else
        {
            query+='+'+field.dataset.param+field.value.trim();
        }   
    });

    fetch(`http://127.0.0.1:5000/booksearch?query=${query}`).then(response => response.text()).then(data => {console.log(data)}).catch(() => {console.log("An error has occured.")});
})