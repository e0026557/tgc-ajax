// document.querySelector('#load-btn').addEventListener('click', function () {
//     let response = axios.get('contact.txt').then(function (response) {

//         // Select div#content
//         let div = document.querySelector('#content');
//         div.innerHTML = response.data;
//     })

// })


// // USING ASYNC/AWAIT
// document.querySelector('#load-btn').addEventListener('click', load);

// async function load() {
//     let response = await axios.get('contact.txt');

//     // Select div#content
//     let div = document.querySelector('#content');
//     div.innerHTML = response.data;
// }

// USING ASYNC/AWAIT
document.querySelector('#load-btn').addEventListener('click', async function () {
    let response = await axios.get('contact.txt');

    // Select div#content
    let div = document.querySelector('#content');
    div.innerHTML = response.data;
});
