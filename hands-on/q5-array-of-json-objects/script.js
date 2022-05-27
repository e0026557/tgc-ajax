document.querySelector('#load-users-btn').addEventListener('click', async function() {
    // Load users
    let response = await axios.get('users.json');
    let users = response.data.users;

    // Create a <ul> element
    let ul = document.createElement('ul');

    // Load in first name, lastname and email of each user
    for (let user of users) {
        // Create <li> element
        let li = document.createElement('li');
        li.innerHTML = `First name: ${user.firstName}, Last name: ${user.lastName}, email: ${user.emailAddress}`;

        // Append to <ul>
        ul.appendChild(li);
    }

    // Select div #all-users
    let div = document.querySelector('#all-users');
    div.appendChild(ul);
});

document.querySelector('#btnSearch').addEventListener('click', async function() {
    // Get users 
    let response = await axios.get('users.json');
    let users = response.data.users;

    // Get user id in search box
    let userId = document.querySelector('#searchBox').value;
    console.log(userId);

    let results = '';
    // Find user in users by user id
    for (let user of users) {
        if (user.userId == userId) {
            results = `First name: ${user.firstName}, Last name: ${user.lastName}`;
            break;
        }
    }

    // Update search results in div #all-users
    document.querySelector('#all-users').innerHTML = results;
});

// NOTE: 3 TYPICAL FORMS FOR JSON FORMAT
// 1. An object {}
// 2. An array of objects [{}, {}]
// 3. An object of arrays of objects (like in this question)

// ctrl + r -> to force reload if browser is caching your javascript (so latest javascript is not used)

// Refactoring using functions to make code more readable
// -> NOTE: function names should be semantic

// NOTE: If an element is already linked to the DOM, any changes to its innerHTML will cause the DOM to refresh
// -> recommend to append element to DOM after processing all the innerHTML required

// Alternative method using both createElement and innerHTML:
// document.querySelector('#load-users-btn').addEventListener('click', async function() {
//     // Load users
//     let response = await axios.get('users.json');
//     let users = response.data.users;

//     // Create a <ul> element
//     let ul = document.createElement('ul');

//     // Load in first name, lastname and email of each user
//     for (let user of users) {
//         // Create <li> element
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <ul>
//             <li>First name: ${user.firstName}</li>
//             <li>Last name: ${user.lastName}</li>
//             <li>email: ${user.emailAddress}</li>
//         </ul>
//         `;

//         // Append to <ul>
//         ul.appendChild(li);
//     }

//     // Select div #all-users
//     let div = document.querySelector('#all-users');
//     div.appendChild(ul);
// });