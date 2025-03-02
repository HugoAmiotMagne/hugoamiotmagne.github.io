document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("projectsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project-item");
    let index = 0;
    const visibleProjects = 3;

    function updateCarousel() {
        const offset = -(index * (100 / visibleProjects)) + "%";
        carouselContainer.style.transform = `translateX(${offset})`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % projects.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + projects.length) % projects.length;
        updateCarousel();
    });

    document.getElementById("currentYear").textContent = new Date().getFullYear();
});