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

// Accordion
let acc = document.querySelectorAll('.accrodionhead');
let acb = document.querySelectorAll('.accrodionbody');

for( var i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', function(){
        this.classList.toggle('active');    
        acb = this.nextElementSibling;
        if(acb.style.display === 'block'){
            acb.style.display = 'none'
        }else{
            acb.style.display = 'block'
        }
    })
}

// window.onload = ()=>{
//     bgchange()
// }
// Color Change
// function main (){
//     const bodyFrame = document.querySelector('#changebgcolor');
//     const colorBtn = document.querySelector('#colorchnagebtn');
//     colorBtn.addEventListener('click', function(){
//         const rgbColor = generateRGBcolor();
//         bodyFrame.style.backgroundColor = rgbColor;
//     })
//     const generateRGBcolor = function(){
//         const red = Math.floor(Math.random()*255);
//         const green = Math.floor(Math.random()*255);
//         const black = Math.floor(Math.random()*255);
//         return(`rgb(${red},${green},${black})`)
//     }
// }
// Math.random()
// Math.floor()
// Rgb Highest Number 255
// const red = Math.floor(Math.random()*255);
// const green = Math.floor(Math.random()*255);
// const black = Math.floor(Math.random()*255);
// Generate A Random Color


// const rgbGenerator = function(){
//     const red = Math.floor(Math.random()*255);
//     const green = Math.floor(Math.random()*255);
//     const blue = Math.floor(Math.random()*255);
//     return('#({$red}, {$green}, {$blue})')    
// }
