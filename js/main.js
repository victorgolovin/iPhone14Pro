const btm = document.querySelector('menu-btm');
const nav = document.querySelector('nav');

if(btm)

btm.addEventListener('click', ()=> {
        nav.classList.toggle('menu-open');
    });

if(nav)

nav.addEventListener('click', ()=> {
        nav.classList.toggle('menu-open');
    });