//import style from 'style.scss';
const mainDiv = document.getElementById('content');

function load(){
  const headerPage = document.createElement('header');
  headerPage.setAttribute('id', 'headerPage');
  mainDiv.appendChild(headerPage);

  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'navBar');
  headerPage.appendChild(navBar);

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

load()






































