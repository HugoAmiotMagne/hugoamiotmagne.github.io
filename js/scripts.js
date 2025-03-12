document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("projectsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project-item");

    let index = 0; // Position actuelle
    const projectWidth = projects[0].offsetWidth + 20; // Largeur + marge (ajuste selon ton CSS)
    const totalProjects = projects.length;

    function updateCarousel() {
        const offset = -(index * projectWidth) + "px";
        carouselContainer.style.transform = `translateX(${offset})`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalProjects - 1) { 
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) { 
            index--;
            updateCarousel();
        }
    });
});
