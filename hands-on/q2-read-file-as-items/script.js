document.querySelector('#btnLoad').addEventListener('click', async ()=> {
    // Note: Since script.js and items.txt are in the same directory
    let response = await axios.get('items.txt'); // -> return Promise (process running in background) by default without 'await'
    // console.log(response.data);
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

// NOTE: querySelector takes time to search through DOM for an element, so it is recommended not to put in inside a loop.
// -> Optimise this by declaring a variable and caching this element object into the variable instead of calling querySelector multiple times

// Advanced method: Using map
// document.querySelector('#btnLoad').addEventListener('click', async function() {
//     let response = await axios.get('items.txt');
//     let fruitArr = response.data.split(',');

//     // Create <ul> element
//     let ul = document.createElement('ul');

//     // Map each element in fruitArr into an array of <li> elements
//     let liElements = fruitArr.map(function(fruit) {
//         let liElement = document.createElement('li');
//         liElement.innerHTML = fruit;
//         return liElement;
//     });

//     for (let liElement of liElements) {
//         ul.appendChild(liElement);
//     }

//     // Append <ul> to div #content
//     document.querySelector('#content').appendChild(ul);
// })