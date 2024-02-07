//generates random hexadecimal color on each button click
let chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F' ];

const btn = document.querySelector('button');
const color = document.getElementById('color-code');
btn.addEventListener('click', function () {
    const content = document.querySelector('.content');
    let randomColor =generateColor();
    content.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

function generateColor(){
    let randomColor ='#';
    for (let i = 0; i < 6; i++) {
        randomColor += chars[getRandomIndex()];
        console.log(randomColor);
    }
    return randomColor;
}

function getRandomIndex() {
    return Math.floor(Math.random() * chars.length);
}