let buttonF;
buttonF = document.getElementById('buttonF');
let inputF;
inputF = document.getElementById('inputF');
let doList;
doList = document.querySelector('.doList');


buttonF.addEventListener('click',toDoLister);

function toDoLister() {
    var paragraph;
    paragraph = document.createElement('p');
        paragraph.innerText = inputF.value;
            doList.appendChild(paragraph);    //to make a <p> in hmtl
                inputF.value = '';    //to always get an emtpry bar
    

    

    paragraph.addEventListener('click',doner);
    function doner() {
        paragraph.style.textDecoration = 'line-through';
    }

    paragraph.addEventListener('dblclick',delFn);
    function delFn() {
        paragraph.style.textDecoration = 'none'    //user-select: none; in CSS to prevent highliht after double-click 
    }

    paragraph.addEventListener('click', shiftClick);
    function shiftClick(event) {
        if (event.shiftKey) {
            doList.removeChild(paragraph);   
        }
    }
                        
    
}

function myFunction(event) {    //we need onkeypress="myFunction(event) in html for this to work    
        var x = event.code;
        if(x == "Enter") {
            toDoLister();    //validate()
        }    
}