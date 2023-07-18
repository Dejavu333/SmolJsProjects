let counter;
    counter = document.querySelector('.counter');
//target buttons
let addCount;
let lowerCount;
    addCount = document.querySelector('#addCountBtn');
    lowerCount = document.querySelector('#lowerCountBtn');

//global variable (2functions will use it)
let count;
    count = 0;

//add functionality
addCount.addEventListener('click', increment);
lowerCount.addEventListener('click', decrement);

    function increment(){
        count = count + 1;
        counter.innerHTML = count; //bridge
        counter.animate( [{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'} ); 
    }
    function decrement(){
        count = count - 1;
        counter.innerHTML = count; //bridge
        counter.animate( [{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'} );
    }

