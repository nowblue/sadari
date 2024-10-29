const pyramids = document.querySelectorAll(".pyr");

pyramids.forEach((pyramid) => {
    pyramid.addEventListener("mouseenter", () => {
        pyramids.forEach((otherPyramid) => {
            if (otherPyramid !== pyramid) {
                otherPyramid.src = otherPyramid.getAttribute("data-hover");
            }
        });
    });

    pyramid.addEventListener("mouseleave", () => {
        pyramids.forEach((otherPyramid) => {
            if (otherPyramid !== pyramid) {
                otherPyramid.src = otherPyramid.getAttribute("data-original");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const page5 = document.querySelector(".page5");
    const overlay = document.querySelector(".gradation-overlay");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                overlay.style.opacity = 1;
            } else {
                overlay.style.opacity = 0;
            }
        });
    }, { threshold: 0.1 });

    observer.observe(page5);
});