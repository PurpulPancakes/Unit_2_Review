"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Marc Tinney
   Date: 2/3/2020 

	
*/
//Sets the date
var thisDay = new Date("August 30, 2018");
//Displays the information for the set date
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";
//Makes the last date display 14 days ahead of current date
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);
//This displays the calendar with 14 days
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   //This will change the code if everything matches up
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
   }
}
//This closes the table
tableHTML += "</table>";
document.getElementById("eventList").innerHTML = tableHTML;
