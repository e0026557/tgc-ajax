// METHOD 1:
// document.querySelector('#load-image-btn').addEventListener('click', function () {
//     axios.get('artwork.json').then(function (response) {
//         let artwork = response.data;

//         // Create <h1> element
//         let h1 = document.createElement('h1');
//         h1.innerHTML = artwork.title;

//         // Create <img> element
//         let img = document.createElement('img');
//         img.src = artwork.image_url;
//         img.className = artwork.class;

//         // Select div
//         let div = document.querySelector('#artwork');
//         div.appendChild(h1);
//         div.appendChild(img);
//     })
// });

// METHOD 2:
document.querySelector('#load-image-btn').addEventListener('click', async function () {
    let artwork = await axios.get('artwork.json');
    artwork = artwork.data;

    // Create <h1> element
    let h1 = document.createElement('h1');
    h1.innerHTML = artwork.title;

    // Create <img> element
    let img = document.createElement('img');
    img.src = artwork.image_url;
    img.className = artwork.class;

    // Select div
    let div = document.querySelector('#artwork');
    div.appendChild(h1);
    div.appendChild(img);
})