const images = document.querySelectorAll('.background-container img');
let currentIndex = 0;

function rotateBackground() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Change image every 5 seconds
const intervalId = setInterval(rotateBackground, 5000);

// Optionally, clear the interval when the user navigates away
window.addEventListener('beforeunload', () => {
    clearInterval(intervalId);
});
