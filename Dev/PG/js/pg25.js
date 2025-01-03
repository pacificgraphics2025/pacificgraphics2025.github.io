document.addEventListener('scroll', function () {
    const highlights = document.querySelectorAll('.highlight-red, .highlight-green, .highlight-blue');
    highlights.forEach((highlight) => {
        const rect = highlight.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            highlight.classList.add('active');
        }
    });
});