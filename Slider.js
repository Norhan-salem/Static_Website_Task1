let slideIndex = 0;

function moveSlide(n) {

    if (!(slideIndex === 0 && n < 0)) {
        slideIndex += n;
    }

    let slides = document.getElementById('slides');
    let polaroids = slides.querySelectorAll('.polaroid');

    if (slideIndex >= polaroids.length - 4) { 
        slideIndex = 0; 
    } 
    
    else if (slideIndex < 0) { 
        slideIndex = polaroids.length - 1; 
    }

    slides.style.transform = `translateX(-${slideIndex * 50}%)`;

}


