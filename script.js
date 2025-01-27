const images = document.querySelectorAll('.background-container img');
let currentIndex = 0;
const textElement = document.querySelector('.content'); // The text container

function rotateBackground() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');

    // After the image is set as active, check its brightness and update text color
    adjustTextColor(images[currentIndex]);
}

function adjustTextColor(image) {
    // Create a canvas to analyze the image's pixels
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match the image
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    
    // Draw the image on the canvas
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    
    // Get image data (pixel data)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let r = 0, g = 0, b = 0;

    // Calculate the average color of the image
    for (let i = 0; i < pixels.length; i += 4) {
        r += pixels[i];     // Red
        g += pixels[i + 1]; // Green
        b += pixels[i + 2]; // Blue
    }

    r = r / (pixels.length / 4);
    g = g / (pixels.length / 4);
    b = b / (pixels.length / 4);

    // Calculate luminance using the formula
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // If luminance is low, set text color to white (for dark backgrounds), else black
    textElement.style.color = luminance < 128 ? 'white' : 'black';
}

// Change image every 20 seconds
const intervalId = setInterval(rotateBackground, 20000);

// Optionally, clear the interval when the user navigates away
window.addEventListener('beforeunload', () => {
    clearInterval(intervalId);
});
