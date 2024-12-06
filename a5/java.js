  var images = [
    { src: "https://raw.githubusercontent.com/akimkhabibullin/dev109/refs/heads/main/m05/images/bullseye%20image.png", description: "This image shows a logo of a Bull with a bow and arrow and the word Bullseye! as the name of the logo" },
    { src: "image2.jpg", description: "Image 2 description" },
    { src: "image3.jpg", description: "Image 3 description" },
    { src: "image4.jpg", description: "Image 4 description" },
    { src: "image5.jpg", description: "Image 5 description" },
  ];

  var currentIndex = 0;

  var imgElement = document.getElementById("slideshow-img");
  var descElement = document.getElementById("image-description");
  var prevButton = document.getElementById("prev");
  var nextButton = document.getElementById("next");

  var updateSlide = () => {
    imgElement.src = images[currentIndex].src;
    descElement.textContent = images[currentIndex].description;
  };

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  });

  updateSlide(); // Initialize the slideshow
});
