 // Toggle class active

 const navbarNav = document.querySelector('.navbar-nav');
 // hamburger menu diklik :
 document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
  
 };

 // klik di luar sidebar = hilangin nav

 const hamburger = document.querySelector('#hamburger-menu');

 document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
 })