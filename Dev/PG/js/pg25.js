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
    
    if (currentScroll > lastScrollTop) {
        // 向下滾動時隱藏
        announcement.style.display = "none"; 
    } else {
        // 向上滾動時顯示
        announcement.style.display = "block"; 
    }
    lastScrollTop = currentScroll;
});
