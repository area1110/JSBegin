(function () {
  const distance = document.getElementById("distance");
  const convertdist = document.getElementsByName("convertdist")[0];
  const answer = document.querySelector("#answer>h2");
  let result;

  const UNIT = 1.609344; //km == 1 mile

  convertdist.addEventListener("click", function (evt) {
    evt.preventDefault();
    answer.removeAttribute("class");
    if (distance.value === "") {
      answer.innerHTML = "Please input an number";
      return;
    }
    const fromDistance = Number(distance.value);
    if (isNaN(fromDistance)) {
      answer.innerHTML = "Please input an number";
      return;
    }
    result = distance.value * UNIT;
    answer.innerHTML = `${fromDistance} miles converts to ${result} kilometers`;
  });
})();
