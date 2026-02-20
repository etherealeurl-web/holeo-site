// On mobile: close product-details accordion by default to save space
if (window.innerWidth <= 768) {
    const detailsAccordion = document.querySelector('.product-details .accordion');
    if (detailsAccordion) {
        detailsAccordion.querySelectorAll('.accordion-item.active').forEach(item => {
            item.classList.remove('active');
            const header = item.querySelector('.accordion-header');
            if (header) header.setAttribute('aria-expanded', 'false');
        });
    }
}

// Scroll-triggered fade-in sections
const fadeInSections = document.querySelectorAll('.fade-in-section');
if (fadeInSections.length) {
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    fadeInSections.forEach(section => fadeObserver.observe(section));
}

// Banner text rotation
const bannerTexts = document.querySelectorAll('.banner-rotator .banner-text');
if (bannerTexts.length > 1) {
    let currentBanner = 0;
    const arrowLeft = document.querySelector('.banner-arrow-left');
    const arrowRight = document.querySelector('.banner-arrow-right');

    function showBanner(index) {
        bannerTexts[currentBanner].classList.remove('banner-text-active');
        currentBanner = (index + bannerTexts.length) % bannerTexts.length;
        bannerTexts[currentBanner].classList.add('banner-text-active');
    }

    let bannerInterval = setInterval(() => showBanner(currentBanner + 1), 5000);

    if (arrowRight) {
        arrowRight.addEventListener('click', () => {
            clearInterval(bannerInterval);
            showBanner(currentBanner + 1);
            bannerInterval = setInterval(() => showBanner(currentBanner + 1), 5000);
        });
    }
    if (arrowLeft) {
        arrowLeft.addEventListener('click', () => {
            clearInterval(bannerInterval);
            showBanner(currentBanner - 1);
            bannerInterval = setInterval(() => showBanner(currentBanner + 1), 5000);
        });
    }
}

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
}

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');

        // Close all items in the same accordion
        const accordion = item.closest('.accordion');
        accordion.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });

        // Toggle current if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});

// Parallax leaves
const leafRight = document.querySelector('.decorative-leaf-right');
const leafLeft = document.querySelector('.decorative-leaf-left');
const leafDetailsRight = document.querySelector('.decorative-leaf-details-right');
const compLeafParallax = document.querySelector('.comp-leaf-parallax');
const storyLeafParallax = document.querySelector('.story-leaf-parallax');
const proLeafParallax = document.querySelector('.pro-leaf-parallax');
// Position details leaf relative to its section (since it's now body-level)
if (leafDetailsRight) {
    const detailsSection = document.querySelector('.product-details');
    if (detailsSection) {
        leafDetailsRight.style.top = (detailsSection.offsetTop + 650) + 'px';
    }
}

if (leafRight || leafLeft || leafDetailsRight || compLeafParallax || storyLeafParallax || proLeafParallax) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (leafRight) leafRight.style.transform = `translateY(${scrollY * 0.3}px)`;
        if (leafLeft) leafLeft.style.transform = `translateY(${scrollY * 0.075}px)`;
        if (leafDetailsRight) leafDetailsRight.style.transform = `translateY(${scrollY * -0.15}px)`;
        if (compLeafParallax) compLeafParallax.style.transform = `translateY(${scrollY * -0.12}px)`;
        if (storyLeafParallax) storyLeafParallax.style.transform = `translateY(${scrollY * -0.1}px)`;
        if (proLeafParallax) proLeafParallax.style.transform = `translateY(${scrollY * -0.08}px)`;
    }, { passive: true });
}

// Underline highlight animation linked to scroll progress
const underlines = document.querySelectorAll('.underline');
if (underlines.length) {
    function updateUnderlines() {
        const viewportH = window.innerHeight;
        // Group underlines that share the same parent h2 so they animate together
        const groups = new Map();
        underlines.forEach(el => {
            const parentH2 = el.closest('h2');
            if (parentH2) {
                if (!groups.has(parentH2)) groups.set(parentH2, []);
                groups.get(parentH2).push(el);
            } else {
                // standalone underline
                const rect = el.getBoundingClientRect();
                const start = viewportH * 0.85;
                const end = viewportH * 0.25;
                const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
                el.style.backgroundSize = `${progress * 100}% 100%`;
            }
        });
        groups.forEach((els, h2) => {
            const rect = h2.getBoundingClientRect();
            const start = viewportH * 0.85;
            const end = viewportH * 0.25;
            const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
            els.forEach(el => {
                el.style.backgroundSize = `${progress * 100}% 100%`;
            });
        });
    }
    window.addEventListener('scroll', updateUnderlines, { passive: true });
    updateUnderlines();
}


