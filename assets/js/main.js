// Transições entre páginas
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.href && !link.href.includes('#')) {
            e.preventDefault();
            
            gsap.to('.transition-overlay', {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                duration: 0.8,
                onComplete: () => {
                    window.location.href = link.href;
                }
            });
        }
    });
});

// Menu Hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });
}

// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();
