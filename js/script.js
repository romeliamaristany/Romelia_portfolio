
//POP-UP (PROJECT-INFO)
document.addEventListener('DOMContentLoaded', () => {
    const projectShadows = document.querySelectorAll('.project-shadow');
    const projectInfos = document.querySelectorAll('.project-info');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Function to close all pop-ups
    const closeAllPopups = () => {
        projectInfos.forEach(info => {
            info.classList.remove('show');
        });
    };

    // Show pop-up
    projectShadows.forEach((shadow, index) => {
        shadow.addEventListener('click', (event) => {
            closeAllPopups(); // Close any open pop-ups
            document.querySelector(`.info${index + 1}`).classList.add('show');
            event.stopPropagation(); // Stop event from propagating to document
        });
    });

    // Close pop-up when you click the close icon
    closeBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            document.querySelector(`.info${index + 1}`).classList.remove('show');
        });
    });

    // Close pop-up when you scroll
    window.addEventListener('scroll', () => {
        closeAllPopups();
    });

    // Close pop-up when you click outside of it
    document.addEventListener('click', (event) => {
        const isClickInside = Array.from(projectInfos).some(info => info.contains(event.target));
        if (!isClickInside) {
            closeAllPopups();
        }
    });

    // Prevent clicks inside the pop-up from closing it
    projectInfos.forEach(info => {
        info.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});


//SCROLL REVEAL
document.addEventListener('DOMContentLoaded', ()=>{
    ScrollReveal().reveal('.service-box', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out',
        reset: true
    });
    ScrollReveal().reveal('.projects', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out',
        reset: true
    });
    ScrollReveal().reveal('.progress-bar', {
        duration: 1000,
        origin: 'left',
        distance: '100px',
        easing: 'ease-out',
        reset: true
    });
    ScrollReveal().reveal('.box-shadow-full', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out',
        reset: true
    });
    
});