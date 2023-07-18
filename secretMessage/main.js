//bridge
var btn1;
btn1 = document.getElementById('btn1');
btn1.addEventListener('click', rot5);
var story;
story = document.getElementById('message');

//btn2 has 'onclick' so we don't need addEventListener or bridge
var secStory;
secStory = document.getElementById('secMessage')

function rot5(){
   var message;
   message=story.value;
   
   var result;
   result = '';
     for (i=0;i<message.length;i=i+1){     //loop through
     var charPos;
     charPos = message[i].charCodeAt(0);   //get the code of every single character
     var NeoCharPos;
     NeoCharPos = charPos + 5;             //add 5 to every single character code
     result = result + String.fromCharCode(NeoCharPos);  //convert a set of Unicode values into characters
     }
 secStory.value = result;
 
}
 

/*
Write a program to translete it!
*/
 
function reverseRot5(){
   var secretMessage;
   secretMessage=secStory.value;

   var result;
   result = '';
       for (i=0;i<secretMessage.length;i=i+1){     //loop through
       var charPos;
       charPos = secretMessage[i].charCodeAt(0);   //get the code of every single character
       var NeoCharPos;
       NeoCharPos = charPos - 5;                   //remove 5 from every single character code
       result = result + String.fromCharCode(NeoCharPos);  //convert a set of Unicode values into characters
       }
 //instead of return result;
 story.value = result
}
