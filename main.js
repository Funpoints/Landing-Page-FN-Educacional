const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementById("teste")

let toggle = false

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  
  if(toggle == false){
    toggle = true
    navbar.style.backgroundColor = "#0000004d"
    
  } else {
    toggle = false
    navbar.style.backgroundColor = "transparent"
  }

})

$('#carousel-1').owlCarousel({
  loop:true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 4000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      763:{
        items:2
      },
      1000:{
          items:3
      },
  }
})

$('#carousel-2').owlCarousel({
  loop:true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
  }
})