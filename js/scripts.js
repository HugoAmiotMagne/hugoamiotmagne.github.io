document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("projectsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project-item");

    let index = 0; // Position actuelle du carrousel
    const projectWidth = projects[0].offsetWidth; // Largeur d'un projet
    const totalProjects = projects.length;
    
    function updateCarousel() {
        const offset = -(index * projectWidth) + "px";
        carouselContainer.style.transform = `translateX(${offset})`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalProjects - 1) { // Évite de dépasser le dernier projet
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) { // Empêche de reculer avant le premier projet
            index--;
            updateCarousel();
        }
    });

    // Mettre à jour l'année dans le footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});
