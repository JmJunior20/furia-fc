window.addEventListener('scroll', onScroll)

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll ()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigate.classList.add('scroll')
    } else {
        navigate.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll () {
    if (scrollY > 350) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}