// Bottle scroll-rotation (sprite sequence)
(function () {
    const canvas = document.getElementById('bottle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const TOTAL_FRAMES = 60;
    const frames = [];
    let loaded = 0;
    let ready = false;
    let currentFrame = 0;

    // Preload all frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const basePath = (window.location.pathname.match(/^\/(en|ko)\//) ? '../' : '');
        img.src = `${basePath}assets/images/bottle-frames/frame_${String(i - 1).padStart(4, '0')}.png`;
        img.onload = function () {
            loaded++;
            if (loaded === TOTAL_FRAMES) {
                ready = true;
                // Hide fallback image, show canvas
                const fallback = document.querySelector('.practical-bottle-fallback');
                if (fallback) fallback.style.display = 'none';
                canvas.style.display = 'block';
                drawFrame(0);
            }
        };
        img.onerror = function () {
            // If frames don't exist, keep fallback visible
            console.warn('Bottle frames not found, using static image.');
        };
        frames.push(img);
    }

    function drawFrame(index) {
        const img = frames[index];
        if (!img || !img.complete) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    // Determine frame based on scroll position within the section
    const section = document.querySelector('.practical-section');
    if (!section) return;

    window.addEventListener('scroll', function () {
        if (!ready) return;

        const rect = section.getBoundingClientRect();
        const sectionH = section.offsetHeight;
        const viewH = window.innerHeight;

        // Progress: 0 when section top enters viewport, 1 when section bottom exits
        // Frame 0 (front face) appears at progress 0.5 (section midpoint)
        const start = rect.top - viewH;
        const end = rect.bottom;
        const total = end - start;

        if (total <= 0) return;

        const progress = Math.min(1, Math.max(0, (0 - start) / total));
        // Offset so frame 0 is at midpoint: shift by half a revolution
        const shifted = (progress + 0.5) % 1;
        const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.floor(shifted * TOTAL_FRAMES));

        if (frameIndex !== currentFrame) {
            currentFrame = frameIndex;
            requestAnimationFrame(function () {
                drawFrame(currentFrame);
            });
        }
    }, { passive: true });
})();

