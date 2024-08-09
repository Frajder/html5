document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function cycleItems() {
        const currentItem = items[currentIndex];
        currentItem.classList.remove('active');

        currentIndex = (currentIndex + 1) % items.length;
        const nextItem = items[currentIndex];
        nextItem.classList.add('active');
    }

    setInterval(cycleItems, 3000); // Change slide every 3 seconds
});