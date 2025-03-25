// Transição entre páginas
document.querySelectorAll('a').forEach(link => {
    if (link.href.includes(window.location.origin)) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            gsap.to('.transition-overlay', {
                scaleY: 1,
                transformOrigin: 'top',
                duration: 0.6,
                ease: 'power2.inOut',
                onComplete: () => {
                    window.location.href = href;
                }
            });
        });
    }
});

// Menu Hamburguer
const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

// Animação de Scroll (GSAP ScrollTrigger)
gsap.utils.toArray('.project').forEach(project => {
    gsap.from(project, {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1
    });
});

// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();
