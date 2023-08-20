var score = 0; 
var timer = 30;
var randoms = 0;

function makebubble(){
let clutter = "";
for(let i=1; i < 134; i++){
    let ps = Math.floor(Math.random()*10)
 clutter +=`<div class="bubble"><h3>${ps}</h3></div>`
}
document.querySelector(".gbtm").innerHTML= clutter; 
}

function getNewHit(){
    randoms =  Math.floor(Math.random()*10);
   document.querySelector(".hitval").textContent = randoms
}

function runTimer(){
    var stimer=setInterval(function(){
        if(timer >0){
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else {
            clearInterval(stimer)
            document.querySelector(".gbtm").innerHTML = ""
        }
    },1000)
}

function increaseScore(){
    score += 10;
    document.querySelector(".scoreval").innerHTML =score;
}

document.querySelector(".gbtm").addEventListener("click", function(info){
    var clickedNum = Number(info.target.textContent);
    console.log(Number(info.target.textContent))
    console.log(randoms)     
    if(clickedNum===randoms){
        increaseScore()
        getNewHit()
        makebubble();   
    }
})

getNewHit()
makebubble();
runTimer();
