// Throttled scroll handler for better performance
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateNavHighlight();
            ticking = false;
        });
        ticking = true;
    }
});

function updateNavHighlight() {
    let current = "";
    const scrollPos = pageYOffset + 300; // Offset for better detection

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Find the section that's closest to the top of viewport
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    navLinkElements.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");
        if (linkHref === "#" + current) {
            link.classList.add("active");
        }
    });
}

// Highlight nav link on scroll
const sections = document.querySelectorAll("section");
const navLinkElements = document.querySelectorAll(".nav-links a");

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

function toggleMenu() {
    mobileMenuBtn.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

function closeMenu(e) {
    if (e.target.tagName === 'A') {
        mobileMenuBtn.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

mobileMenuBtn.addEventListener('click', toggleMenu);
navLinksContainer.addEventListener('click', closeMenu);

// Service box expansion functionality
document.addEventListener('DOMContentLoaded', function () {
    let outsideClickHandler = null;

    // Function to close all service boxes
    function closeAllBoxes() {
        const currentServiceBoxes = document.querySelectorAll('.service-box');
        currentServiceBoxes.forEach(box => {
            box.classList.remove('expanded');
        });
    }

    // Function to check if device is mobile/touch
    function isMobileDevice() {
        return window.innerWidth <= 768 ||
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0);
    }

    // Add click handlers for mobile devices
    function setupMobileInteraction() {
        const serviceBoxes = document.querySelectorAll('.service-box');

        // Remove existing outside click handler
        if (outsideClickHandler) {
            document.removeEventListener('click', outsideClickHandler);
            outsideClickHandler = null;
        }

        if (isMobileDevice()) {
            // Remove any existing event listeners by cloning nodes
            serviceBoxes.forEach(box => {
                const newBox = box.cloneNode(true);
                box.parentNode.replaceChild(newBox, box);
            });

            // Re-query the service boxes after cloning
            const newServiceBoxes = document.querySelectorAll('.service-box');

            newServiceBoxes.forEach(box => {
                box.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    const isCurrentlyExpanded = this.classList.contains('expanded');

                    // Close all boxes first
                    closeAllBoxes();

                    // If this box wasn't expanded, expand it
                    if (!isCurrentlyExpanded) {
                        this.classList.add('expanded');
                    }
                });
            });

            // Create and store the outside click handler
            outsideClickHandler = function (e) {
                if (!e.target.closest('.service-box')) {
                    closeAllBoxes();
                }
            };

            // Add the outside click handler
            document.addEventListener('click', outsideClickHandler);

            // Add mobile-specific class to body for CSS targeting
            document.body.classList.add('mobile-device');
        } else {
            // Remove mobile class for desktop
            document.body.classList.remove('mobile-device');

            // Remove expanded classes on desktop
            closeAllBoxes();
        }
    }

    // Initial setup
    setupMobileInteraction();

    // Debounced resize handler
    function handleResize() {
        setupMobileInteraction();
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
});
