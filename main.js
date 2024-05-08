const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementById("navbar")
const main = document.getElementById("main")

let toggle = false

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  
  if(toggle == false){
    toggle = true
    navbar.style.backgroundImage = "linear-gradient(131.1deg, #0086e5ff 0%, #00ffff 100%)";
    navbar.style.borderRadius = "0 0 30px 30px"
    navbar.style.marginBottom = "15px"
    
  } else {
    toggle = false
    navbar.style.marginBottom = "0"
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "transparent";
  }
})

$('#carousel-1').owlCarousel({
  loop:true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 6000,
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
  autoplayTimeout: 6000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
  }
})

$('#carousel-3').owlCarousel({
  loop:true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 6000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
  }
})

$('#carousel-4').owlCarousel({
  loop:true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 6000,
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

let question = document.querySelectorAll(".question");
question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}