const btn1 = document.getElementById("a");
const btn2 = document.getElementById("b");
const h1 = document.querySelector("h1");
let number = 0;
function inceremint (){
    number ++;
    h1.innerHTML = number;
}
function dceremint (){
    number --;
    h1.innerHTML = number;
}
btn1.addEventListener("click",inceremint);
btn2.addEventListener("click",dceremint);
h1.addEventListener("click",number);