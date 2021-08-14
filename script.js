var response, content

//get server response
async function getResponse () {
    response = await fetch('https://demo.sibers.com/users')
    content = await response.json()
}

//sort and display names on the site
function nameOutput () {
    content.sort((a, b) => a.name > b.name ? 1 : -1);
    let key;
    for (key in content) {
        document.querySelector('.contactName').innerHTML += `
            <div class="contactName">
                <button class="buttonName" onclick='window.openCard(${key});'>${content[key].name}</button>
            </div> 
        `
        }
}

//open contact card
function openCard (key) {
    document.querySelector('.cardName').innerHTML = content[key].name;
    document.querySelector('.cardPhone').innerHTML = content[key].phone;
    document.querySelector('.cardUsername').innerHTML = content[key].username;
    document.querySelector('.cardCity').innerHTML = content[key].address.city;
    document.querySelector('.cardCountry').innerHTML = content[key].address.country;
    document.querySelector('.cardWebsite').innerHTML = content[key].website;
    document.querySelector('.cardCompanyName').innerHTML = content[key].company.name;
}

getResponse().then(r => nameOutput())


