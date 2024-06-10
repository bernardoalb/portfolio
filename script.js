let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Muda a imagem a cada 4 segundos
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    } else if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    showSlides();
}
