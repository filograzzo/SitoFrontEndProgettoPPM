import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

/*Fixa in alto solo la navbar-over-header dopo lo scorrimento*/
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    var img = document.querySelector(".logo-nascosto-mn");
    var primaryNav = document.querySelector(".primary-navbar");
    var secondaryNav = document.querySelector(".secondary-navbar");
    var siteContent = document.querySelector(".site-content");

    function adjustSiteContentMargin() {
        if (navbar.classList.contains("fixed-top")) {
            var navbarHeight = navbar.offsetHeight;
            siteContent.style.marginTop = navbarHeight + 50 + "px";
        } else {
            siteContent.style.marginTop = "0";
        }
    }

    window.addEventListener("scroll", function() {
        var scrollPos = window.scrollY;

        if (scrollPos > 100) {
            navbar.classList.add("fixed-top");
            img.classList.remove("invisibile");
            primaryNav.classList.add("hidden");
            secondaryNav.classList.add("hidden");
        } else {
            navbar.classList.remove("fixed-top");
            img.classList.add("invisibile");
            primaryNav.classList.remove("hidden");
            secondaryNav.classList.remove("hidden");
        }

        adjustSiteContentMargin();
    });

    // Chiamata iniziale per regolare il margine del contenuto del sito all'avvio
    adjustSiteContentMargin();
});


/*Far scomparire la barra gialla quando clicco sulla x*/
document.getElementById('closeBtn').addEventListener('click', function() {
    // Seleziona la sezione da nascondere
    var sectionToHide = document.querySelector('.top-yellow-bar');
    // Aggiungi la classe 'hidden' per nascondere la sezione
    sectionToHide.classList.add('hidden');
});

/*La griglia del quarto blocco inizialmente nascosta compare al toccare il bottone*/
document.addEventListener("DOMContentLoaded", function() {
    const showPhotosButtons = document.getElementsByClassName("fourth-content-area-lower-block");
    const photosBlocks = document.getElementsByClassName("fourth-content-area-final-grid-block");

    // Itera attraverso ogni bottone e blocco delle foto
    for (let i = 0; i < showPhotosButtons.length; i++) {
        const showPhotosButton = showPhotosButtons[i];
        const photosBlock = photosBlocks[i];

        showPhotosButton.addEventListener("click", function(event) {
            event.preventDefault();
            photosBlock.style.display = "flex"; // Mostra il blocco delle foto
            showPhotosButton.style.display = "none"; // Nasconde il blocco del pulsante
        });
    }
});


/*Fa scorrere la galleria in fondo alla pagina*/
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slideWidth = slides[0].clientWidth;
    const numSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        gallery.style.transition = "transform 0.5s ease-in-out";
        gallery.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex-=6;
        }
        showSlide(currentIndex);
    }

    function nextSlide() {
        if (currentIndex < numSlides - 1) {
            currentIndex +=6;
        }
        showSlide(currentIndex);
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
});


/*Fare si che premendo le frecce nel footer scendano i link*/
document.addEventListener("DOMContentLoaded", function() {
    var titleSvgIcons = document.querySelectorAll(".footer-middle-part-columns-container-row-title-svg");

    titleSvgIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            var phrases = this.parentElement.parentElement.querySelectorAll(".footer-middle-part-columns-container-row-phrase");
            phrases.forEach(function(phrase) {
                if (phrase.style.display === "none") {
                    phrase.style.display = "block";
                } else {
                    phrase.style.display = "none";
                }
            });
        });
    });
});



