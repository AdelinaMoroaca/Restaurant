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

  const logo = document.createElement('img');
  logo.setAttribute('id', 'logo');
  navBar.appendChild(logo);

  const list = document.createElement('li');
  list.setAttribute('id', 'list');
  navBar.appendChild(list);

  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('id', 'homeBtn');
  homeBtn.innerHTML = 'home';
  list.appendChild(homeBtn);

  const aboutBtn = document.createElement('button');
  aboutBtn.setAttribute('id', 'aboutBtn');
  aboutBtn.innerHTML = 'about';
  list.appendChild(aboutBtn);

  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('id', 'menuBtn');
  menuBtn.innerHTML = 'menu';
  list.appendChild(menuBtn);
}

loadHeader()


function loadContent(){
  const mainSection = document.createElement('section');
  mainSection.setAttribute('id', 'mainSection');
  // mainSection.innerHTML = '';
  mainDiv.appendChild(mainSection);


  const cardsSection = document.createElement('section');
  cardsSection.setAttribute('id', 'cardsSection');
  cardsSection.innerHTML = '';
  mainSection.appendChild(cardsSection);

//  Hello, o idee era sa ai cate un card pentru fiecare pisica 
//unde ai un nume, descriere, poza si fun fact Acel fun fact 
//are un buton care apeleaza API-ul la fiecare click
  const cardCat = document.createElement('div');
  cardCat.setAttribute('id', 'cardCat');
  // contentCard.innerHTML = 'fghjollksjddh';
  cardsSection.appendChild(cardCat);

  const cardTitle = document.createElement('h1');
  cardTitle.setAttribute('id', 'cardCat');
  cardTitle.innerHTML = 'title';
  cardCat.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.setAttribute('id', 'cardDescription');
  cardDescription.innerHTML = 'nume/ descriere/ poza';
  cardCat.appendChild(cardDescription);

  const cardFunFact = document.createElement('p');
  cardFunFact.setAttribute('id', 'cardFunFact');
  cardFunFact.innerHTML = 'fun fact API';
  cardCat.appendChild(cardFunFact);

  const getFunFactBtn = document.createElement('button');
  getFunFactBtn.setAttribute('id', 'getFunFactBtn');
  getFunFactBtn.innerHTML = `Let's see {cat.type} - fun fact`;
  cardCat.appendChild(getFunFactBtn);
}

loadContent()

function loadFooter(){
  const footerPage = document.createElement('footer');
  footerPage.setAttribute('id', 'footerPage');
  // mainSection.innerHTML = '';
  mainDiv.appendChild(footerPage);


  const footerBtn = document.createElement('button');
  footerBtn.setAttribute('id', 'footerBtn');
  footerBtn.innerHTML = 'bothj';
  footerPage.appendChild(footerBtn);
}

loadFooter()

































