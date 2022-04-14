// Menu mobile
const popMenu = document.getElementById('mobile-links');
const hamburgerMenu = document.querySelector('.nav-bar-mobile');
const closeBtn = document.querySelector('.fa-x');
let mobileMenuStatus = false;

function mobilePopMenu() {
  if (popMenu.style.display === 'block') {
    popMenu.style.display = 'none';
    mobileMenuStatus = true;
  } else {
    popMenu.style.display = 'block';
    mobileMenuStatus = false;
  }
}

function mobileMenuClose() {
  if (!mobileMenuStatus) {
    popMenu.style.display = 'none';
    mobileMenuStatus = true;
  } else {
    popMenu.style.display = 'block';
    mobileMenuStatus = false;
  }
}

hamburgerMenu.addEventListener('click', mobilePopMenu);
closeBtn.addEventListener('click', mobileMenuClose);