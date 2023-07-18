var celsiusInput;
celsiusInput = document.querySelector('#celsius > input');
var fahrenheitInput;
fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput;
kelvinInput = document.querySelector('#kelvin > input');
    
   
        function roundNum(num) {
            return Math.round(num*100)/100  
            // we need 2 digits
            // 3.12345 --> 312.345 --> 312.00 --> 3.12
        }

    function CtoKF() {
        var cTemp;
        cTemp = parseFloat(celsiusInput.value);
        var fTemp;
        fTemp = cTemp * (9/5) + 32; //formula
        var kTemp;
        kTemp = cTemp + 273.15; // this would be string + float //parsefloat to make everything float data type

        //fahrenheitInput.value = fTemp; with the roundNum function:
        fahrenheitInput.value = roundNum(fTemp);
        kelvinInput.value = roundNum(kTemp);
    }

    function FtoCK() {
        var fTemp;
        fTemp = parseFloat(fahrenheitInput.value);
        var cTemp;
        cTemp = (fTemp - 32) * (5/9);
        var kTemp;
        kTemp = (fTemp * 459.67) * 5/9;

        celsiusInput.value = roundNum(cTemp);
        kelvinInput.value = roundNum(kTemp);
    }

    function KtoCF() {
        var kTemp;
        kTemp = parseFloat(kelvinInput.value);
        var cTemp;
        cTemp = kTemp - 273.15;
        var fTemp;
        fTemp = 9/5 * (kTemp - 273) * 32;

        celsiusInput.value = roundNum(cTemp);
        fahrenheitInput.value = roundNum(fTemp);
    }

celsiusInput.addEventListener('input', CtoKF);
fahrenheitInput.addEventListener('input', FtoCK);
kelvinInput.addEventListener('input', KtoCF);