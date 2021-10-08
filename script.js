const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
// const navLinks = document.querySelector('.links');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
// navLinks.addEventListener('click', close)

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}