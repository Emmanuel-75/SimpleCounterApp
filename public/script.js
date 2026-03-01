const counter = document.querySelector('#counter');
const addButton = document.querySelector('#increase');
const minusButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const title = document.querySelector('#title');
const statusText = document.querySelector('#statusText');


let counterState = 0;
let add = '+1';
let minus = '-1';

setTimeout(()=>{
    title.classList.remove("animate-bounce");
    title.classList.add('animate-pulse');
},2500)

function Status(text){
    statusText.textContent = text;
    setTimeout(()=>{
        statusText.textContent = '';
    },300)
}

function updateCounter() {
    counter.textContent = counterState;
    minusButton.disabled = counterState <= 0;
    resetButton.disabled = counterState <= 0;
}

addButton.addEventListener('click', () => {
    counter.classList.add('text-green-500');
    setTimeout(()=>{
        counter.classList.remove('text-green-500');
    },300);
    counterState++;
    updateCounter();
    Status(add);
});

minusButton.addEventListener('click', () => {
    if (counterState > 0) {
        counterState--;
        updateCounter();
    }
    counter.classList.add('text-red-500');
    setTimeout(()=>{
        counter.classList.remove('text-red-500');
    },300);
    Status(minus);
});

resetButton.addEventListener('click', ()=>{
    let currentNum = `-${counterState}`;
    Status(currentNum);
    counterState = 0;
    counter.textContent  = counterState;
    updateCounter();
})

updateCounter();