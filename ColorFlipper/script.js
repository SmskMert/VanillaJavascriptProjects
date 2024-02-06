let colors = ['#7F27FF', '#9F70FD', '#FDBF60', '#FF8911'];
let index = 0

let button = getElementByTagName('button');
button.addEventListener('click', changeBgColor);

function changeBgColor() {
    let style = getElementByTagName('style');
    let backgroundColor = getColor();
    if (style == null) {
        let styleElement = generateStyleElement(backgroundColor);
        let head = getElementByTagName('head');
        appendElement(head, styleElement);
        let content = getElementByTagName('main');
        addClass(content, 'random-color');
    } else {
        style.textContent = `
        .random-color {
            background-color: ${backgroundColor};
        }
        `;
    }
    updateColorInfo(backgroundColor);
};

function updateColorInfo(backgroundColor) {
    document.getElementById('color-code').innerText = backgroundColor;
}

function generateStyleElement(backgroundColor) {
    let style = document.createElement('style');
    style.textContent = `
.random-color {
    background-color: ${backgroundColor};
}
`;
    return style;
}

function appendElement(parent, element) {
    parent.appendChild(element);
}

function addClass(element, className) {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

function getElementByTagName(tagName) {
    return document.getElementsByTagName(tagName)[0];
}



function getColor() {
    if (index === colors.length - 1) {
        index = 0;
        return colors[0];
    } else {
        index++;
        return colors[index];
    }
}