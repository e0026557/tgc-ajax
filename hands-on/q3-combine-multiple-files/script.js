// RECOMMENDED METHOD: USING AWAIT/ASYNC
document.querySelector('#load-btn').addEventListener('click', async ()=> {
    // Parallel loading of data
    let request1 = axios.get('file1.txt');
    let request2 = axios.get('file2.txt');

    let response1 = await request1;
    let response2 = await request2;

    // Get textarea #content
    document.querySelector('#content').innerHTML = `${response1.data} ${response2.data}`;
});

// Alternative method: Using Promise
// document.querySelector('#load-btn').addEventListener('click', async ()=> {
//     // Parallel loading of data
//     let request1 = axios.get('file1.txt');
//     let request2 = axios.get('file2.txt');

//     // Promise method:
//     // axios.all can take in as many arguments as needed
//     // or it can also accept an array of arguments
//     axios.all(request1, request2).then(function(response1, response2) {
//         // Get textarea #content
//         document.querySelector('#content').innerHTML = `${response1.data} ${response2.data}`;
//     });
// });

// NOTE: All response.data will be a string if the file is not a JSON file (defined as an array of objects, or object)


// ANOTHER METHOD USING AXIOS.ALL
// document.querySelector('#load-btn').addEventListener('click', async ()=> {
//     // Parallel loading of data
//     // axios.all can also be awaited
//     let responses = await axios.all(
//         [axios.get('file1.txt'), axios.get('file2.txt')]
//     )

//     // The above is similar to:
//     // let request1 = axios.get('file1.txt');
//     // let request2 = axios.get('file2.txt');
//     // let responses = await axios.all(request1, request2);

//     // Get textarea #content
//     for (let response of responses) {
//         document.querySelector('#content').innerHTML += response.data;
//     }
// });