const menuBar = document.querySelector("#menu");
const closeBar = document.querySelector("#close");
const navMenu = document.querySelector(".nav-menu");
// const activeMenu = document.classList("nav-menu active");

menuBar.addEventListener('click', ()=>{
    navMenu.classList.add('active');
    navMenu.style.display='block';
    closeBar.style.display='block';
    closeBar.style.color='var(--theme-color';
    menuBar.style.display='none'
})
closeBar.addEventListener('click', ()=>{
    navMenu.classList.remove('active');
    navMenu.style.display='none';
    closeBar.style.display='none'
    menuBar.style.display='block'
})
