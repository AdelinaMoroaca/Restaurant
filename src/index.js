//import style from 'style.scss';
const mainDiv = document.getElementById('content');
// mainDiv.style.display('flex');

function loadHeader(){
  const headerPage = document.createElement('header');
  headerPage.setAttribute('id', 'headerPage');
  mainDiv.appendChild(headerPage);

  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'navBar');
  headerPage.appendChild(navBar);

  const homeLogo = document.createElement('a');
  homeLogo.setAttribute('id', 'homeLogo');
  homeLogo.setAttribute('href', 'https://www.google.com/') // fct 
  navBar.appendChild(homeLogo);

  const logo = document.createElement('img');
  logo.setAttribute('id', 'logo');
  homeLogo.appendChild(logo);

  const list = document.createElement('li');
  list.setAttribute('id', 'list');
  navBar.appendChild(list);

  const homeBtn = document.createElement('a');
  homeBtn.setAttribute('id', 'homeBtn');
  homeBtn.setAttribute('href', 'https://www.google.com/') // fct 
  homeBtn.innerHTML = 'home';
  list.appendChild(homeBtn);

  const aboutBtn = document.createElement('a');
  aboutBtn.setAttribute('id', 'aboutBtn');
  aboutBtn.setAttribute('href', 'https://www.google.com/') // fct 
  aboutBtn.innerHTML = 'about';
  list.appendChild(aboutBtn);

  const menuBtn = document.createElement('a');
  menuBtn.setAttribute('id', 'menuBtn');
  menuBtn.setAttribute('href', 'https://www.google.com/') // fct 
  menuBtn.innerHTML = 'menu';
  list.appendChild(menuBtn);
}

loadHeader()


function loadContent(){
  const mainSection = document.createElement('section');
  mainSection.setAttribute('id', 'mainSection');
  mainSection.innerHTML = '';
  mainDiv.appendChild(mainSection);


  const cardsSection = document.createElement('section');
  cardsSection.setAttribute('id', 'cardsSection');
  cardsSection.innerHTML = '';
  mainSection.appendChild(cardsSection);

//un card pentru fiecare pisica unde ai un nume, descriere, 
//poza si fun fact Acel fun fact are un buton 
//butonul apeleaza API-ul la fiecare click

  return cardsSection;
}

// loadContent()
const cardsSection = loadContent();

function createCatCard(data){
  const cardCat = document.createElement('div');
  cardCat.setAttribute('id', 'cardCat');
  cardsSection.appendChild(cardCat);

  const cardCatTitle = document.createElement('div');
  cardCatTitle.setAttribute('id', 'cardCatTitle');
  cardCat.appendChild(cardCatTitle);

  const cardBreedTitle = document.createElement('h1');
  cardBreedTitle.setAttribute('id', 'breedTitle');
  cardBreedTitle.textContent = `The ${data.breed}`;
  cardCatTitle.appendChild(cardBreedTitle);

  const cardHelloTitle = document.createElement('h1');
  cardHelloTitle.setAttribute('id', 'cardHelloTitle');
  cardHelloTitle.textContent = `it's here`;
  cardCatTitle.appendChild(cardHelloTitle);

  const imgCat = document.createElement('img');
  imgCat.setAttribute('id', 'imgCat');
  // imgCat.src = `https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=960&h=540&crop=1`;
  cardCat.appendChild(imgCat);

  const cardDescription = document.createElement('p');
  cardDescription.setAttribute('id', 'cardDescription');
  cardDescription.textContent = 
  `Let's spend some Happy-MEOW - time together; 
  I came with my ${data.coat} coat
  from ${data.country} for you`;
  cardCat.appendChild(cardDescription);

  const cardFunFact = document.createElement('p');
  cardFunFact.setAttribute('id', 'cardFunFact');
  cardFunFact.textContent = `My origin?... it's: ${data.origin} ~ 
  BUUUT did you know that I'm ${data.pattern} sometimes?`;
  cardCat.appendChild(cardFunFact);

  const getFunFactBtn = document.createElement('button');
  getFunFactBtn.setAttribute('id', 'getFunFactBtn');
  getFunFactBtn.innerHTML = `Let's see {cat.fun fact}`;
  cardCat.appendChild(getFunFactBtn);

  return cardCat;
}

// const card = createCatCard();
// createCatCard()
// createCatCard()
// const cardCat = createCatCard();


function loadFooter(){
  const footerPage = document.createElement('footer');
  footerPage.setAttribute('id', 'footerPage');
  // mainSection.innerHTML = '';
  mainDiv.appendChild(footerPage);


  const footerContent = document.createElement('p');
  footerContent.setAttribute('id', 'footerBtn');
  footerContent.innerHTML = 'Copyright © 2024 AdelinaMoroaca';
  footerPage.appendChild(footerContent);
}

loadFooter()

//API

const breedsAPI = 'https://catfact.ninja/breeds';

// Make a GET request using the Fetch API
fetch(breedsAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    const cats = data.data;

    cats.forEach((cat) => {
      const cardCat = createCatCard(cat);
      cardsSection.appendChild(cardCat);

    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//------------------------------------------------------------------------------------
// setTimeout(function(){
//   console.log('de creat popup cu cookies din notive de GDPR');
//   alert('hey, au trecut 15 secunde : vrei sa te inregistrezi?')
//   console.log('de creat un time - ER');

// }, 15000)


































