document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDate = document.getElementById('modalDate');
    const modalFeatures = document.getElementById('modalFeatures');

    if (modal) {
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();

                modalImage.src = card.dataset.image;
                modalImage.alt = card.dataset.title;
                modalTitle.textContent = card.dataset.title;
                modalCategory.textContent = card.dataset.category;
                modalDate.textContent = card.dataset.date;

                modalFeatures.innerHTML = '';
                card.dataset.features.split(',').forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature.trim();
                    modalFeatures.appendChild(li);
                });

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.stack-card');

    function updateStack() {
        cards.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            const stickyTop = 100 + (i * 30); // same jaisa CSS mein hai

            // jab card apni sticky position pe pahunch kar "stuck" ho jaye
            if (rect.top <= stickyTop + 5) {
                const nextCard = cards[i + 1];
                if (nextCard) {
                    const nextRect = nextCard.getBoundingClientRect();
                    const overlap = stickyTop - nextRect.top;

                    if (overlap > 0) {
                        const scale = Math.max(1 - overlap * 0.0006, 0.92);
                        const opacity = Math.max(1 - overlap * 0.002, 0.5);
                        card.style.transform = `scale(${scale})`;
                        card.style.opacity = opacity;
                    } else {
                        card.style.transform = 'scale(1)';
                        card.style.opacity = 1;
                    }
                }
            }
        });
    }

    window.addEventListener('scroll', updateStack);
    updateStack();
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // sab band kar do
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-icon').textContent = '+';
            });

            // click kiya hua open karo (agar pehle se open nahi tha)
            if (!isActive) {
                item.classList.add('active');
                icon.textContent = '−';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rotatingWord = document.getElementById('rotatingWord');
    const words = ['build', 'design', 'create'];
    let index = 0;

    if (rotatingWord) {
        setInterval(() => {
            rotatingWord.classList.add('fade-out');

            setTimeout(() => {
                index = (index + 1) % words.length;
                rotatingWord.textContent = words[index];
                rotatingWord.classList.remove('fade-out');
            }, 350);

        }, 2200);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.getElementById('contactDrawer');
    const openBtn = document.getElementById('openContactDrawer');
    const closeBtn = document.getElementById('contactClose');
    const overlay = document.getElementById('contactOverlay');
    const form = document.getElementById('contactForm');

    function openDrawer(e) {
        if (e) e.preventDefault();
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openBtn) {
        openBtn.addEventListener('click', openDrawer);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) {
        overlay.addEventListener('click', closeDrawer);
    }
});