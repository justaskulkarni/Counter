counter = 0;

document.getElementById("count").innerHTML = counter;
let incbtn = document.getElementById("increasebtn");
let decbtn = document.getElementById("decreasebtn");
let resbtn = document.getElementById("resetbtn");

incbtn.addEventListener('click', increment);
decbtn.addEventListener('click', decrement);
resbtn.addEventListener('click', reset);

function increment(){
    document.getElementById("count").innerHTML = ++counter;
}

function decrement(){
    document.getElementById("count").innerHTML = --counter;
}

function reset(){
    counter = 0;
    document.getElementById("count").innerHTML = counter;
}
