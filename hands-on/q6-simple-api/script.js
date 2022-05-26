let url = "https://programming-quotes-api.herokuapp.com/quotes/random";

document.querySelector('#btnLoad').addEventListener('click', async () => {
    let response = await axios.get(url);

    let quote = response.data;

    // Create <figure> element
    let figure = document.createElement('figure');

    // Create <blockquote> element
    let blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `"${quote.en}"`;

    // Create <figcaption> element
    let figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `- ${quote.author}`;

    figure.appendChild(blockquote);
    figure.appendChild(figcaption);

    // Reset div #content 's innerHTML
    let div = document.querySelector('#content');
    div.innerHTML = '';
    div.appendChild(figure);

});