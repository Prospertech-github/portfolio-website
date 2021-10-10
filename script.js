const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navLinks = document.querySelectorAll('.links');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

mainMenu.addEventListener('click', function (e) {
  if (e.target.className == 'links') {
    mainMenu.classList.add('hide');
    console.log(mainMenu.classList);
  }
})

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}