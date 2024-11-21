const sliderRoll = document.querySelector('#slider__roll');

const next = document.querySelector('#slider__next');
const dots = document.querySelector('#slider__dots');

Array.from(sliderRoll.children).forEach((index) => {
    dots.innerHTML += `<div class="dot ${index == 0 ? 'fill' : ''}"></div>`
})

let currentIndex = 0;
const sliderWindowWidth = sliderRoll.offsetWidth;

function sliderDots() {
    Array.from(dots.children).forEach((dot, index) => {
        if (currentIndex === index) {
            dot.classList.add('current-dot')
        } else {
            dot.classList.remove('current-dot')
        }
    })
}

next.addEventListener('click', () => {
    let newIndex = currentIndex

    if (newIndex < sliderRoll.children.length - 1) {
        newIndex = currentIndex + 1
    }

    else if (currentIndex = 2) {
        location.assign('login.html');
    }

    const offset = newIndex * sliderWindowWidth
    sliderRoll.animate([{ transform: `translateX(-${offset}px)` }], { duration: 500, fill: 'both' })
    currentIndex = newIndex

    sliderDots();
});

sliderDots();