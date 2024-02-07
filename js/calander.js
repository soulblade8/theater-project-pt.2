/*set the date displayed in calendar */
var thisDay = new Date();

/*Write the calendar to id calendar */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/*generate calendar tables */
function createCalendar(calDate) {
    var calendarHTML = "<table id= 'calendar_table'>";
    console.log("updated autopsy report");
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

/*funtion to write calendar */
function calCaption(calDate) {
    //Months//
    var monthName= ["January","Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log("do you know the muffin man");
    //determine current month//
    var thisMonth = calDate.getMonth();

    //write the current year//
    var thisYear = calDate.getFullYear();

    //write the caption//
    return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

/*function to write weekday */
function calWeekdayRow() {
    //weekday abbreviations//
    var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];
    var rowHTML = "<tr>";
 
    //look through dayName array//
    for (var i = 0; i < dayName.length; i++) {
    rowHTML += "<th class='calendar_weekdays'>" +dayName[i] + "</th>"
    }

    rowHTML += "</tr>";
    return rowHTML
}

/* calculate days in month */
function daysInMonth(calDate) {
    //array of days in each month
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //forth digit year and month value//
    var thisYear =calDate.getFullYear();
    var thisMonth = calDate.getMonth();

    //revise the days for leap years//
    if ((thisYear % 4 === 0) || (thisYear% 400 === 0)) {
        dayCount[1] = 29;
    }
    
    //return the number of days for the current month//
    return dayCount[thisMonth];
}

/*table rows for each day of month */
function calDays(calDate) {
    //determine the starting day of the month
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay();

    //write blank cells preceding the starting day//
    var htmlCode = "<tr>";
    for (var i = 0; i< weekDay; i++) {
        htmlCode += "<td></td>";
    } 
    //write cells for each day of the month//
    var totalDays = daysInMonth(calDate);

    var highlightDay = calDate.getDate();
    for (var i = 1; i <= totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();

        if (weekDay === 0) htmlCode += "<tr>";
        if (i === highlightDay) {
            htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
        } else {
            htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
        }
        if (weekDay === 6) htmlCode += "</tr>";
    }

    return htmlCode;
}