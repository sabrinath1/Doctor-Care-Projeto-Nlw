const activePage = window.location.pathname
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if (link.href.icludes(`${activePage}`)) {
    link.classList.add('active')
  }
})
