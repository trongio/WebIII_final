const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const startbtn=document.getElementById("start");
const pausebtn=document.getElementById("pause");
const stopbtn=document.getElementById("stop");
const resetbtn=document.getElementById("reset");


const faze2=document.getElementById("faze2");

const hours = document.getElementById("input-hours");
const mins = document.getElementById("input-mins");
const seconds = document.getElementById("input-seconds");

var clicked=true;

var time;
var interval
startbtn.addEventListener("click", ()=>{
    time =Math.floor((hours.value*3600+mins.value*60+seconds.value)/10);
    startbtn.classList.add('hidden');
    faze2.classList.remove('hidden');
    interval=setInterval(maketimeless, 1000);
})

stopbtn.addEventListener("click", ()=>{
    clearInterval(interval);
    startbtn.classList.remove('hidden');
    faze2.classList.add('hidden');
})

pausebtn.addEventListener("click", ()=>{
    if(clicked){
        clicked=false;
        pausebtn.innerHTML="resume";
        clearInterval(interval);
    } else {
        interval=setInterval(maketimeless, 1000);
        pausebtn.innerHTML="pause";
        clicked=true;
    }
})


resetbtn.addEventListener("click", ()=>{
    time =Math.floor((hours.value*3600+mins.value*60+seconds.value)/10);
})

function maketimeless(){
    time--;
    console.log(time)
    countdown();
}

function countdown() {

    const totalSeconds = time;

    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}


