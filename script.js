document.addEventListener('DOMContentLoaded', () => {
    const glowBackground = document.querySelector('.glow-background');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        // Apply easing to make the movement smooth and slow
        glowX += (mouseX - glowX) * 0.025;
        glowY += (mouseY - glowY) * 0.025;

        glowBackground.style.left = `${glowX}px`;
        glowBackground.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);
    }

    animateGlow();

    // Handling the button click to show the features list
    const featuresButton = document.getElementById('featuresButton');
    const featuresList = document.getElementById('featuresList');
    const listItems = featuresList.querySelectorAll('li');

    featuresButton.addEventListener('click', () => {
        // Make the list visible with a smooth opacity transition
        featuresList.style.opacity = '1';
        
        // Animate each list item to fade in sequentially
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 150); // Adjust the delay between items if needed
        });
    });
});
