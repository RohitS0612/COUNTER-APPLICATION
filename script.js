
let el = document.getElementById("count");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");

let count = 1;

minus.addEventListener('click', ()=>{
    if(count >  0){
        count--;
        el.innerText = count;
    }
});

plus.addEventListener('click', ()=>{
    count++;
    el.innerText = count;
});

reset.addEventListener('click', ()=>{
    count = 0;
    el.innerText = count;
});
