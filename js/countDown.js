runClock();
setInterval("runClock()",1000);

/*funtion to creat and run the countdown clock */
function runClock() {
 /*store the current date and time */
var currentDay = new Date ();

/*calculate the days until january 1st */
var newYear = new Date("January 1, 2018");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var mainEventDate = new Date("2024-02-24T18:00:00");
var countDownDate = (mainEventDate - currentDay)
var daysLeft = (countDownDate)/(1000*60*60*24);

/* calculate the hours left in the current day */
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24

/*calculate the minutes and seconds left */
var minsLeft = (hrsLeft -Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft -Math.floor(minsLeft))*60;

/*display the time left*/
document.getElementById("countDown").textContent = Math.floor(daysLeft) + ":" + Math.floor(hrsLeft) + ":" + Math.floor(minsLeft) + ":" + Math.floor(secsLeft);
}