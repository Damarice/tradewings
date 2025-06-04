document.addEventListener('DOMContentLoaded', function() {
    // Loading Overlay
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none'; // Hide loading overlay after page loads
    }

    // Animate on Scroll Function
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    }

    // Helper function to check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Event listener for scroll
    window.addEventListener('scroll', animateOnScroll);

    // Initial check when the page loads
    animateOnScroll();
});
