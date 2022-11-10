function onScroll() {
    if (scrollY > 0) {
        navigate.classList.add('scroll')
    } else {
        navigate.classList.remove('scroll')
    }
}
