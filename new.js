const inputName = document.querySelector (".inp-name");
const inpWrap = document.querySelector (".inp-wrap");

inputName.addEventListener("input", 
function (e) {
    if (e.target.value !== "") {
        inpWrap.classList.add("active-input");
    }
    else if (e.target.value === "") {
        inpWrap.classList.remove("active-input");
    }
});

const inputName2 = document.querySelector (".inp-name2");
const inpWrap2 = document.querySelector (".inp-wrap2");

inputName2.addEventListener("input", 
function (e) {
    if (e.target.value !== "") {
        inpWrap2.classList.add("active-input");
    }
    else if (e.target.value === "") {
        inpWrap2.classList.remove("active-input");
    }
});

const inputName3 = document.querySelector (".inp-name3");
const inpWrap3 = document.querySelector (".inp-wrap3");

inputName3.addEventListener("input", 
function (e) {
    if (e.target.value !== "") {
        inpWrap3.classList.add("active-input");
    }
    else if (e.target.value === "") {
        inpWrap3.classList.remove("active-input");
    }
});

const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})