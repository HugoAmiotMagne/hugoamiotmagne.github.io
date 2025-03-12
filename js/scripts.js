document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("projectsWrapper");
    const projects = Array.from(document.querySelectorAll(".project-item"));
    let currentIndex = 0;
    const totalProjects = projects.length;

    // Duplique les premiers et derniers éléments pour un effet de boucle infinie
    projects.forEach((project) => {
        const clone = project.cloneNode(true);
        carousel.appendChild(clone);
    });

    projects.slice().reverse().forEach((project) => {
        const clone = project.cloneNode(true);
        carousel.prepend(clone);
    });

    // Ajuste la position initiale
    const projectWidth = projects[0].offsetWidth;
    let position = -totalProjects * projectWidth;
    carousel.style.transform = `translateX(${position}px)`;

    document.getElementById("nextBtn").addEventListener("click", function () {
        if (currentIndex >= totalProjects) {
            currentIndex = 0;
            position = -totalProjects * projectWidth;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${position}px)`;
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out";
                slideNext();
            }, 50);
        } else {
            slideNext();
        }
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        if (currentIndex <= 0) {
            currentIndex = totalProjects;
            position = -totalProjects * projectWidth * 2;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${position}px)`;
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out";
                slidePrev();
            }, 50);
        } else {
            slidePrev();
        }
    });

    function slideNext() {
        currentIndex++;
        position -= projectWidth;
        carousel.style.transform = `translateX(${position}px)`;
    }

    function slidePrev() {
        currentIndex--;
        position += projectWidth;
        carousel.style.transform = `translateX(${position}px)`;
    }
});
