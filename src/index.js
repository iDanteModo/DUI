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
    const photos = document.querySelectorAll('#photo');
    const nextButton = document.getElementById('changePhoto');
    const previousButton = document.getElementById('changePhotoPrevious');
    const slides = document.querySelectorAll('#slide');
    let indexNext = 1;
    let indexPrev = photos.length -1 ;
    console.log(photos.length);

    nextButton.addEventListener('click', () => {
        photos.forEach(photo => photo.classList.add('noPhoto'));
        slides.forEach(slide => slide.classList.add('unselected'));
        if(indexNext < photos.length) {
        photos.forEach(photo => photo.classList.remove('photo'));
        slides.forEach(slide => slide.classList.remove('selected'));
        photos[indexNext].classList.add('photo');
        slides[indexNext].classList.add('selected');
        indexNext++;
        } else {
            indexNext = 0;
            photos.forEach(photo => photo.classList.remove('photo'));
            slides.forEach(slide => slide.classList.remove('selected'));
            slides.forEach(slide => slide.classList.add('unselected'));
            photos[indexNext].classList.add('photo');
            slides[indexNext].classList.add('selected');
            indexNext ++;
        }
    })  

    previousButton.addEventListener('click', () => {
        photos.forEach(photo => photo.classList.add('noPhoto'));
        slides.forEach(slide => slide.classList.add('unselected'));
        if(indexPrev >= 0) {
        photos.forEach(photo => photo.classList.remove('photo'));
        slides.forEach(slide => slide.classList.remove('selected'));
        photos[indexPrev].classList.add('photo');
        slides[indexPrev].classList.add('selected');
        indexPrev--;
        console.log(indexPrev);
        } else {
            indexPrev = photos.length - 1;
            photos.forEach(photo => photo.classList.remove('photo'));
            slides.forEach(slide => slide.classList.remove('selected'));
            slides.forEach(slide => slide.classList.add('unselected'));
            photos[indexPrev].classList.add('photo');
            slides[indexPrev].classList.add('selected');
            indexPrev --;
            console.log(indexPrev);
        }
    })  
}

menu();
photoCarousel();
