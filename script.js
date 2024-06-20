//Ett script som gör att headern blir sticky och följer med när man scrollar ner

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Sctipt som gör att drop down-menyn fungerar

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

//vid klick öppnas menyn
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

//menyn försvinner vid scrollande
menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

//importerat script för att fejda in text till portträtt samt porträtt
const sr = ScrollReveal ({
    distance: "45px",
    duration: 2700,
    reset: true
});

sr.reveal(".home-text", {delay:350, origin:"left"});
sr.reveal(".home-img", {delay:350, origin:"right"});


//resten av sidan fejdar in underifrån, aningen snabbare fejd
sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {delay:150, origin:"bottom"});