// Efeito hover suave
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.querySelector('img').style.transform = 'scale(1.05)';
    });
    
    project.addEventListener('mouseleave', () => {
        project.querySelector('img').style.transform = 'scale(1)';
    });
});
