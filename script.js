var agenda = document.getElementById("agenda");
agenda.addEventListener("click", ()=>{
    var list = document.querySelectorAll("ul");
    list[2].classList.toggle('hidden');
})
    
var especial = document.getElementById("especial");
especial.addEventListener("click", ()=>{
    var list = document.querySelectorAll("ul");
        list[3].classList.toggle('hidden');
})
var util = document.getElementById("util");
util.addEventListener("click", ()=>{
    var list = document.querySelectorAll("ul");
        list[4].classList.toggle('hidden');
})
var btn = document.getElementById("btn");

btn.addEventListener('click', toggleMenu)

function toggleMenu(){
    var btnMobile = document.querySelectorAll('ul');
    btnMobile[1].classList.toggle('hidden')
    btnMobile[1].classList.toggle('flex')
}