import $ from 'jquery'

class Main {
    init() {
        this.handleMenu()
        this.handleLeftBar()
    }
    handleMenu() {
        var navClose = document.querySelector('[navbar-close]')
        var leftBar = document.getElementById('left-bar')
        var leftBar2 = document.getElementById('left-bar-2');
        var rightBar = document.getElementById('right-bar')
        var navbar = document.getElementById('navbar')
        var isNavOpen = true

        navClose.addEventListener('click', function() {
            isNavOpen ? closeNav() : openNav()
        })

        function closeNav() {
            leftBar2.style.display = 'none'
            navbar.classList.remove('open')
            navbar.classList.add('close')
            rightBar.classList.remove('partial')
            rightBar.classList.add('full')
            // rightBar.style.marginLeft = '0px'
            isNavOpen = false
        }

        function openNav() {
            navbar.classList.remove('close')
            navbar.classList.add('open')
            // rightBar.style.marginLeft = '50px'
            rightBar.classList.remove('full')
            rightBar.classList.add('partial')
            leftBar2.style.display = 'block'
            isNavOpen = true
        }
    }

    handleLeftBar() {
        $(document).on('click', '.leftbar-link', function(e) {
            e.preventDefault()
            var tab = $(this).attr('href')

            $("#left-bar .nav-item.active").removeClass('active')
            $(this).parent().addClass('active')

            $("#left-bar-2 .leftbar-content.show").removeClass('show')
            $(tab).addClass('show')
        })
    }
}

export default Main