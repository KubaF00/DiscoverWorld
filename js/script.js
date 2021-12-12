var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
    "/images/bg11.png",
    "/images/bg21.png",
    "/images/bg31.png",
    "/images/bg41.png",
    "/images/bg51.png",
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