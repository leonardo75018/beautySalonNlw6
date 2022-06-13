/*Open and close burger menu in click */
const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Close burger menu quand click in link of burger menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Testimonials slider swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScroolReveal  : Monter les éléments au momennt du scroll dans la page
const scroolReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scroolReveal.reveal(
  `
    #home .image, #home .text,
    #about .image, #about .text,
    #services .header, #services .card,
    #testimonials .header, #testimonials  .testimonials,
    #contact .text, #contact .links,
    footer .brand , footer .social
  `,

  {
    interval: 100
  }
)
