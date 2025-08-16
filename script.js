const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.crouselcard');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const dotsContainer = document.querySelector('.dots');

let index = Math.floor(cards.length / 2);
let middle = Math.floor(cards.length / 2);

let autoSlideInterval;
let userInteracted = false;
const autoSlideDelay = 3000;
const resumeDelay = 5000;

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        moveToSlide(index + 1);
    }, autoSlideDelay);
}

function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
    userInteracted = true;
    setTimeout(() => {
        userInteracted = false;
        startAutoSlide();
    }, resumeDelay);
}



cards.forEach((_, i) => {
    console.log(index)
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === index) dot.classList.add('active');
    dot.addEventListener('click', () => { moveToSlide(i); pauseAutoSlide(); });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function moveToSlide(i) {
    if (i < 0) i = cards.length - 1;
    if (i >= cards.length) i = 0;

    index = i;
    let diff = middle - index;
    // console.log(diff)
    if (diff <= 0) {
        diff = Math.abs(diff)
        track.style.transform = `translateX(-${diff * (cards[0].offsetWidth + 20)}px)`;
    }
    else {
        track.style.transform = `translateX(${diff * (cards[0].offsetWidth + 20)}px)`;
    }
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    cards.forEach(card => card.classList.remove('active-card'));
    cards[index].classList.add('active-card');
}



leftArrow.addEventListener('click', () => {
    moveToSlide(index - 1);
    pauseAutoSlide();
});

rightArrow.addEventListener('click', () => {
    moveToSlide(index + 1);
    pauseAutoSlide();
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        moveToSlide(index + 1);
        pauseAutoSlide();
    }
    if (e.key === 'ArrowLeft') {
        moveToSlide(index - 1);
        pauseAutoSlide();
    }
});

startAutoSlide();

// ---------------------------------------------------------------------------

let isDragging = false;
let startX = 0;
let currentX = 0;

track.addEventListener('mousedown', startDrag);
track.addEventListener('touchstart', startDrag, { passive: true });

track.addEventListener('mousemove', onDrag);
track.addEventListener('touchmove', onDrag, { passive: true });

track.addEventListener('mouseup', endDrag);
track.addEventListener('mouseleave', endDrag);
track.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    track.style.transition = "none"; // disable smooth transition during drag
    pauseAutoSlide();
}

function onDrag(e) {
    if (!isDragging) return;

    currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    let diff = currentX - startX;

    track.style.transform = `translateX(calc(-${(index - middle) * (cards[0].offsetWidth + 20)}px + ${diff}px))`;
}

function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = "transform 0.3s ease"; 

    let diff = (e.type.includes('mouse') ? e.pageX : e.changedTouches[0].pageX) - startX;

    if (diff > 50) {
        moveToSlide(index - 1);
    } else if (diff < -50) {
        moveToSlide(index + 1);
    } else {
        moveToSlide(index);
    }
}


// --------------------------------------------------------------

const bar = document.querySelector('.bar');
const navLinks = document.querySelector('.navlinks');

bar.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});