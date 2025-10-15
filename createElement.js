
const boxDiv = document.createElement('div');

boxDiv.setAttribute('class', 'blue-box');
boxDiv.setAttribute('style', 'width: 500px; height: 500px; background: blue;');
document.body.appendChild(boxDiv);

const div = document.createElement('div');

div.textContent = "this is a createElement div centered with style";

div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
document.body.appendChild(div);

