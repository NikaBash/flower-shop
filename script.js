function flowerCountdown() {
    const floverDate = new Date("June 1, 2024 12:00");
    const now = new Date();
    const diff = floverDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 *60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if(diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        finallyOpen();
    }
}

let timerID = setInterval(flowerCountdown, 1000);

function finallyOpen() {
    const heading = document.querySelector("h1");
    heading.textContent = "Our flower shop is finally open!";
}


const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected')
    })
    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected')
        })
    }
}) 


const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function(){
    if (audio.paused) {
        audio.play();
        button.classList.toggle("pause");
    }
    else {
        audio.pause();
        button.classList.toggle("pause");
    }
})

    gsap.from(".heading", {
        y:-200,
        ease:"power2.inOut",
        duration:3,
        delay:1,
        opacity:0.5,
    })
    gsap.from(".left", {
        x:-200,
        ease:"power2.inOut",
        duration:3,
        delay:3,
        opacity:0,
    })
    gsap.from(".right", {
        x:200,
        ease:"power2.inOut",
        duration:3,
        delay:3,
        opacity:0,
    })
    gsap.from(".play", {
        x:-200,
        ease:"power2.inOut",
        duration:3,
        delay:4,
        opacity:0,
    })