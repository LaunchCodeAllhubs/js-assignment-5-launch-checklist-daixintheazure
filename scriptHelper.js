// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
    let faultyItems = document.getEelementById("faultyItems");
    let launchStatus = document.getEelementById("launchStatus");
    let cargoMass = document.getEelementById("cargoMass");
    let pilotStatus = document.getEelementById("pilotStatus");
    let copilotStatus = document.getEelementById("copilotStatus");

    let checkArr = [pilot, copilot, fuelLevel, cargoLevel];

    for(let i = 0; i < checkArr.length; i++) {
      validateInput(checkArr[i]);
    }


  if (fuelLevel < 10000 || cargoMass > 10000){
    faultyItems.document.style = "visibility: visible";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.document.style.color = "#C7254E";

  } else {
    launchStatus.innerHTML = "Shuttle is ready for launch";
    launchStatus.document.style.color = "#419F6A";
  }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
