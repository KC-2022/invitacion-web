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
//galeria
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

// Musica On - OFF

const sonidoMusicaOff = document.getElementById('sonidoMusicaOff');
const sonidoMusicaOn = document.getElementById('sonidoMusicaOn');
const iconoMusica = document.getElementById('iconoMusica');
const musica = document.getElementById('musica');


sonidoMusicaOff.addEventListener('click', () => {
    sonidoMusicaOff.classList.add('hidden');
    sonidoMusicaOn.classList.remove('hidden');
    iconoMusica.classList.add('hidden');
    musica.play();
});

sonidoMusicaOn.addEventListener('click', () => {
    sonidoMusicaOn.classList.add('hidden');
    sonidoMusicaOff.classList.remove('hidden');
    iconoMusica.classList.remove('hidden');
    musica.pause();
});

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();


  // Validar nombre
  if (nombre === "") {
    alert("Por favor, ingrese su nombre");
    return false;
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido");
    return false;
  }

  return true;
}