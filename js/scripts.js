document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("projectsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project-item");

    let index = 0; 
    const projectWidth = projects[0].offsetWidth + 20;
    const totalProjects = projects.length;

    function updateCarousel() {
        const offset = -(index * projectWidth) + "px";
        carouselContainer.style.transform = `translateX(${offset})`;

        prevBtn.style.opacity = index === 0 ? "0.5" : "1";
        nextBtn.style.opacity = index === totalProjects - 1 ? "0.5" : "1";
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

    updateCarousel();
});
