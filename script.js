//nav toggler

let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container')

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('active');
    linksContainer.classList.toggle('active');
})
//faq

let faqs = [...document.querySelectorAll('.faq')];


faqs.map(faq => {
    let ques = faq.querySelector('.question-box');

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})


//dish slider

let dishSlider = document.querySelector('.dish-slide');

let rotationaval = 0;

setInterval(() => {


    rotationaval += 120

    dishSlider.Style.transform = 'translateY(-50%) rotate(1020deg)';


}, 3000)


AOS.init();