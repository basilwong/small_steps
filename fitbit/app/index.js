import document from "document";
import { HeartRateSensor } from "heart-rate";
import { geolocation } from "geolocation";
import { writeFileSync } from "fs";
import { readFileSync } from "fs";
import * as fs from "fs";

let hrmData = document.getElementById("hrm-data");
let latData = document.getElementById("lat-data");
let lonData = document.getElementById("lon-data");

let hrm = new HeartRateSensor();
var data = {
  heartRate: 0,
  latitude: 0,
  longitude: 0
}

// Call to update the heart rate text with the current heart rate
function updateHeartRate() {
  data.heartRate = hrm.heartRate;
  //console.log("Current heart rate: " + data.heartRate);
  hrmData.text = hrm.heartRate;
}

function roundTo3DP(decimal) {
  return decimal.toFixed(3);
}

// Call to update the location text with the current location
function updateLocation() {
  function locationSuccess(position) {
    data.latitude = position.coords.latitude;
    data.longitude = position.coords.longitude;
    
    //console.log("Latitude: " + data.latitude, "Longitude: " + data.longitude);
    latData.text = "Latitude: " + roundTo3DP(data.latitude);
    lonData.text = "Longitude: " + roundTo3DP(data.longitude);
  }
  
  function locationError(error) {
    console.log("Error: " + error.code,
              "Message: " + error.message);
  }
  geolocation.getCurrentPosition(locationSuccess, locationError);
}

// Update the readings and write to file
function update() {
  updateHeartRate();
  updateLocation();
}

hrm.start();

// Update the data every second (1000 milliseconds)
var second = 1000
setInterval(update, second);