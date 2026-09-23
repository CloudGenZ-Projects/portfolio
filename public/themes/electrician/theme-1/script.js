document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar Logic
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 2. Initialize Hero Swiper (Main Banner)
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        effect: 'fade', // Premium fade effect
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // 3. Initialize Tools/Shop Swiper (Carousel)
    const toolSwiper = new Swiper('.toolSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.tool-next',
            prevEl: '.tool-prev',
        },
        pagination: {
            el: '.tools-pagination',
            clickable: true,
        },
        breakpoints: {
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });

    // 4. Initialize Testimonials Swiper
    const testSwiper = new Swiper('.testSwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: { 
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.test-pagination',
            clickable: true,
        }
    });

    // 5. FAQ Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-content').style.maxHeight = null;
                i.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            });

            // If it wasn't open, open it
            if (!isOpen) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
                item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
            }
        });
    });

    // 6. Basic Project Filter (Visual Toggle)
    const filterTabs = document.querySelectorAll('.filter-tabs li');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.filter-tabs li.active').classList.remove('active');
            tab.classList.add('active');
        });
    });

});