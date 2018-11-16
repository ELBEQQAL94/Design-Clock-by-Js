const secondsHand = document.querySelector('.seconds-hand');
const hoursHand = document.querySelector('.hours-hand');
const minsdHand = document.querySelector('.mins-hand');
function setDate() {
    const now = new Date();
    // get seconds
    const seconds = now.getSeconds();
    //transform Seconds To Degree
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //transform seconds hand
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // get minutes
    const mins = now.getMinutes();
    // transform minutes to degree
    const minsDegrees = ((mins / 60) * 360) + 90;
    //transform minutes hand
    minsdHand.style.transform = `rotate(${minsDegrees}deg)`;
    // get hours
    const hours = now.getHours();
    // transform minutes to degree
    const hoursDegrees = ((hours / 12) * 360) + 90;
    //transform minutes hand
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);