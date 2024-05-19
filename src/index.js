// alert("BOOM!")
// console.log('khgg')

// const button = document.querySelector('button');


// function displayButtons(button) {
//     const newBTN = document.querySelector("#content");
//     document.getElementById("output").innerHTML += button.value;
// }

const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);

function onButtonClick() {
    alert('Button clicked!');
  }
newButton.addEventListener('click', onButtonClick);
