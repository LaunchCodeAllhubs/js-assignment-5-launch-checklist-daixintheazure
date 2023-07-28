// Write your JavaScript code here!

const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
   
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        pilot = document.querySelector("input[name=pilotName]");
        copilot = document.querySelector("input[name=copilotName]");
        fuelLevel = document.querySelector("input[name=fuelLevel]");
        cargoLevel = document.querySelector("input[name=cargoLevel]");


        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });

});