// Recipe slider buttons
const recipeGrid = document.querySelector('.recipe-grid');
const sliderLeft = document.querySelector('.recipe-slider-btn-left');
const sliderRight = document.querySelector('.recipe-slider-btn-right');
if (recipeGrid && sliderLeft && sliderRight) {
    const scrollAmount = 300;
    sliderLeft.addEventListener('click', () => {
        recipeGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    sliderRight.addEventListener('click', () => {
        recipeGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Active nav-link highlight based on scroll position
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
const navSections = [];
navLinks.forEach(link => {
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (section) navSections.push({ link, section });
});

if (navSections.length) {
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const match = navSections.find(ns => ns.section === entry.target);
                if (match) match.link.classList.add('active');
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    navSections.forEach(ns => navObserver.observe(ns.section));
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Update active nav-link immediately on click
        if (this.classList.contains('nav-link')) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Mobile menu overlay
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    if (!mobileOverlay) return;
    mobileOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking a link
if (mobileOverlay) {
    mobileOverlay.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}


// Mouse-tilt effect on practical orbit items
document.querySelectorAll('.practical-orbit-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});


// Mouse-tilt effect on entire comparison center card
const compCard = document.querySelector('.comp-card-center');
if (compCard) {
    compCard.addEventListener('mousemove', (e) => {
        const rect = compCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        compCard.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 6}deg)`;
    });
    compCard.addEventListener('mouseleave', () => {
        compCard.style.transform = '';
    });
}


// Web3Forms API key — replace with your real key from https://web3forms.com
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

// Utility: send form via Web3Forms
async function submitForm(formData, form, onSuccess) {
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('from_name', 'Holéo Site');
    const submitBtn = form.querySelector('button[type="submit"], .btn');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Envoi...'; }
    try {
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if (data.success) {
            form.reset();
            showFormSuccess(form, 'Message envoyé !');
            if (onSuccess) onSuccess();
        } else {
            showFormSuccess(form, 'Erreur, réessayez.', true);
        }
    } catch (err) {
        showFormSuccess(form, 'Erreur réseau, réessayez.', true);
    }
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Envoyer'; }
}

// Utility: show success/error message after form submit
function showFormSuccess(form, text, isError) {
    // Remove any existing message
    const existing = form.parentElement.querySelector('.form-success-msg');
    if (existing) existing.remove();
    const msg = document.createElement('div');
    msg.className = 'form-success-msg' + (isError ? ' form-error-msg' : '');
    msg.textContent = text || 'Message envoyé !';
    form.parentElement.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

// Contact section form
const contactSectionForm = document.getElementById('contact-section-form');
if (contactSectionForm) {
    contactSectionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(contactSectionForm);
        fd.append('subject', fd.get('subject') || 'Contact Holéo');
        submitForm(fd, contactSectionForm);
    });
}

// Contact bubble
const contactBubbleBtn = document.querySelector('.contact-bubble-btn');
const contactPanel = document.querySelector('.contact-panel');
const contactClose = document.querySelector('.contact-panel-close');
const contactForm = document.getElementById('contact-form');

if (contactBubbleBtn && contactPanel) {
    contactBubbleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        contactPanel.classList.toggle('open');
    });

    if (contactClose) {
        contactClose.addEventListener('click', () => {
            contactPanel.classList.remove('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (!contactPanel.contains(e.target) && !contactBubbleBtn.contains(e.target)) {
            contactPanel.classList.remove('open');
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(contactForm);
        fd.append('subject', 'Question Holéo');
        submitForm(fd, contactForm, () => {
            setTimeout(() => contactPanel.classList.remove('open'), 1500);
        });
    });
}


// Reveal phone number on click
const revealPhoneBtn = document.getElementById('contact-reveal-phone');
const phoneNumber = document.getElementById('contact-phone-number');
if (revealPhoneBtn && phoneNumber) {
    revealPhoneBtn.addEventListener('click', () => {
        revealPhoneBtn.style.display = 'none';
        phoneNumber.classList.remove('hidden');
    });
}

// Pro popup phone reveal (mobile)
const proPhoneBtn = document.getElementById('pro-popup-phone-btn');
const proPhoneNumber = document.getElementById('pro-popup-phone-number');
if (proPhoneBtn && proPhoneNumber) {
    proPhoneBtn.addEventListener('click', () => {
        proPhoneBtn.style.display = 'none';
        proPhoneNumber.classList.remove('hidden');
    });
}

// Pro popup
const proPopup = document.getElementById('pro-popup');
if (proPopup) {
    const proClose = document.getElementById('pro-popup-close');
    const proForm = document.getElementById('pro-form');

    document.querySelectorAll('[data-pro-popup]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            proPopup.classList.remove('hidden');
        });
    });

    if (proClose) {
        proClose.addEventListener('click', () => proPopup.classList.add('hidden'));
    }

    proPopup.addEventListener('click', (e) => {
        if (e.target === proPopup) proPopup.classList.add('hidden');
    });

    // Download gated by email — show email field on first click, download on confirm
    const proDownloadBtn = document.getElementById('pro-download-btn');
    const proDownloadEmailRow = document.getElementById('pro-download-email-row');
    const proDownloadEmail = document.getElementById('pro-download-email');
    const proDownloadConfirm = document.getElementById('pro-download-confirm');

    if (proDownloadBtn && proDownloadEmailRow) {
        proDownloadBtn.addEventListener('click', () => {
            proDownloadEmailRow.classList.remove('hidden');
            proDownloadEmail.focus();
        });
    }

    if (proDownloadConfirm && proDownloadEmail) {
        proDownloadConfirm.addEventListener('click', () => {
            const email = proDownloadEmail.value.trim();
            if (!email || !proDownloadEmail.checkValidity()) {
                proDownloadEmail.reportValidity();
                return;
            }
            const link = document.createElement('a');
            link.href = 'assets/Holeo.pdf';
            link.download = 'Holeo-Fiche-Technique.pdf';
            link.click();
        });
    }

    if (proForm) {
        proForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fd = new FormData(proForm);
            fd.append('subject', 'Holéo Pro - Demande d\'échantillon');
            submitForm(fd, proForm);
        });
    }
}

// Cookie consent popup (always shown on every page load)
const cookiePopup = document.getElementById('cookie-popup');
if (cookiePopup) {
    const acceptBtn = document.getElementById('cookie-accept');
    const refuseBtn = document.getElementById('cookie-refuse');

    function closeCookiePopup(choice) {
        localStorage.setItem('holeo-cookies', choice);
        cookiePopup.classList.add('hidden');
        setTimeout(() => cookiePopup.remove(), 400);
    }

    if (acceptBtn) acceptBtn.addEventListener('click', () => closeCookiePopup('all'));
    if (refuseBtn) refuseBtn.addEventListener('click', () => closeCookiePopup('essential'));

    // Cookie recipe accordion toggle
    const recipeToggle = document.getElementById('cookie-recipe-toggle');
    const recipeContent = document.getElementById('cookie-recipe-content');
    if (recipeToggle && recipeContent) {
        recipeToggle.addEventListener('click', () => {
            recipeToggle.classList.toggle('open');
            recipeContent.classList.toggle('open');
        });
    }
}

// =============================
// Articles filter + search
// =============================
{
    const grid = document.getElementById('articles-grid');
    const searchInput = document.getElementById('articles-search');
    const noResult = document.getElementById('articles-no-result');
    const filterBtns = document.querySelectorAll('.articles-filter-btn');
    const showMoreBtn = document.getElementById('articles-show-more');
    const showMoreWrapper = document.getElementById('articles-show-more-wrapper');

    if (grid && searchInput && filterBtns.length) {
        const cards = Array.from(grid.querySelectorAll('.article-card'));
        let activeFilter = 'all';

        function normalize(str) {
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }

        function filterArticles() {
            const query = normalize(searchInput.value.trim());
            const isFiltering = activeFilter !== 'all' || query.length > 0;
            let visibleCount = 0;

            cards.forEach(card => {
                const category = normalize(card.dataset.category || '');
                const categoryAlt = normalize(card.dataset.categoryAlt || '');
                const title = normalize(card.querySelector('h3')?.textContent || '');
                const desc = normalize(card.querySelector('p')?.textContent || '');
                const badge = normalize(card.querySelector('.article-badge')?.textContent || '');

                // Category filter
                let matchCategory = activeFilter === 'all' ||
                    category === normalize(activeFilter) ||
                    categoryAlt === normalize(activeFilter);

                // Search filter
                let matchSearch = !query ||
                    title.includes(query) ||
                    desc.includes(query) ||
                    badge.includes(query) ||
                    category.includes(query);

                if (matchCategory && matchSearch) {
                    card.classList.remove('card-hidden');
                    visibleCount++;
                } else {
                    card.classList.add('card-hidden');
                }
            });

            // Toggle filtered class on grid (for mobile layout switch)
            grid.classList.toggle('filtered', isFiltering);

            // No result message
            if (noResult) {
                noResult.hidden = visibleCount > 0;
            }

            // Show more button: hide when filtering, show when "all" + collapsed
            if (showMoreWrapper) {
                if (isFiltering) {
                    showMoreWrapper.style.display = 'none';
                    grid.classList.add('articles-expanded');
                } else {
                    showMoreWrapper.style.display = '';
                    // Reset to collapsed when back to "all" with no search
                    grid.classList.remove('articles-expanded');
                    if (showMoreBtn) {
                        showMoreBtn.textContent = 'Voir plus d\'articles';
                    }
                }
            }
        }

        // Filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                activeFilter = btn.dataset.filter;
                filterArticles();
            });
        });

        // Search input
        searchInput.addEventListener('input', () => {
            filterArticles();
        });

        // Clear search on Escape
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                filterArticles();
                searchInput.blur();
            }
        });

        // Show more / show less toggle
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => {
                const expanded = grid.classList.toggle('articles-expanded');
                showMoreBtn.textContent = expanded ? 'Voir moins' : 'Voir plus d\'articles';
            });
        }
    }
}
