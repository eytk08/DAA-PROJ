

document.addEventListener('DOMContentLoaded', () => {
    const selectedCategories = new Set();

    const categories = {
        snacks: [
            { id: 'snack1', label: 'Chips' },
            { id: 'snack2', label: 'Cookies' },
            { id: 'snack3', label: 'Nuts' }
        ],
        beverages: [
            { id: 'bev1', label: 'Coffee' },
            { id: 'bev2', label: 'Tea' },
            { id: 'bev3', label: 'Juice' }
        ],
        'rice-meals': [
            { id: 'rice1', label: 'Fried Rice' },
            { id: 'rice2', label: 'Rice Bowl' },
            { id: 'rice3', label: 'Sushi' }
        ]
    };

    const buttons = document.querySelectorAll('.btn.btn-brand');
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
            const section = document.createElement('div');
            section.innerHTML = `
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
            selectedSection.appendChild(section);
        });
    }
});