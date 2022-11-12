var navClose = document.querySelector('[navbar-close]')
var leftBar = document.getElementById('left-bar')
var rightBar = document.getElementById('right-bar')
var navbar = document.getElementById('navbar')
var isNavOpen = true

navClose.addEventListener('click', function() {
    isNavOpen ? closeNav() : openNav()
})

function closeNav() {
    leftBar.style.display = 'none'
    navbar.classList.remove('open')
    navbar.classList.add('close')
    rightBar.style.marginLeft = '0px'
    isNavOpen = false
}

function openNav() {
    navbar.classList.remove('close')
    navbar.classList.add('open')
    rightBar.style.marginLeft = '80px'
    leftBar.style.display = 'block'
    isNavOpen = true
}