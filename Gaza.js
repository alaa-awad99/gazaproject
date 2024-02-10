let currentImageIndex = 0;
const images = document.querySelectorAll('.image-container img');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initial display
showImage(currentImageIndex);
function changeLanguage() {
    const languageSelect = document.getElementById("languageSelect");
    const selectedLanguage = languageSelect.value;

    document.documentElement.lang = selectedLanguage;
}

// email 


