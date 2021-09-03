(function () {
  "use strict";
  const title = document.querySelector("body>h1");
  const instructor = document.querySelector("body>div.top>p");
  const answer = document.querySelector("#answer>h2");
  const form = document.getElementById("convert");
  let distance = document.getElementById("distance");

  const MILE_UNIT = 1.60934;
  let convertionType = "mile";

  function caculate(unit, distanceNumber) {
    return Math.round(distanceNumber * unit * 1000) / 1000;
  }

  function convertorMileToKm() {
    convertionType = "mile";
    title.innerHTML = "Miles to Kilometers Converter";
    instructor.innerHTML =
      "Type in a number of miles and click the button to convert the distanceto kilometers.";
  }

  function convertorKmToMiles() {
    convertionType = "kilometer";
    title.innerHTML = "Kilometers to Miles Converter";
    instructor.innerHTML =
      "Type in a number of kilometers and click the button to convert the distanceto miles.";
  }

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "m":
        convertorMileToKm(MILE_UNIT);
        break;
      case "k":
        convertorKmToMiles(1 / MILE_UNIT);
        break;
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    answer.removeAttribute("class");
    if (!distance.value) {
      answer.innerHTML = "<h2>Don't let the field empty!</h2>";
      return;
    }
    let distanceNumber = Number(distance.value);
    if (!distanceNumber) {
      answer.innerHTML = "<h2>Please provide a number</h2>";
      return;
    }
    switch (convertionType) {
      case "mile":
        answer.innerHTML = `${distance.value} miles to ${caculate(
          MILE_UNIT, distanceNumber
        )} km`;
        break;
      case "kilometer":
        answer.innerHTML = `${distance.value} km to ${caculate(
          1 / MILE_UNIT, distanceNumber
        )} miles`;
        break;
    }
  });
})();
