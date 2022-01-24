const slide = document.getElementById('slide');
const left = document.getElementById('left');
const right = document.getElementById('right');

let arrayImage= [
    'assets/img/betty-white.jfif',
    'assets/img/lord.jpg',
    'assets/img/harry.jpg'
];

slide.style.backgroundImage = arrayImage[0];
let position = 0;

function moveRight() {
    setInterval(function () {
        if (position >= arrayImage.length -1) {
            position = 0;
            slide.style.backgroundImage = slide[position];
            return;
        }
        slide.style.backgroundImage = arrayImage[position + 1];
        position++;
        if (position === arrayImage.length -1) {
            position = 0;
        }
    }, 2000);
}

function moveLeft() {
    setInterval(function () {
        if (position < 1) {
            position = arrayImage.length - 1;
            slide.style.backgroundImage = arrayImage[position];
            return;
        }
        slide.style.backgroundImage = arrayImage[position - 1];
        position--;
    }, 2000);
}

right.addEventListener("click", function () {
    moveRight();
})

left.addEventListener("click", function () {
    console.log('ok');
    moveLeft();
})
