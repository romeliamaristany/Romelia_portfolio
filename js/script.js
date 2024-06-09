document.addEventListener('DOMContentLoaded', ()=>{
    const projectShadows = document.querySelectorAll('.project-shadow');
    const projectInfos = document.querySelectorAll('.project-info');
    const closeBtns = document.querySelectorAll('.close-btn');

    projectShadows.forEach((shadow, index)=>{
        shadow.addEventListener('click', ()=>{
        
            document.querySelector(`.info${index + 1}`).classList.add('show');
        });
    });

    closeBtns.forEach((button, index)=>{
        button.addEventListener('click', ()=> {
          
            document.querySelector(`.info${index + 1}`).classList.remove('show');
        });
    });

    window.addEventListener('scroll', ()=> {
        projectInfos.forEach(info => {
            info.classList.remove('show')
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
    ScrollReveal().reveal('.download-icon', {
        duration: 500,
        origin: 'bottom',
        distance: '10px',
        easing: 'ease-out',
        reset: false,
        afterReveal: function (el){
            el.classList.add('visible');
        }
    });
    ScrollReveal().reveal('.box-shadow-full', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-out',
        reset: true
    });
    
});