const counter = document.getElementById('counter');
const increase = document.getElementById('plus');
const decrease = document.getElementById('minus');
const hearts = document.getElementById('heart');
const pause = document.getElementById('pause');
const submitForm = document.getElementById('submit');
const likes = document.getElementsByClassName('likes')[0]
const form = document.getElementById('comment-form');
const list = document.getElementById('list')
const inside = document.getElementById('comment-input')
let upTo = 0;
let clicks = '';
let tracker = {}


increase.addEventListener('click', () => counter.textContent = ++upTo);
decrease.addEventListener('click', () => counter.textContent = --upTo);

form.addEventListener('submit', (e) => {
    e.preventDefault() 
    addForm(inside.value)
});

function addForm(comments){
    const p = document.createElement('p')
    p.textContent = comments
    list.appendChild(p)
};

let startCount = function start() {
    counter.innerText = ++upTo
       }
let timer = setInterval(startCount, 1000);

pause.addEventListener('click', stop);

hearts.addEventListener('click', () => {
        let secs = counter.innerText 
        tracker[secs] = tracker[secs] || 0 
        tracker[secs]++
        likes.innerHTML = '';
        for (let key in tracker) {
        const li = document.createElement('li')
        li.textContent = `${key} has been liked ${tracker[key]} times`
        likes.appendChild(li)
        };
 })


function stop() { 
    if (pause.textContent === ' pause ') {
        clearInterval(timer)
        increase.disabled = true;
        decrease.disabled = true;
        hearts.disabled = true;
        submitForm.disabled = true;
        pause.textContent = 'resume'
    } else {
        timer = setInterval(() => counter.textContent = ++upTo, 1000);
        increase.disabled = false;
        decrease.disabled = false;
        hearts.disabled = false;
        submitForm.disabled = false;
        pause.textContent = ' pause ';
        
    };
}

document.addEventListener('DOMContentLoaded', () => {
    
})



