const images = document.querySelectorAll('.background-container img');
let currentIndex = 0;

function rotateBackground() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(rotateBackground, 5000); // Change image every 5 seconds
