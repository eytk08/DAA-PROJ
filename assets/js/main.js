document.addEventListener('DOMContentLoaded', () => {
    const selectedCategories = new Set();
    const buttons = document.querySelectorAll('.btn.btn-brand');
    const categories = {
        snacks: [
            { id: 'snack1', label: 'Chips' },
            { id: 'snack2', label: 'Cookies' }
        ],
        beverages: [
            { id: 'beverage1', label: 'Soda' },
            { id: 'beverage2', label: 'Juice' }
        ],
        'rice-meals': [
            { id: 'rice1', label: 'Chicken Rice' },
            { id: 'rice2', label: 'Veg Rice' }
        ]
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.id;
            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
                button.classList.remove('btn-selected');
            } else {
                if (selectedCategories.size < 2) {
                    selectedCategories.add(category);
                    button.classList.add('btn-selected');
                } else {
                    alert('You can only select two categories.');
                    return;
                }
            }
            updateSelectedSection();
        });
    });

    function updateSelectedSection() {
        const selectedSection = document.getElementById('selected-section');
        selectedSection.innerHTML = '';
        selectedCategories.forEach(category => {
            const sectionWrapper = document.createElement('div');
            sectionWrapper.classList.add('category-section');
            sectionWrapper.innerHTML = `
                <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                ${categories[category].map(item => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="${category}" id="${item.id}" value="${item.label}">
                        <label class="form-check-label" for="${item.id}">
                            ${item.label}
                        </label>
                    </div>
                `).join('')}
            `;
            selectedSection.appendChild(sectionWrapper);
        });
    }
});
