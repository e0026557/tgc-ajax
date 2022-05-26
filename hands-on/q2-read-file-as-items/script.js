document.querySelector('#btnLoad').addEventListener('click', async ()=> {
    let response = await axios.get('items.txt');
    console.log(response.data);
    let fruitArr = response.data.split(',');

    // Create <ul> element
    let ul = document.createElement('ul');

    for (let fruit of fruitArr) {
        // Create <li> element
        let li = document.createElement('li');
        li.innerHTML = fruit;

        // Append <li> to <ul>
        ul.appendChild(li);
    }

    // Append <ul> to div #content
    document.querySelector('#content').appendChild(ul);
});