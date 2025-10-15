
let btn = document.getElementById('btn');

btn.onclick = function () {
    alert('this is a function');
};

let button = document.querySelector('.button');
button.addEventListener('click', () => {
    alert('This is addEventListener arrow function');
});

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        alert('ALERTING ALL BUTTONS FOREACH!!!');
    });
});

