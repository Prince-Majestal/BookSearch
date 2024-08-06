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
})