document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.work-card');
    const modal = document.getElementById('projectModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDate = document.getElementById('modalDate');
    const modalFeatures = document.getElementById('modalFeatures');

    if (!modal) return;

    cards.forEach(card => {
        card.addEventListener('click', () => {
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
});