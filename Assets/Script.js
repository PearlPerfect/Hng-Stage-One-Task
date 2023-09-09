
const slackUserName = document.querySelector("[data-testid='slackUserName']");
const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
const myTrack = document.querySelector("[data-testid='myTrack']");
const githubURL = document.querySelector("[data-testid='githubURL']");
const currentUTCTimer = document.querySelector('[data-testid="currentUTCTimer"]');
const today = document.querySelector("[data-testid='date']");

const date = new Date();


function UTCTime(){
    const date = new Date();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
    const time =`UTC Time: ${hours}:${minutes}:${seconds}:${milliseconds}`;
     currentUTCTimer.textContent= time
     
}
function day(){
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    today.innerHTML = `${day}/${month}/${year}`
}
UTCTime();
day()

function DayOfTheWeek(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDayOfTheWeek.innerHTML = `${days[date.getDay()]},`; 
}
DayOfTheWeek();
function UTCMilliseconds(){
    const date = new Date();
    const Now = date.getTime();
    currentUTCTime.textContent = `UTC In Milliseconds: ${Now}`
}


UTCMilliseconds();
setInterval(function () {
    UTCMilliseconds();
    UTCTime();
}, 0.001);


