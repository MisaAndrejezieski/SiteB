document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.querySelector('.wheel-container');
    const items = document.querySelectorAll('.project-wheel-item');
    const cursor = document.querySelector('.cursor-circle');
    let rotation = 0;

    // Atualiza posição dos itens
    function updateWheel() {
        items.forEach(item => {
            const angle = parseInt(item.dataset.angle) + rotation;
            const rad = angle * (Math.PI / 180);
            const radius = 300;
            
            const x = Math.sin(rad) * radius;
            const y = -Math.cos(rad) * radius;
            
            item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)`;
            item.style.opacity = angle % 360 < 90 || angle % 360 > 270 ? 1 : 0.3;
        });
    }

    // Controle pela rodinha do mouse
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        rotation += e.deltaY * 0.2;
        updateWheel();
    });

    // Cursor personalizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    updateWheel();
});
