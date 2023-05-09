let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('.login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }
}

document.querySelector('.home').onmousemove = (e) =>{
  document.querySelectorAll('.home-parallax').forEach(elm =>{
    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed)/90;
    let y = (window.innerHeight - e.pageY * speed)/90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
}

document.querySelector('.home').onmouseleave= () =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{
  
      elm.style.transform = `translateX(0px) translateY(0px)`;
    });
  }

var swiper = new Swiper(".galeria-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var audio = document.getElementById('music-ebene2-background');

document.getElementById('headset').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;

    if(audio.muted){
        document.getElementById('musicaOff').setAttribute('class', 'active_headset');
    }else{
        document.getElementById('headset').removeAttribute("class");
    }
    e.preventDefault();
}, false);


