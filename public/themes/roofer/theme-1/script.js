document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================================
       24 & 25. SKELETON SCREEN & RADIAL SHIELD LOADING ENGINE
       ========================================================================= */
    const pageLoader = document.getElementById('pageLoader');
    const loadBar = document.getElementById('loadBar');
    const loadPct = document.getElementById('loadPct');
    let loadProgress = 0;

    const loaderInterval = setInterval(() => {
        loadProgress += Math.floor(Math.random() * 14) + 6;
        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(loaderInterval);
            setTimeout(() => {
                if (pageLoader) pageLoader.classList.add('loaded');
                document.body.classList.remove('loading-state');
            }, 350);
        }
        if (loadBar) loadBar.style.width = `${loadProgress}%`;
        if (loadPct) loadPct.textContent = loadProgress;
    }, 45);

    /* =========================================================================
       12. CUSTOM MAGNETIC MICROINTERACTION CURSOR
       ========================================================================= */
    const cursor = document.getElementById('customCursor');
    const dot = document.getElementById('cursorDot');
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (!isTouch && cursor && dot) {
        window.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
        });

        const magneticTargets = document.querySelectorAll(
            '.magnetic-target, .layer-trigger, .swatch-btn, .seg-btn, .accordion-header, button, input, a'
        );

        magneticTargets.forEach((el) => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    /* =========================================================================
       17 & 20. LIQUID MOTION WEBGL STORM PARTICLE CANVAS
       ========================================================================= */
    const canvas = document.getElementById('liquidCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.min(width > 768 ? 65 : 30, 75);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: Math.random() * 1.5 + 0.5,
                radius: Math.random() * 2.5 + 1,
                alpha: Math.random() * 0.6 + 0.2
            });
        }

        function drawLiquid() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.y > height) {
                    p.y = 0;
                    p.x = Math.random() * width;
                }
                if (p.x > width) p.x = 0;
                if (p.x < 0) p.x = width;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
                ctx.fill();

                for (let j = i + 1; j < particleCount; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 110)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawLiquid);
        }
        drawLiquid();
    }

    /* =========================================================================
       HERO SLIDER CAROUSEL (GUARANTEED FUNCTIONAL)
       ========================================================================= */
    const slides = document.querySelectorAll('.hero-slide');
    const bullets = document.querySelectorAll('.dock-bullet');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    let activeSlideIndex = 0;
    let sliderTimer;

    function renderSlide(index) {
        slides.forEach(s => s.classList.remove('active-slide'));
        bullets.forEach(b => b.classList.remove('active'));

        activeSlideIndex = (index + slides.length) % slides.length;
        slides[activeSlideIndex].classList.add('active-slide');
        bullets[activeSlideIndex].classList.add('active');
        restartTimer();
    }

    function advanceSlide() {
        renderSlide(activeSlideIndex + 1);
    }

    function reverseSlide() {
        renderSlide(activeSlideIndex - 1);
    }

    function restartTimer() {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(advanceSlide, 6500);
    }

    if (slides.length > 0) {
        if (nextBtn) nextBtn.addEventListener('click', advanceSlide);
        if (prevBtn) prevBtn.addEventListener('click', reverseSlide);

        bullets.forEach(bullet => {
            bullet.addEventListener('click', () => {
                const targetIdx = parseInt(bullet.getAttribute('data-target'), 10);
                renderSlide(targetIdx);
            });
        });

        restartTimer();
    }

    /* =========================================================================
       14. FAUX-3D TILT EFFECT ON HERO PLATES
       ========================================================================= */
    const cards3D = document.querySelectorAll('.faux-3d-card');
    cards3D.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `rotateY(${x / 14}deg) rotateX(${-y / 14}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });

    /* =========================================================================
       13. INTERACTIVE CHARACTER MASCOT ASSISTANT
       ========================================================================= */
    const charAvatar = document.getElementById('charAvatar');
    const charBubble = document.getElementById('charBubble');
    const closeBubble = document.getElementById('closeBubble');
    const hints = [
        "Did you know? Class-4 shingles slash homeowner insurance rates by up to 28%!",
        "Click the 5-Layer tabs to watch the exploded 3D structural model shift!",
        "Need a fast estimate? Use our real-time pitch slider below.",
        "We are CertainTeed 5-Star Certified. 50-Year Non-Prorated coverage!"
    ];
    let hintIdx = 0;

    if (charAvatar && charBubble) {
        charAvatar.addEventListener('click', () => {
            hintIdx = (hintIdx + 1) % hints.length;
            const textTarget = charBubble.querySelector('.typing-text');
            if (textTarget) textTarget.textContent = hints[hintIdx];
            charBubble.style.display = 'block';
        });

        if (closeBubble) {
            closeBubble.addEventListener('click', (e) => {
                e.stopPropagation();
                charBubble.style.display = 'none';
            });
        }
    }

    /* =========================================================================
       19. ISOMETRIC 5-LAYER EXPLODER (GUARANTEED FUNCTIONAL)
       ========================================================================= */
    const layerTriggers = document.querySelectorAll('.layer-trigger');
    const isoBadge = document.getElementById('isoBadge');
    const isoTitle = document.getElementById('isoTitle');
    const isoDesc = document.getElementById('isoDesc');
    const isoSpecs = document.getElementById('isoSpecs');
    const plates = [
        document.getElementById('plate1'),
        document.getElementById('plate2'),
        document.getElementById('plate3'),
        document.getElementById('plate4'),
        document.getElementById('plate5')
    ];

    const layerIntelDatabase = [
        {
            badge: "LAYER 01: EXTERIOR DEFENSE",
            title: "ArmorShield Heavyweight SBS Architectural Shingles",
            desc: "Dual-mat composite saturated with SBS synthetic rubberized polymers. Resists hurricane microburst uplift up to 150 MPH and cushions severe ballistic hailstones.",
            specs: ["<i data-lucide='wind'></i> 150 MPH Lift Resistance", "<i data-lucide='shield'></i> Class 4 Impact", "<i data-lucide='flame'></i> Class A Fire"]
        },
        {
            badge: "LAYER 02: HIGH-TENSILE BARRIER",
            title: "Synthetic Micro-Weave Polypropylene Underlayment",
            desc: "Replaces outdated tar paper. Crafted with non-perishable woven polyolefin that will not rot, crack, or dissolve even under 180-day direct solar exposure.",
            specs: ["<i data-lucide='shield-check'></i> 25x Tear Resistance", "<i data-lucide='sun'></i> UV Resilient", "<i data-lucide='droplets'></i> 100% Inorganic"]
        },
        {
            badge: "LAYER 03: VULCANIZED LEAK SHIELD",
            title: "Elastomeric Bituminous Ice & Water Shield",
            desc: "Self-adhering modified asphalt membrane fused to eaves, valleys, and penetrations. Automatically self-seals around every fastener penetration.",
            specs: ["<i data-lucide='check'></i> Direct Wood Fusion", "<i data-lucide='lock'></i> Zero Valley Leaks", "<i data-lucide='snowflake'></i> Ice Dam Prevention"]
        },
        {
            badge: "LAYER 04: AIRFLOW DYNAMICS",
            title: "Balanced Kinetic Internal Ridge Venting",
            desc: "High-airflow external baffles create a vacuum effect that actively extracts super-heated summer air and moisture from attic rafters.",
            specs: ["<i data-lucide='wind'></i> Dynamic Negative Draft", "<i data-lucide='thermometer'></i> -18°F Attic Heat", "<i data-lucide='shield'></i> Rain Infiltration Baffle"]
        },
        {
            badge: "LAYER 05: STRUCTURAL SUBSTRATE",
            title: "5/8-Inch Heavy CDX Solid Deck Restoration",
            desc: "Every rotted or water-softened sheet is removed. Replaced with structural 5-ply CDX exterior plywood fastened with H-clips to prevent sagging.",
            specs: ["<i data-lucide='hammer'></i> 5/8-Inch Solid CDX", "<i data-lucide='maximize-2'></i> H-Clip Edge Lock", "<i data-lucide='check-circle'></i> Zero Nail Overdrive"]
        }
    ];

    layerTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const idx = parseInt(trigger.getAttribute('data-layer-idx'), 10);

            layerTriggers.forEach(t => t.classList.remove('active'));
            trigger.classList.add('active');

            plates.forEach((p, i) => {
                if (p) {
                    if (i === idx) {
                        p.classList.add('active-plate');
                    } else {
                        p.classList.remove('active-plate');
                    }
                }
            });

            const data = layerIntelDatabase[idx];
            if (data && isoTitle) {
                isoBadge.textContent = data.badge;
                isoTitle.textContent = data.title;
                isoDesc.textContent = data.desc;
                isoSpecs.innerHTML = data.specs.map(s => `<span class="spec-bubble">${s}</span>`).join('');
                if (window.lucide) lucide.createIcons();
            }
        });
    });

    /* =========================================================================
       COLORWAY CONFIGURATOR LOGIC
       ========================================================================= */
    const swatchBtns = document.querySelectorAll('.swatch-btn');
    const configImg = document.getElementById('configImg');
    const colorName = document.getElementById('colorName');
    const colorDesc = document.getElementById('colorDescription');

    if (swatchBtns.length > 0 && configImg) {
        swatchBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                swatchBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const newImg = btn.getAttribute('data-img');
                const newName = btn.getAttribute('data-name');
                const newDesc = btn.getAttribute('data-desc');

                configImg.style.opacity = '0';
                setTimeout(() => {
                    configImg.src = newImg;
                    if (colorName) colorName.textContent = newName;
                    if (colorDesc) colorDesc.textContent = newDesc;
                    configImg.style.opacity = '1';
                }, 200);
            });
        });
    }

    /* =========================================================================
       SEE THE DIFFERENCE: BEFORE / AFTER DUAL SLIDER
       ========================================================================= */
    const baSensor = document.getElementById('baSensor');
    const baClipAfter = document.getElementById('baClipAfter');
    const baDivider = document.getElementById('baDivider');

    if (baSensor && baClipAfter && baDivider) {
        baSensor.addEventListener('input', (e) => {
            const val = e.target.value;
            baClipAfter.style.clipPath = `inset(0 0 0 ${val}%)`;
            baDivider.style.left = `${val}%`;
        });
    }

    /* =========================================================================
       ESTIMATOR CALCULATOR
       ========================================================================= */
    const rangeSqft = document.getElementById('rangeSqft');
    const valSqft = document.getElementById('valSqft');
    const calcFinal = document.getElementById('calcFinal');
    const pitchBtns = document.querySelectorAll('.segmented-picker button[data-pitch]');
    const rateBtns = document.querySelectorAll('.segmented-picker button[data-rate]');

    let selectedPitch = 1.0;
    let selectedRate = 4.9;

    function recalculateTotal() {
        if (!rangeSqft || !calcFinal) return;
        const sqft = parseFloat(rangeSqft.value);
        if (valSqft) valSqft.textContent = `${sqft.toLocaleString()} SQ.FT`;

        const grandTotal = Math.round(sqft * selectedRate * selectedPitch);
        calcFinal.textContent = grandTotal.toLocaleString();
    }

    if (rangeSqft) {
        rangeSqft.addEventListener('input', recalculateTotal);

        pitchBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                pitchBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedPitch = parseFloat(btn.getAttribute('data-pitch'));
                recalculateTotal();
            });
        });

        rateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                rateBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedRate = parseFloat(btn.getAttribute('data-rate'));
                recalculateTotal();
            });
        });

        recalculateTotal();
    }

    /* =========================================================================
       ACCORDION SYSTEM
       ========================================================================= */
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');

        if (item.classList.contains('open') && body) {
            body.style.maxHeight = `${body.scrollHeight}px`;
        }

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            accordions.forEach(a => {
                a.classList.remove('open');
                const b = a.querySelector('.accordion-body');
                if (b) b.style.maxHeight = null;
            });

            if (!isOpen && body) {
                item.classList.add('open');
                body.style.maxHeight = `${body.scrollHeight}px`;
            }
        });
    });

    /* =========================================================================
       MOBILE NAVIGATION DRAWER
       ========================================================================= */
    const menuToggle = document.getElementById('menuToggle');
    const navCluster = document.getElementById('navCluster');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && navCluster) {
        menuToggle.addEventListener('click', () => {
            navCluster.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navCluster.classList.remove('active');
            });
        });
    }

    /* =========================================================================
       AUDIT FORM SUBMISSION
       ========================================================================= */
    const auditForm = document.getElementById('auditForm');
    if (auditForm) {
        auditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Inspection Protocol Initiated! A certified drone diagnostic pilot will confirm your property window within 2 hours.');
            auditForm.reset();
        });
    }
});