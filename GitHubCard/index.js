import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// Create Card Maker Constructor //
function cardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }) {
  
  // Create Elements //
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const userName = document.createElement('p')
  const cardLocation = document.createElement('p')
  const profile = document.createElement('p')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  // Structure ELements //

  // Card Div //
  card.appendChild(image)
  card.appendChild(cardInfo)

  //Card-Info Div //
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  // Add Classes //
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  userName.classList.add('username')

  // Add Attributes //
  image.setAttribute('src', avatar_url)
  cardName.textContent = name
  userName.textContent = login
  cardLocation.textContent = `Location: ${location}`
  profile.innerHTML = `Profile: <a href="${html_url}">${html_url}</a>`
  cardFollowers.textContent = `Followers: ${followers}`
  cardFollowing.textContent = `Following: ${following}`
  cardBio.textContent = `Bio: ${bio}`

  // Output Card //
  return card
}

// Step Five: Add Users to Followers Array & Add Users to DOM //

// Select Cards Container from Document //
const cardDiv = document.querySelector('.cards')

// Add Users to Users Array //
const usersArray = ['joshwhitwell', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// Iterate Over Array
usersArray.forEach(element => {
  // Request Data by Element
  axios.get(`https://api.github.com/users/${element}`)
  .then(response => {
    // Create Card with Data
    const newCard = cardMaker(response.data)
    // Append Card to DOM
    cardDiv.appendChild(newCard)
  })
  .catch(() => {
    console.log('error')
  })
})
