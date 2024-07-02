document.addEventListener('DOMContentLoaded', () => {
    const selectedCategories = new Set();
    const buttons = document.querySelectorAll('.btn.btn-brand');
    const categories = {
        snacks: [
            { id: 'snack1', label: 'Streetfood' },
            { id: 'snack2', label: 'Noodles' },
            { id: 'snack3', label: 'Western Pasta' },
            { id: 'snack4', label: 'Pancit' },
            { id: 'snack5', label: 'Sandwich' },
            { id: 'snack6', label: 'Sweets' }
        ],
        beverages: [
            { id: 'beverage1', label: 'Coffee-Cold' },
            { id: 'beverage2', label: 'Coffee-Hot' },
            { id: 'beverage3', label: 'Juice-Tea' },
            { id: 'beverage4', label: 'Juice-Lemonade' },
            { id: 'beverage5', label: 'Juice-Fruit' },
            { id: 'beverage6', label: 'Milk Tea' },
            { id: 'beverage7', label: 'Shakes-Fruit' },
            { id: 'beverage8', label: 'Shakes-Others' },
            { id: 'beverage9', label: 'Water' }
        ],
        'rice-meals': [
            { id: 'rice1', label: 'Pork Fried' },
            { id: 'rice2', label: 'Pork Steamed' },
            { id: 'rice3', label: 'Pork Soup' },
            { id: 'rice4', label: 'Beef Fried' },
            { id: 'rice5', label: 'Beef Steamed' },
            { id: 'rice6', label: 'Beef Soup' },
            { id: 'rice7', label: 'Chicken Fried' },
            { id: 'rice8', label: 'Chicken Steamed' },
            { id: 'rice9', label: 'Chicken Soup' },
            { id: 'rice10', label: 'Vegetables Fried' },
            { id: 'rice11', label: 'Vegetables Steamed' },
            { id: 'rice12', label: 'Vegetables Soup' }
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
                    alert('You can only select two categories. Click button to unselect.');
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

$(document).ready(function() {
    const buttons = $('.buttonselect button');

    buttons.click(function() {
        buttons.removeClass('btn-selected');
        $(this).addClass('btn-selected');
    });
}); 

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get navbar height
        const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Calculate top position relative to the viewport
        const sectionPosition = sectionTop - navbarHeight; // Adjust for navbar height

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

