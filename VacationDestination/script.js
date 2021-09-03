(function () {
  let detailForm = document.getElementById("destination_details_form");
  let fieldName = document.getElementById("name");
  let fieldLocation = document.getElementById("location");
  let fieldPhotoUrl = document.getElementById("photo");
  let fieldDescription = document.getElementById("descriptions");
  let cardDetail = document.getElementById("destination_container");
  let removeButton;
  const cardDetailDefault = cardDetail.innerHTML; //Save the dedault info of destination card to reset after

  detailForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    createCard();
    detailForm.reset();
    removeButton = document.querySelector("#destination_container button");
    removeButton.addEventListener("click", function () {

      console.log(cardDetailDefault);
      cardDetail.innerHTML = cardDetailDefault;
    });
  }

  function createCard() {
    let Photosrc = fieldPhotoUrl.value; //copy the url value
    if (!Photosrc) {
      Photosrc = "images/signpost.jpg";
    }
    cardDetail.innerHTML = `<div class="card">
      <img src=${Photosrc} alt="">
      <div class="card-body">
        <h3>${fieldName.value}</h3>
        <h4>${fieldLocation.value}</h4>
        <p class="card-text">${fieldDescription.value}</p>
        <button>Remove</button>
      </div>
    </div>`;
  }
})();
