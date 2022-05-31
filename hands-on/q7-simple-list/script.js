const BASE_API_URL = 'https://anapioficeandfire.com/api/books/';

document.querySelector('#btnLoad')
.addEventListener('click', async () => {
    let response = await axios.get(BASE_API_URL);
    let books = response.data;

    let divResult = document.querySelector('#result');
    for (let book of books) {
        // Create ul element
        let ulElement = document.createElement('ul');
        ulElement.innerHTML = `<li>
            Title: ${book.name}, 
            Number of pages: ${book.numberOfPages}
            </li>`;

        // Get names of all pov characters
        let innerUlElement = document.createElement('ul');
        if (book.povCharacters.length == 0) {
            innerUlElement.innerHTML = 'POV Character(s): NIL';
        }
        else {
            innerUlElement.innerHTML = 'POV Character(s):';
        }

        for (let url of book.povCharacters) {
            let response = await axios.get(url);
            let name = response.data.name;
            // Create li element
            let liElement = document.createElement('li');
            liElement.innerHTML = name;

            // Append li element to inner ul element
            innerUlElement.appendChild(liElement);
        }

        // Append inner ul element to ul element
        ulElement.appendChild(innerUlElement);

        // Append ul element to div #result
        divResult.appendChild(ulElement);
    }

});