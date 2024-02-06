//cleaner solution compared to script.js

let colors = ['#7F27FF', '#9F70FD', '#FDBF60', '#FF8911'];

const btn = document.querySelector('button');
const color = document.getElementById('color-code');
console.log(color);
btn.addEventListener('click', function () {
    const content = document.querySelector('.content');
    let randomColor =colors[getRandomIndex()];
    content.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function getRandomIndex() {
    return Math.floor(Math.random() * colors.length);
}