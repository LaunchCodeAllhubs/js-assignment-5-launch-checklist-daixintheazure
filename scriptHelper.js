// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionDestination = this.document.getElementById("missionTarget");

   missionDestination.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${document.name} </li>
                    <li>Diameter: ${document.diameter} </li>
                    <li>Star: ${document.star}</li>
                    <li>Distance from Earth: ${document.distance}</li>
                    <li>Number of Moons: ${document.moons}</li>
                </ol>
                <img src=${document.image}>
   `;

}

function validateInput(testInput) {

   let numInput = Number(testInput);
   
   if (testInput === "") {
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
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let pilotCheck = validateInput(pilot);
    let copilotCheck = validateInput(copilot);
    let fuelLevelCheck = validateInput(fuelLevel);
    let cargoLevelCheck = validateInput(cargoLevel);

    console.log(pilotCheck, cargoLevelCheck, copilotCheck, fuelLevelCheck);

    if(pilotCheck === "empty" || copilotCheck === "empty" || fuelLevelCheck === "empty" || cargoLevelCheck === "empty"){
      alert("All fields required!");

    } else if (fuelLevelCheck === "not a number" || cargoLevelCheck === "not a number"){
      alert("Make sure to enter valid infomration for each field!");

    } else {

      if (fuelLevel < 10000 || cargoLevel > 10000){
        faultyItems.style = "visibility: visible";
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "#C7254E";

        if(fuelLevel < 10000){
          fuelStatus.innerHTML = `Fuel level too low for launch`;
        } else {
          fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }

        if(cargoLevel > 10000){
          cargoStatus.innerHTML = `Cargo mass too high for launch`;
        } else {
          cargoStatus.innerHTML =`Cargo mass low enough for launch`;
        }

      } else {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#419F6A";
      }

    }

  



  

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
      // console.log(response.json());
    });
    return planetsReturned;
  
}

function pickPlanet(planets) {
  // console.log(planets);
  let selectedPlanet = planets[Math.floor(Math.random() * planets.length )];
  // console.log(selectedPlanet);

  return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
