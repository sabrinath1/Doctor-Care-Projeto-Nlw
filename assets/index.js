const botaoMenu = document.querySelector('.menu__lateral--cabecalho')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo')
})
