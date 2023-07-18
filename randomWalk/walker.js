window.onload = function() {

    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    console.log(canvas.width);

    //variables
    let posX = window.innerWidth/2;
    let posY = window.innerHeight/2;
    let w = 6;
    let h = 6;

    position = {};


    //already been there?
    position[posX]={};
    position[posX][posY]={};
    position[posX][posY]["howMany"] = 1;    //we've been there once

    function draw() {
        if(position[posX]==null ) {
   
            position[posX]={};
            position[posX][posY]={};
            position[posX][posY]["howMany"] = 1;      //1 if we've already been there, for how many times 
        }
        else if (position[posX][posY]==null) {

            position[posX][posY]={};
            position[posX][posY]["howMany"] = 1;      //1 if we've already been there, for how many times 
        }
        else if(position[posX][posY]["howMany"]>0) {

            position[posX][posY]["howMany"] = position[posX][posY]["howMany"]+1;
        }
        
        let hue = 0;
        if(position[posX][posY]["howMany"]>1){

            hue=hue+position[posX][posY]["howMany"]*10;
        }
        ctx.fillStyle = `hsl(${hue},50%,50%)`;
        ctx.fillRect(posX,posY,w,h);
    }

    function walk() {
        var r = Math.floor( Math.random()*(4-0)+0 ); //random number between 0 and 4

        if(r===0 && posX<=canvas.width-12) {

            posX = posX+6;
            draw();
            console.log(posX, posY);
        }
        else if(r===1 && posX>=6) {

            posX = posX-6;
            draw();
            console.log(posX, posY);
        }
        else if(r===2 && posY<=canvas.height-12) {

            posY = posY+6;
            draw();
            console.log(posX,posY);
        }
        else if(r===3 && posY>=6) {

            posY = posY-6;
            draw();
            console.log(posX,posY);
        }
    }

    setInterval(walk,2);
};