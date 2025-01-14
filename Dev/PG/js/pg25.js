document.addEventListener('scroll', function () {
    const highlights = document.querySelectorAll('.highlight-red, .highlight-green, .highlight-blue');
    highlights.forEach((highlight) => {
        const rect = highlight.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            highlight.classList.add('active');
        }
    });
});

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    const announcement = document.getElementById("announcement");
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll === 0) {
        announcement.style.display = "block";
    } else if (currentScroll > lastScrollTop) {
        announcement.style.display = "none";
    } else {
        announcement.style.display = "block";
    }
    
    lastScrollTop = currentScroll;
    console.log(currentScroll);
});
