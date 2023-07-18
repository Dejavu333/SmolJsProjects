let btnDo;
btnDo = document.querySelector('.btnDo');
let bodyJs;
bodyJs = document.querySelector('body');

let ourColors;
ourColors = ['red', 'blue', 'green'];

btnDo.addEventListener('click',changeColor);
//everytime we hit the button, we get a color from the ourColors array
    function changeColor() {
     let randomNum;    
     randomNum = Math.floor(Math.random()*ourColors.length);
        bodyJs.style.backgroundColor = ourColors[randomNum];
    }