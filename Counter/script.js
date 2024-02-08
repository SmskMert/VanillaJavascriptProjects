const counter = document.querySelector('.counter');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let count = 0;

decrease.addEventListener('click', function(){
    counter.innerText = --count;
    if(count==0){
        decrease.disabled=true;
        reset.disabled.true;
    }
})

increase.addEventListener('click', function(){
    if(count==0){
        decrease.disabled=false;
        reset.disabled=false;
    }
    counter.innerText = ++count;
})

reset.addEventListener('click', function(){
    decrease.disabled=true;
    reset.disabled=true;
    count = 0;
    counter.innerText = count;
})
