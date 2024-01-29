carouselImages = document.querySelectorAll('[carousel]');
if (carouselImages.length > 0) {
    setInterval(function() {
        for (var i = 0; i < carouselImages.length; i++) {
            let carouselValue = carouselImages[i].getAttribute('carousel'); // Will be a number, the max number of images in the carousel
            let currentImage = carouselImages[i].getAttribute('src');
            let fileExtension = currentImage.slice(-4);
            let currentImageNumber = parseInt(currentImage.slice(-5, -4));
            let nextImageNumber = (currentImageNumber + 1) % carouselValue;
            let nextImage = currentImage.slice(0, -5) + nextImageNumber +  fileExtension;
            carouselImages[i].setAttribute('src', nextImage);
        }
    }, 3000);
}

colorText = document.querySelectorAll('[color]');
if (colorText.length > 0) {
    for (var i = 0; i < colorText.length; i++) {
        let colorValue = colorText[i].innerHTML
        colorText[i].innerHTML += '<div style="background-color: ' + colorValue + '; width: 1em; height: 1em; display: inline-block; margin-left: 0.25em;"></div>';
    }
}

document.getElementsByClassName("md-copyright")[0].innerHTML += " | And styled with <a href=\"https://github.com/catppuccin/catppuccin\" target=\"_blank\">Catppuccin</a>"; 
