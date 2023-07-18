//1. felveszem az elemeket, amikre hivatkozni szeretnék
var uto1; var uto2; var labda1;
uto1 = document.getElementById("uto1");
uto2 = document.getElementById("uto2");
labda1 = document.getElementById("labda1")
                                    var p1Score; p1Score = document.getElementById("p1Score")    //*score
                                    var p2Score; p2Score = document.getElementById("p2Score")
                                    var count1; count1 = 0; 
                                    var count2; count2 = 0;
                                    var scoreLefutott; scoreLefutott = false;
                                    var audioUto; var audioFal; audioUto = new Audio('mixkit-typewriter-hit-1362.wav'); audioFal = new Audio('mixkit-gearbox-working-2046.wav');    //*audio
    //2. az ütőnek beállítom a vízszintes helyzetét
    uto1.style.left = "40px";
    uto2.style.left = "750px";

        //3. irányításhoz //a változó állapota tükrözi, hogy le van-e nyomva gomb
        var uto1LeGomb; var uto1FelGomb; var uto2LeGomb; var uto2FelGomb;
        uto1LeGomb = false; uto2LeGomb = false;
        uto1FelGomb = false; uto2FelGomb =false;

        document.addEventListener('keydown', lenyomasra);
        function lenyomasra(event) {
            if(event.keyCode===83) {uto1LeGomb = true}; if(event.keyCode===40) {uto2LeGomb = true};
            if(event.keyCode===87) {uto1FelGomb = true}; if(event.keyCode===38) {uto2FelGomb = true};
        }

        document.addEventListener('keyup', felengedesre);
        function felengedesre(event) {
            if(event.keyCode===83) {uto1LeGomb = false}; if(event.keyCode===40) {uto2LeGomb = false};
            if(event.keyCode===87) {uto1FelGomb = false}; if(event.keyCode===38) {uto2FelGomb = false};
        }

                    //6. a labdának nem csak vertikális, de horizontális pozíciója is van //ezeket változókban tárolom //a sebességet is
                    var labda1x; var labda1y; var labda1xSeb; var labda1ySeb;
                    labda1x = 0 ; labda1xSeb = 0;
                    labda1y = 0; labda1ySeb = 0;
                    //6.1 felveszek egy funkciót, ami középre helyezi a labdát, és véletlenszerűen ad neki pozit 2 és 5 között mindkét tengelyen
                    function startLabda() {
                        labda1x = 350; labda1y = 100;
                        labda1xSeb = (Math.random() * 3 + 2 ) * (Math.round(Math.random()) * 2 - 1 );
                        labda1ySeb = (Math.random() * 3 + 2 ) * (Math.round(Math.random()) * 2 - 1 );
                    } 

            //4. másodpercenként 60x akarom mozgatni az ütőt //a vertikális helyzetet itt tárolom egy változóban
            var uto1y; var uto2y;
            uto1y = 300;
            uto2y = 300;
            //4.1 csinálok egy loop funckciót ez fog másodpercenként 60x lefutni //lehetne setInterval vagy setTimeout is
            function loop() {
                if(uto1LeGomb===true) {uto1y = uto1y + 10};    //4.3 megcsinálom a pozíciófrissitést az uto1y változóban //-10 vagy +10 fog módosulni a változóban tárolt érték
                if(uto1FelGomb===true) {uto1y = uto1y - 10};
                if(uto2FelGomb===true) {uto2y = uto2y - 10};
                if(uto2LeGomb===true) {uto2y = uto2y + 10};
                            labda1x=labda1x+labda1xSeb; labda1y=labda1y+labda1ySeb;    //8. a labda poziját így kapom meg  
                    
                                if(labda1y < 0 || labda1y > 600) {labda1ySeb = -labda1ySeb; audioFal.pause(); audioFal.currentTime = 0; audioFal.play()};    //9. collision a fallal
                                if(labda1x < -50 || labda1x > 750) {labda1xSeb = -labda1xSeb; audioFal.pause(); audioFal.currentTime = 0; audioFal.play()};

if(labda1x < -5) { drawP1Score() };    //*score
if(labda1x > 705) { drawP2Score() };
if(labda1x > 0 && labda1x < 700) {scoreLefutott = false};

                                    if(labda1x < 0 && (labda1x > -5 || labda1x >= labda1xSeb - 5) && Math.abs(labda1y-uto1y) <= 55) {labda1xSeb = -labda1xSeb; audioUto.pause(); audioUto.currentTime = 0; audioUto.play()};   //10. collision az ütőkkel //gyorsítás ütésenként 10% //*audio
                                    if(labda1x < 0 && labda1x > -5 && Math.abs(labda1y-uto1y) <= 55 && Math.abs(labda1xSeb) <= 20) {labda1xSeb =  labda1xSeb *1.1};
                                    if(labda1x > 700 && (labda1x < 705 || labda1x - 700 <= labda1xSeb + 5) && Math.abs(labda1y-uto2y) <= 55) {labda1xSeb = -labda1xSeb; audioUto.pause(); audioUto.currentTime = 0; audioUto.play()};
                                    if(labda1x > 700 && labda1x < 705 && Math.abs(labda1y-uto2y) < 55 && Math.abs(labda1xSeb) <= 20) {labda1xSeb = labda1xSeb *1.1};

                uto1.style.top = uto1y-50+"px";   //4.4 mozgatom az ütőt megjelenítő divet az új megfelelő pozícióba //kivonom az ütő magasságának a felét, hogy az ütő közepe reprezentálja a pozícióját és ne a teteje
                uto2.style.top = uto2y-50+"px";
                            labda1.style.left = labda1x-5+50+"px";    //8.1 a labdát megjelenítő divet is pozícionálom //50px-el eltoltam az aktív játékmező miatt
                            labda1.style.top = labda1y-5+"px";        //mindkét koordinátából kivontam a labda szélességének a felét 

            window.requestAnimationFrame(loop);    //4.2 a következő képfrissités előtt fog meghívodni, ezáltal igazodik az adott monitor képfrissítéséhez
            }
                        //7. meghívom a startLabda funkciót
                        startLabda();
                //5. meghívom a loop funkciót //már tudom is mozgatni az ütőt
                loop();



//*score
function drawP1Score() {    
    if(scoreLefutott===false) {
        scoreLefutott = true;
        count1 = count1 + 1;
        p1Score.innerHTML = count1;
    }
}
function drawP2Score() {
    if(scoreLefutott===false) {
        scoreLefutott = true;
        count2 = count2 + 1;
        p2Score.innerHTML = count2;
    }
}