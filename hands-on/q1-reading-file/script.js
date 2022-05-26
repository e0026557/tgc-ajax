// METHOD 1:
// document.querySelector('#load-btn').addEventListener('click', function () {
//     let response = axios.get('contact.txt').then(function (response) {

//         // Select div#content
//         let div = document.querySelector('#content');
//         div.innerHTML = response.data;
//     })

// })


// METHOD 2:
// // USING ASYNC/AWAIT
// document.querySelector('#load-btn').addEventListener('click', load);

// async function load() {
//     let response = await axios.get('contact.txt');

//     // Select div#content
//     let div = document.querySelector('#content');
//     div.innerHTML = response.data;
// }


// METHOD 3:
// USING ASYNC/AWAIT
document.querySelector('#load-btn').addEventListener('click', async function () {
    let response = await axios.get('contact.txt');
    // console.log(response.data); // -> check that we have retrieved the response

    // Select div#content
    let div = document.querySelector('#content');
    div.innerHTML = response.data;
});
