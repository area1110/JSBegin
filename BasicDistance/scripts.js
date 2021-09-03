(function () {
  const distance = document.getElementById("distance");
  const convertdist = document.getElementById("convert");
  const answer = document.querySelector("#answer>h2");
  let result;

  const UNIT = 1.609344; //km == 1 mile

  convertdist.addEventListener("submit", function (evt) {
    evt.preventDefault();
    answer.removeAttribute("class");
    if (!distance.value) {
      answer.innerHTML = "Please input";
      return;
    }
    const fromDistance = Number(distance.value);
    if (!fromDistance) {
      answer.innerHTML = "Please input an number";
      return;
    }
    result = (fromDistance * UNIT).toFixed(3);
    answer.innerHTML = `${fromDistance} miles converts to ${result} kilometers`;
  });
})();
