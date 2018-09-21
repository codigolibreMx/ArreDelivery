/* FUNCIONES DEL NAVBARMENU */
/* Set the width of the side navigation to 250px */
function openNav() {
  if(window.screen.width<479){
    document.getElementById("navbar-menu").style.display = "block";
    document.getElementById("navbar-menu").style.width = "100%";
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  if(window.screen.width<479){
    document.getElementById("navbar-menu").style.display = "none";
    document.getElementById("navbar-menu").style.width = "70%";
  }
}
/* INICIAMOS WOW */
              new WOW().init();

/* Deslizaje suave id-links*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
