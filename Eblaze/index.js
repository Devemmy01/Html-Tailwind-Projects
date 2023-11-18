window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY > 0);
})

// CONTACT BUTTON

const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style = "transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})


// SWIPER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween:40
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});



const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');


const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}   


openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}   


closeNavBtn.addEventListener('click', closeNav);




if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
    
}




function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560)
    scrollTop.classList.add("scroll-top");
    else scrollTop.classList.remove("scroll-top")
}

window.addEventListener("scroll", scrollTop)



const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '3000',
    reset: true
});

sr.reveal(' .header__container, .header__frames, .gallery__container, .about__container, .exhibitions__container article, .footer__container'),{
    interval: 200
}


