(function () {
  const previous = document.querySelector("#previous");
  const next = document.querySelector("#next");
  const content = document.querySelector("#content");
  const pathImg = "slides/";
  const imgList = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];
  let currentIndexImg = 0;

  function swapImg() {
    const myImg = document.createElement("img");
    myImg.src = pathImg + imgList[currentIndexImg];
    myImg.className = "fadeinimg";
    content.appendChild(myImg);
    const Img = document.querySelectorAll("img");
    if (Img.length > 2) {
      content.removeChild(Img[0]);
    }
  }
  
  previous.addEventListener("click", function (event) {
    event.preventDefault();
    currentIndexImg--;
    if (currentIndexImg < 0) {
      currentIndexImg = imgList.length - 1;
    }

    swapImg();
  });

  next.addEventListener("click", function (event) {
    event.preventDefault();
    currentIndexImg++;
    if (currentIndexImg === imgList.length) {
      currentIndexImg = 0;
    }
    swapImg();
  });
})();
