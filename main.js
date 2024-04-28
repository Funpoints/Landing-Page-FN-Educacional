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