//menu 
let menuBtn = document.querySelector(".hed-menu-ico");
let hedList = document.querySelector(".hed-list");
let html = document.querySelector("html");

menuBtn.addEventListener("click" , (e) => {
    hedList.classList.toggle("active");
    if(hedList.classList.contains("active")){
        html.style.overflow = "hidden";
    }
    else{
        html.style.overflow = "scroll";
    }
})
//timer
let date = new Date('March 13 2022 00:00:00');
let d = document.querySelector(".d"),
    h = document.querySelector(".h"),
    m = document.querySelector(".m"),
    s = document.querySelector(".s");
let timerBody = document.querySelector(".timer-body");

function counts(){
    let now = new Date();
    gap = date - now;
    

    let days = Math.floor(gap / 1000 / 60 / 60 / 24),
        hours = Math.floor(gap / 1000 / 60 / 60 ) % 24,
        minutes = Math.floor(gap / 1000 / 60 ) % 60,
        seconds = Math.floor(gap / 1000 ) % 60;
    
    if(gap < 0){
        days = days + 7;
        hours = hours + 24;
        minutes = minutes + 60;
        seconds = seconds + 60;
    }
    d.innerHTML =  `${days} <span>днів</span>`;
    h.innerHTML = `${hours} <span>годин</span>`;
    m.innerHTML = `${minutes} <span>хвилин</span>`;
    s.innerHTML = `${seconds} <span>секунд</span>`;
}

setInterval(counts , 1000);