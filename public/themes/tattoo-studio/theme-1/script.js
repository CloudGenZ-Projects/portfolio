document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. SCROLL PROGRESS BAR
     ------------------------------------------------------------------------ */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;

    // Add glass blur enhancement to navbar on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  /* ------------------------------------------------------------------------
     2. SPRING-PHYSICS CUSTOM CURSOR
     ------------------------------------------------------------------------ */
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (window.innerWidth > 768 && cursor && follower) {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let followerX = mouseX, followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    function renderCursor() {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactiveTargets = document.querySelectorAll(
      'a, button, input, select, textarea, .style-card, .gallery-item, .chip, .faq-item, .pricing-card, .artist-card'
    );
    interactiveTargets.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    });
  }

  /* ------------------------------------------------------------------------
     3. 3D CARD TILT EFFECT (FOR MASTER ARTISTS & PRICING)
     ------------------------------------------------------------------------ */
  const tiltCards = document.querySelectorAll('.artist-card, .pricing-card, .workflow-step-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 1024) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ------------------------------------------------------------------------
     4. INTERSECTION OBSERVER (REVEAL ANIMATIONS)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     5. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('navLinks');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'flex';
      mainNav.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '82px';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.background = 'rgba(7, 7, 10, 0.98)';
        mainNav.style.padding = '2.5rem 2rem';
        mainNav.style.borderBottom = '1px solid var(--border-gold)';
        mainNav.style.gap = '1.5rem';
        mainNav.style.backdropFilter = 'blur(16px)';
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mainNav.style.display = 'none';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. PORTFOLIO FILTERING
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const categories = item.getAttribute('data-category');
        if (filterVal === 'all' || categories.includes(filterVal)) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s var(--ease-spring)';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     7. LIGHTBOX MODAL DIALOG
     ------------------------------------------------------------------------ */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalArtist = document.getElementById('modalArtist');
  const modalPlacement = document.getElementById('modalPlacement');
  const modalSize = document.getElementById('modalSize');
  const modalTag = document.getElementById('modalTag');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      const artist = item.getAttribute('data-artist');
      const placement = item.getAttribute('data-placement');
      const size = item.getAttribute('data-size');
      const tag = item.querySelector('.gallery-tag').innerText;

      lightboxImg.src = imgSrc;
      modalTitle.innerText = title;
      modalArtist.innerText = artist;
      modalPlacement.innerText = placement;
      modalSize.innerText = size;
      modalTag.innerText = tag;

      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => closeLightbox());
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  window.closeLightbox = function() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  /* ------------------------------------------------------------------------
     8. DYNAMIC TATTOO ESTIMATOR
     ------------------------------------------------------------------------ */
  const sizeInput = document.getElementById('sizeRangeInput');
  const sizeDisplayLabel = document.getElementById('sizeDisplayLabel');
  const complexitySelect = document.getElementById('complexitySelect');
  const placementChips = document.querySelectorAll('#placementChipContainer .chip');
  const dynamicPriceLabel = document.getElementById('dynamicPriceLabel');
  const timeEstimateLabel = document.getElementById('timeEstimateLabel');
  const placementSurchargeLabel = document.getElementById('placementSurchargeLabel');

  let currentPlacement = 'Forearm';

  placementChips.forEach(chip => {
    chip.addEventListener('click', () => {
      placementChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      currentPlacement = chip.getAttribute('data-placement');
      recalculateEstimate();
    });
  });

  if (sizeInput && complexitySelect) {
    sizeInput.addEventListener('input', recalculateEstimate);
    complexitySelect.addEventListener('change', recalculateEstimate);
  }

  function recalculateEstimate() {
    const sizeInches = parseInt(sizeInput.value, 10);
    sizeDisplayLabel.innerText = `${sizeInches} x ${sizeInches} Inches`;

    let basePrice = sizeInches * 720;
    let baseHours = sizeInches * 0.45;

    const complexity = complexitySelect.value;
    if (complexity === 'minimal') {
      basePrice *= 0.85;
      baseHours *= 0.7;
    } else if (complexity === 'complex') {
      basePrice *= 1.45;
      baseHours *= 1.4;
    } else if (complexity === 'master') {
      basePrice *= 1.85;
      baseHours *= 1.75;
    }

    let surchargeText = 'Standard Anatomical';
    if (currentPlacement === 'Ribs') {
      basePrice *= 1.25;
      surchargeText = '+25% Elasticity/Sensitivity Curve';
    } else if (currentPlacement === 'Back') {
      basePrice *= 1.15;
      surchargeText = 'Broad Surface Setup';
    }

    const minPrice = Math.max(1500, Math.round(basePrice / 500) * 500);
    const maxPrice = minPrice + Math.round((minPrice * 0.25) / 500) * 500;
    const minHours = Math.max(1, parseFloat(baseHours.toFixed(1)));
    const maxHours = (parseFloat(minHours) + 1.2).toFixed(1);

    dynamicPriceLabel.innerText = `₹${minPrice.toLocaleString('en-IN')} – ₹${maxPrice.toLocaleString('en-IN')}`;
    timeEstimateLabel.innerText = `${minHours} – ${maxHours} Hours`;
    placementSurchargeLabel.innerText = surchargeText;
  }

  // Upload Feedback
  const fileInputDummy = document.getElementById('fileInputDummy');
  const fileUploadFeedback = document.getElementById('fileUploadFeedback');
  if (fileInputDummy) {
    fileInputDummy.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        fileUploadFeedback.innerHTML = `<i class="fa-solid fa-file-circle-check"></i> Attached: ${e.target.files[0].name}`;
        showToast('Reference image loaded successfully!', 'success');
      }
    });
  }

  /* ------------------------------------------------------------------------
     9. ARTIST PRE-FILL SYSTEM
     ------------------------------------------------------------------------ */
  const artistTriggers = document.querySelectorAll('.book-artist-trigger');
  const artistDropdown = document.getElementById('selectedArtistDropdown');

  artistTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const artistName = btn.getAttribute('data-artist');
      if (artistDropdown) {
        artistDropdown.value = artistName;
      }
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Selected resident master: ${artistName}`, 'info');
    });
  });

  /* ------------------------------------------------------------------------
     10. AFTERCARE TABS
     ------------------------------------------------------------------------ */
  window.switchAftercareTab = function(index) {
    const tabBtns = document.querySelectorAll('.aftercare-tab-btn');
    const panes = document.querySelectorAll('.aftercare-stage-pane');

    tabBtns.forEach((btn, i) => btn.classList.toggle('active', i === index));
    panes.forEach((pane, i) => pane.classList.toggle('active', i === index));
  };

  /* ------------------------------------------------------------------------
     11. FAQ ACCORDION WITH LIVE SEARCH
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const panel = item.querySelector('.faq-answer-panel');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        fi.querySelector('.faq-answer-panel').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  const faqSearchInput = document.getElementById('faqSearchInput');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-btn').innerText.toLowerCase();
        const answer = item.querySelector('.faq-answer-inner').innerText.toLowerCase();
        if (question.includes(query) || answer.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     12. BOOKING FORM DISPATCH & TOAST SYSTEM
     ------------------------------------------------------------------------ */
  const bookingForm = document.getElementById('appointmentBookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientFullName').value;
      const artist = document.getElementById('selectedArtistDropdown').value || 'Resident Master';
      const date = document.getElementById('bookingDate').value;
      const slot = document.getElementById('bookingSlot').value;

      showToast(`Booking request confirmed for ${name} with ${artist} on ${date} (${slot})! Our atelier concierge will contact you via WhatsApp.`, 'success');
      bookingForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     13. GLOBAL HELPERS
     ------------------------------------------------------------------------ */
  window.handleNewsletter = function(e) {
    e.preventDefault();
    showToast('You are now subscribed to the Obsidian & Ink Journal!', 'success');
    e.target.reset();
  };

  window.openStyleGallery = function(styleName) {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Displaying archives matching "${styleName}"`, 'info');
  };

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = '<i class="fa-solid fa-circle-info" style="color: var(--accent-gold);"></i>';
    if (type === 'success') {
      icon = '<i class="fa-solid fa-circle-check" style="color: #38d39f;"></i>';
    }

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-20px)';
      toast.style.transition = 'all 0.4s var(--ease-spring)';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
});