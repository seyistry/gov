"use strict";

document.addEventListener("DOMContentLoaded", function() {
    /*  =====================================================
            STORIES SLIDER
        ===================================================== */

    var storiesSlider = new Swiper(".stories-slider", {
        slidesPerView: 1,
        spaceBetween: 0,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /*  =====================================================
            TESTIMONIALS SLIDER
        ===================================================== */
    var testimonialsSlider = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /*  =====================================================
            CHANGING NAVBAR STYLING ON SCROLL
        ===================================================== */

    const navbar = document.querySelector(".navbar"),
        navbarBtns = document.querySelectorAll(".navbar-btn"),
        navbarLinks = document.querySelectorAll(".navbar .nav-link"),
        mobileNavMenu = document.querySelector(".navbar-collapse"),
        mobileNavToggler = document.querySelector(".navbar-toggler");

    window.addEventListener("scroll", function() {
        if (document.scrollingElement.scrollTop >= 1) {
            navbar.classList.replace("navbar-dark", "navbar-light");
            navbar.classList.add("navbar-active");
            navbarBtns.forEach((navbarBtn) => {
                navbarBtn.classList.replace("btn-outline-light", "btn-primary");
            });
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("text-shadow-sm");
            });
        } else {
            navbar.classList.replace("navbar-light", "navbar-dark");
            navbar.classList.remove("navbar-active");
            mobileNavMenu.classList.remove("show");
            mobileNavToggler.classList.remove("collapsed");
            navbarBtns.forEach((navbarBtn) => {
                navbarBtn.classList.replace("btn-primary", "btn-outline-light");
            });
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.add("text-shadow-sm");
            });
        }
    });

    /*  =====================================================
            BOOSTRAP 5 SCROLSPY
        ===================================================== */

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
        offset: 80,
    });

    /*  =====================================================
            GLIGHTBOX
        ===================================================== */

    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
    });

    /*  =====================================================
            SHOW/HIDE NAVBAR ON SCROLLING
        ===================================================== */

    let c = 0,
        currentScrollTop = 0,
        navigation = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        let a = document.body.parentNode.scrollTop;
        let b = navigation.offsetHeight;

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navigation.classList.add("scrollUp");
            mobileNavToggler.classList.remove("collapsed");
            mobileNavMenu.classList.remove("show");
        } else if (c > currentScrollTop && !(a <= b)) {
            navigation.classList.remove("scrollUp");
        }
        c = currentScrollTop;
    });

    /*  =====================================================
            CHANGE NAVBAR STYLE ON MOBILE WHEN OPEN NAVIGATION MENU
        ===================================================== */

    mobileNavToggler.addEventListener("click", function() {
        if (mobileNavToggler.className != "collapsed") {
            navigation.classList.add("navbar-active");
            navbar.classList.replace("navbar-dark", "navbar-light");
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("text-shadow-sm");
            });
        }
    });

    /*  =====================================================
            HIDE FORM LABEL DURING TYPING
        ===================================================== */

    const customInputs = document.querySelectorAll(".form-control-material"),
        customForms = document.querySelectorAll("form");

    customInputs.forEach((customInput) => {
        customInput.addEventListener("input", function() {
            if (customInput.value != "") {
                this.classList.add("active");
            } else {
                this.classList.remove("active");
            }
        });
    });

    /*  =====================================================
            BOOTSTRAP VALIDATION
        ===================================================== */

    // Example starter JavaScript for disabling form submissions if there are invalid fields

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
            "submit",
            function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
});