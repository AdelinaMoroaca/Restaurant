
//import variables from 'variables.scss';

const bigDiv = document.getElementsByTagName('body');
const par = document.createElement('p');
const simpleDiv = document.createElement('div');

par.innerHTML = 'trecc';
console.log(par);
document.body.appendChild(par);

//clasa noua la un div
document.getElementById('content').className = 'newclass';
simpleDiv.className = 'oldclass';
document.body.appendChild(simpleDiv);



// console.log('khgg')
// const bigDiv = document.getElementById('content');
// bigDiv.className = 'newclass';

// .oldclass {
//   color: blue;
// }

// .newclass {
//   background-color: yellow;
//   width: 30px;
//   height: 20px;
// }
