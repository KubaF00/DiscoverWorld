var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
    "/images/bg1.png",
    "/images/bg2.png",
    "/images/bg3.png",
    "/images/bg4.png",
    "/images/bg5.png",
)
let i = 0;

next.onclick = function(){
    if(i<4){
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++;
    }
    else if(i==4){
        i=0;
        hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
        thumbnail[i].classList.add('active');
        thumbnail[4].classList.remove('active');
    }
}
prev.onclick = function(){
    if(i>0){
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--;
    }
    else if(i==0){
        i=4;
        hero.style.backgroundImage = 'url("'+backgroundImg[i]+'")';
        thumbnail[i].classList.add('active');
        thumbnail[0].classList.remove('active');
    }
}