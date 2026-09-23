document.addEventListener('DOMContentLoaded', function() {
    
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
        }
    });

    // Team Swiper Slider
    const teamSwiper = new Swiper('.teamSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.team-next',
            prevEl: '.team-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });

    // Testimonials Swiper Slider
    const testiSwiper = new Swiper('.testiSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.testi-pagination',
            clickable: true,
        }
    });

    // FAQ Accordion

  // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const body = item.querySelector('.accordion-body');
            
            // Close others
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-body').style.display = 'none';
                }
            });

            // Toggle current
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                body.style.display = 'none';
            } else {
                item.classList.add('active');
                body.style.display = 'block';
            }
        });
    });

    // Simple Tab Switching logic for About Us Section
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab-btn.active').classList.remove('active');
            tab.classList.add('active');
            // In a full multi-tab build, you'd swap content based on index. 
            // Since screenshots only showed one list, we just highlight the button for UI demo.
        });
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '90px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
        }
    });

});