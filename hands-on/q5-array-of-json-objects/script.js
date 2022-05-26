document.querySelector('#load-users-btn').addEventListener('click', async function() {
    // Load users
    let users = await axios.get('users.json');
    users = users.data.users;

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
    let users = await axios.get('users.json');
    users = users.data.users;

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