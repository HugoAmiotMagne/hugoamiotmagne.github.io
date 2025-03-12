document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("projectsWrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const projects = document.querySelectorAll(".project-item");
    
    let index = 0;
    const visibleProjects = 3;
    const totalProjects = projects.length;
    const projectWidth = projects[0].offsetWidth; 

    function updateCarousel() {
        const offset = -(index * projectWidth) + "px";
        carouselContainer.style.transform = `translateX(${offset})`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalProjects - visibleProjects) {
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

    document.getElementById("currentYear").textContent = new Date().getFullYear();
});
