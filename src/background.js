const body = document.querySelector("body");

const IMAGE_NUMBER = 10;

function getRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;
}

function paintImage(number) {
    const image = new Image();
    image.src = `images/${number}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();
