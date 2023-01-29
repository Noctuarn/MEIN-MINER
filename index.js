
// БУРГЕР
const burger = document.querySelector('.burger'),
      windowMenu = document.querySelector(".window");

let menuOpen = false;

burger.addEventListener('click', ()=> {
    if(!menuOpen) {
        burger.classList.add('open');
        menuOpen=true;
        windowMenu.style.display = "block";
        windowMenu.style.overflow = "block";
    }
    else {
        burger.classList.remove('open');
        menuOpen=false;
        windowMenu.style.display = "none";
    }
})



