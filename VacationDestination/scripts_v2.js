(function () {
  const fieldName = document.getElementById("name");
  const fieldLocation = document.getElementById("location");
  const fieldPhotoUrl = document.getElementById("photo");
  const fieldDescription = document.getElementById("descriptions");
  const destionationForm = document.getElementById("destination_details_form");
  const destionationCard = document.querySelector(
    "#destination_details_form>.card"
  );
  const destinationCardImg = document.querySelector(
    "#destination_container>.card>img"
  );
  const destinationCardBody = document.querySelector(
    "#destination_container>.card>.card-body"
  );
  const 

  function handleSubmission(event) {
    event.preventDefault();

    if (fieldPhotoUrl.value) destinationCardImg.src = fieldPhotoUrl.value;
    destinationCardBody.children[0].innerHTML = fieldName.value;
    destinationCardBody.children[1].innerHTML = fieldLocation.value;
    destinationCardBody.children[2].innerHTML = fieldDescription.value;
  }

  destionationForm.addEventListener("submit", handleSubmission);
})();
