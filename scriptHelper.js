// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionDestination = document.getElementById("missionTarget");
   missionDestination.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {

   let numInput = Number(testInput);
   
   if(testInput === "") {
    return "empty";

   } else if (isNaN(numInput) === false) {
    return "is a number";

   } else if (isNaN(numInput) === true){
    return "not a number";

   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let cargoMass = document.getElementById("cargoMass");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    let checkArr = [pilot, copilot, fuelLevel, cargoLevel];

    for(let i = 0; i < checkArr.length; i++) {
      validateInput(checkArr[i]);
    }


  if (fuelLevel < 10000 || cargoLevel > 10000){
    faultyItems.style = "visibility: visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "#C7254E";

  } else {
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.style.color = "#419F6A";
  }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      planetList = planetsReturned;
        });

    return planetList;
}

function pickPlanet(planets) {
  let selectedPlanet = planets[Math.random(planets.length)];

  return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
