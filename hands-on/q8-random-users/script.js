const URL = "https://randomuser.me/api/?results=10";

document.querySelector('#btnLoad')
.addEventListener('click', async function() {
    let response = await axios.get(URL);
    let users = response.data.results;

    for (let user of users) {
        // Create ul element
        let ulElement = document.createElement('ul');
    }
});