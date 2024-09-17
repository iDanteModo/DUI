import "./styles/style.css";

function menu() {
  const menuButton = document.getElementById("menuButton");
  const dropDownMenu = document.getElementById("dropDownMenu");

  menuButton.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("visible")) {
      dropDownMenu.classList.remove("visible");
      dropDownMenu.classList.add("hidden");
    } else {
      dropDownMenu.classList.remove("hidden");
      dropDownMenu.classList.add("visible");
    }
  });
}

function photoCarousel() {
  const photos = document.querySelectorAll("#photo");
  const slides = document.querySelectorAll("#slide");
  const nextPhoto = document.getElementById("nextPhoto");
  const prevPhoto = document.getElementById("prevPhoto");
  let index = 0; // Initialize to the starting position

  function updateDisplay() {
    // Remove 'photo' and 'selected' from all elements
    photos.forEach((photo) => photo.classList.remove("photo"));
    slides.forEach((slide) => slide.classList.remove("selected"));

    // Add 'noPhoto' and 'unselected' to all elements
    photos.forEach((photo) => photo.classList.add("noPhoto"));
    slides.forEach((slide) => slide.classList.add("unselected"));

    // Add 'photo' and 'selected' to the current photo and slide
    photos[index].classList.add("photo");
    slides[index].classList.add("selected");
  }

  nextPhoto.addEventListener("click", () => {
    // Increment index and wrap around if necessary
    index = (index + 1) % photos.length;
    updateDisplay();
  });

  prevPhoto.addEventListener("click", () => {
    // Decrement index and wrap around if necessary
    index = (index - 1 + photos.length) % photos.length;
    updateDisplay();
  });
}

menu();
photoCarousel();
