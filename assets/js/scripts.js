document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("projectsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project-item");
    let index = 0;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(${-(index * 100)}%)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % projects.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + projects.length) % projects.length;
        updateCarousel();
    });
});
