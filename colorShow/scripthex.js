let chars;
chars = [0,1,2,3,4,5,6,7,8,9,'A','B','C','E','F'];

let btnDo;
btnDo = document.querySelector('.btnDo');
let body;
bodyJs = document.querySelector('body');
let hex;
hex = document.querySelector('.hex');

btnDo.addEventListener('click', getHex);
    function getHex(){
        //variable to hold my hex color    
        let hexCol;
        hexCol = '#';

        //need 6 values from the array. //initialize, boolean, increment (IBI)
        for(let i = 0; i<6; i=i+1){
            let random;
            random = Math.floor(Math.random()*chars.length);
            hexCol = hexCol+chars[random]; //add to this hexCol something you picking from the chars array with the a random index //what we get back we add it to the #
        }

        //change the background once we are done with the loop
        bodyJs.style.backgroundColor = hexCol; 
        hex.innerHTML = hexCol; //to display the hex code in text (in index-hex.html between span tags) 
}
