const menuBtn = document.querySelector('.menu-button')
const menuContainer = document.querySelector('.menu-container')
const leftMenu = document.querySelector('.menu-contacts')
const rightMenu = document.querySelector('.menu')

console.log(leftMenu.style.height);
console.log(rightMenu.offsetHeight);

function setEqualHeight(columns) {
  const windowWidth = $(window).width()
  var tallestcolumn = 0;

  columns.each(function () {
    currentHeight = $(this).height();
    if (currentHeight > tallestcolumn) {
      tallestcolumn = currentHeight;
    }
  });

  if (windowWidth >= 1020) {
    columns.height(tallestcolumn);
  } else {
    columns.css({ 'height': 'auto' })
    return false;
  }
}



const toggleMenu = () => {
  document.querySelector('body').classList.toggle('overlay')
  menuContainer.classList.toggle('active')
  leftMenu.classList.toggle('active')
  rightMenu.classList.toggle('active')
  setEqualHeight($(".column"));
}

menuBtn.addEventListener('click', e => {
  toggleMenu()
})