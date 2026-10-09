document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. IMMERSIVE CUSTOM CURSOR
       ========================================================================== */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    // Elements that trigger cursor expansion
    const interactives = document.querySelectorAll('a, button, .bento-card, .slider-input');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Immediate snap for inner dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Smooth follow for outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 400, fill: "forwards" });
    });

    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
    });

    /* ==========================================================================
       2. 3D BENTO TILT PHYSICS ENGINE (Spatial UI)
       ========================================================================== */
    const tiltElements = document.querySelectorAll('.bento-tilt');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            // Get mouse position relative to center of element
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Adjust multiplier for extreme/subtle tilt
            const rotateX = ((y - centerY) / centerY) * -8; 
            const rotateY = ((x - centerX) / centerX) * 8;
            
            // Apply CSS3D transforms
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            el.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 50px rgba(42, 59, 50, 0.15)`;
        });

        // Reset on mouse leave
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            el.style.boxShadow = 'var(--shadow-soft)';
            el.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        });

        el.addEventListener('mouseenter', () => {
            el.style.transition = 'none'; // Snap to mouse instantly on entry
        });
    });

    /* ==========================================================================
       3. IN-DEPTH CASE STUDY ENGINE (Before / After Slider)
       ========================================================================== */
    const sliders = document.querySelectorAll('.before-after-slider');

    sliders.forEach(slider => {
        const input = slider.querySelector('.slider-input');
        const beforeImgContainer = slider.querySelector('.image-before');
        const beforeImg = beforeImgContainer.querySelector('img');
        const sliderLine = slider.querySelector('.slider-line');
        
        // Dynamically fix the before image width so it doesn't squish when container shrinks
        const fixImageWidth = () => {
            const sliderWidth = slider.offsetWidth;
            beforeImg.style.width = `${sliderWidth}px`;
        };
        
        // Initial call and listener for resize
        fixImageWidth();
        window.addEventListener('resize', fixImageWidth);

        // Input event fires when user drags the range slider
        input.addEventListener('input', (e) => {
            const sliderValue = e.target.value; // 0 to 100
            
            // Adjust the width of the before image container to reveal the after image underneath
            beforeImgContainer.style.width = `${sliderValue}%`;
            
            // Move the visual slider line & button
            sliderLine.style.left = `${sliderValue}%`;
        });
    });

    /* ==========================================================================
       4. SCROLL REVEAL & SaaS NUMBER METRICS
       ========================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in section
                entry.target.classList.add('is-visible');
                
                // Trigger Number Counters inside this section
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                if (statNumbers.length > 0) {
                    animateNumbers(statNumbers);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.observer-section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Number Counting Animation function
    function animateNumbers(elements) {
        elements.forEach(el => {
            const target = +el.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // assume 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    el.innerText = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    el.innerText = target.toLocaleString() + '+';
                }
            };
            updateCounter();
        });
    }

    /* ==========================================================================
       5. NATURE PARTICLE SYSTEM (Optimized DOM Generation)
       ========================================================================== */
    const canvas = document.getElementById('particle-canvas');
    const particleCount = 20; // Subtle aesthetic, avoids DOM bloat

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomizations
        const size = Math.random() * 6 + 3; // 3px to 9px
        const posX = Math.random() * 100; // vw
        const duration = Math.random() * 15 + 10; // 10s to 25s
        const delay = Math.random() * 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;
        
        canvas.appendChild(particle);
        
        // Loop by recreating when animation ends
        particle.addEventListener('animationend', () => {
            particle.remove();
            createParticle();
        });
    }

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
});