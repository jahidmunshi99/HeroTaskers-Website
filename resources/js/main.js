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
//     return('rgb({$red}, {$green}, {$blue})')    
// }
const bgchange = ()=>{
    const bodyFrame = document.querySelector('#changebgcolor');
    const colorBtn = document.querySelector('#colorchnagebtn');
    const rgbBox = document.querySelector('#rgbBx');
    const hexBox = document.querySelector('#hexBx');

    colorBtn.addEventListener('click', function(){
        const rgbColor = colorGenerator();
        const rgbCode = rgbCodeGenerator(); 
        const hexCode = hexCodeGenerator();
        const hexcolor = hexCodeGenerator();
        bodyFrame.style.backgroundColor = rgbColor;
        rgbBox.value=rgbCode;
        hexBox.value=hexCode;
        rgbBox.style.color=rgbColor;
        hexBox.style.color=rgbColor;
    })
    const colorGenerator = ()=>{
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);
        return(`rgb(${red},${green},${blue})`)
    }
    const rgbCodeGenerator = ()=>{
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);
        return(`RGB (${red}, ${green}, ${blue})`)
    }
    const hexCodeGenerator = ()=>{
        const red = Math.floor(Math.random()*255);
        const green = Math.floor(Math.random()*255);
        const blue = Math.floor(Math.random()*255);
        return(`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`)
    }
}
bgchange()