// Write your JavaScript code here!

// const { validateInput, addDestinationInfo, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
   
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let pilotValue = pilot.value;

        let copilot = document.querySelector("input[name=copilotName]");
        let copilotValue = copilot.value;

        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuelLevelValue = Number(fuelLevel.value);

        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let cargoLevelValue = Number(cargoLevel.value);

        let list = document.getElementById("faultyItems");
        list.style.visibility = "hidden";
        

        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);
        
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
//    console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function(result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //    let info = pickPlanet(listedPlanets);
    //    console.log(info);
       addDestinationInfo(pickPlanet(listedPlanets));
    });

});