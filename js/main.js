let yMob= document.getElementById('yellowmob');
let main=document.querySelector('.main')
let btn=document.querySelector('.image')
let nav =document.querySelector(".navbar")
function changeMob(mobSrc){
    yMob.src=mobSrc;
}
function changeColor(color){
    main.style.background=color;
    nav.style.background=color
}
