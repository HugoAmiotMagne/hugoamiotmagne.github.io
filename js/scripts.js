document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("projectsWrapper");
    const projects = document.querySelectorAll(".project-item");
    let currentIndex = 0;

    document.getElementById("nextBtn").addEventListener("click", function () {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Revient au début
        }
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = projects.length - 1; // Va à la fin
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});
