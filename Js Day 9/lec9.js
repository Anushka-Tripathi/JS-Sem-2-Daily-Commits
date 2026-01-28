// DOM Manipulation

const headingElement = document.getElementById('myHeading');
console.log(headingElement);
headingElement.style.color = 'blue';
headingElement.style.backgroundColor = 'lightgray';
headingElement.textContent = 'DOM -> Document Object Model';
headingElement.style.padding = '10px';
headingElement.style.textAlign = 'center';

const paragraphElement = document.querySelector('#content p');
paragraphElement.style.fontSize = '18px';
paragraphElement.style.lineHeight = '1.6';
paragraphElement.style.marginTop = '15px';