function openModal() {
  document.getElementById("m1").style.display = "block";
}

function closeModal() {
  document.getElementById("m1").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function countSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var captionText = document.getElementById("caption");
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  var img = slides[slideIndex-1].getElementsByTagName("img")[0];
  captionText.innerHTML = img ? img.alt : "";
}