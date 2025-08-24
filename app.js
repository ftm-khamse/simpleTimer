const timeDisplay = document.getElementById('time');
const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('reset');
const icon = playBtn.querySelector('i');

let timer;
let seconds = 0;
let isRunning = false;


// time format (00:00)
function formatTime(sec){
    let mins = Math.floor(sec/60);
    let secs = sec % 60 ;

    return(
        String(mins).padStart(2,"0") + ":" +
        String(secs).padStart(2,"0")
    );
}

function playTimer(){
        if(!isRunning){
            timer = setInterval(()=>{
                seconds++;
                timeDisplay.textContent = formatTime(seconds);
                if(seconds>=60){
                    clearInterval(timer);
                    timeDisplay.textContent = formatTime(0);
                    resetAll();
                }
            },1000);
            isRunning = true ;
            icon.classList.add('fa-pause');
            icon.classList.remove('fa-play');
            icon.classList.add('text-red-600');

        }else{
        clearInterval(timer);
        isRunning = false;
        icon.classList.add('fa-play');
        icon.classList.remove('fa-pause');
        icon.classList.remove('text-red-600');
        }
}

function resetAll(){
    clearInterval(timer);
    seconds=0;
    angle=0;
    timeDisplay.textContent = '00:00';
    isRunning = false ;
    icon.classList.add('fa-play');
    icon.classList.remove('fa-pause');
}

// Evet listeners
playBtn.addEventListener('click',playTimer);
resetBtn.addEventListener('click',resetAll);