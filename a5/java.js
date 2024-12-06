  var images = [
    { src: "https://raw.githubusercontent.com/akimkhabibullin/dev109/refs/heads/main/m05/images/bullseye%20image.png", description: "This image shows a logo of a Bull with a bow and arrow and the word Bullseye! as the name of the logo" },
    { src: "https://raw.githubusercontent.com/akimkhabibullin/dev109/refs/heads/main/finalp1/images/artifact3.png", description: "Image 2 description" },
    { src: "https://raw.githubusercontent.com/akimkhabibullin/dev109/refs/heads/main/finalp1/images/artifact4.png", description: "Image 3 description" },
    { src: "https://raw.githubusercontent.com/akimkhabibullin/dev109/refs/heads/main/finalp1/images/m8.png", description: "Image 4 description" },
    { src: "https://raw.githubusercontent.com/akimkhabibullin/dev109/refs/heads/main/finalp1/images/m9.png", description: "Image 5 description" },
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
