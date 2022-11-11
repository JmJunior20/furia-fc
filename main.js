window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activeMenuAtCurrentSection();

//   activeMenuAtCurrentSection(home)
//   activeMenuAtCurrentSection(jogos)
//   activeMenuAtCurrentSection(galeria)
//   activeMenuAtCurrentSection(contato)
}

// function activeMenuAtCurrentSection(section) {
//     const targetLine = scrollY + innerHeight / 2

//     const sectionTop = section.offsetHeigth
//     const sectionHeight = section.offsetHeigth
//     const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

//     const sectionEndAt = sectionTop + sectionHeight
//     const sectionEndPassedTargetline = sectionEndAt <= targetLine

//     const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

//     const sectionId = section.getAttribute('id')
//     const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

//     menuElement.classList.remove('active')
//     if (sectionBoundaries) {
//         menuElement.classList.add('active')
//     }
// }

function showNavOnScroll() {
  if (scrollY > 0) {
    navigate.classList.add("scroll");
  } else {
    navigate.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 350) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
