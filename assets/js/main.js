document.addEventListener('DOMContentLoaded', () => {
    const selectedCategories = new Set();
    const buttons = document.querySelectorAll('.btn.btn-brand');
    const data = {
        ricemeals: {
            Pork: ['Fried', 'Steamed', 'Soup'],
            Beef: ['Fried', 'Steamed', 'Soup'],
            Chicken: ['Fried', 'Steamed', 'Soup'],
            Vegetables: ['Fried', 'Steamed', 'Soup']
        },
        beverages: {
            Coffee: ['Hot', 'Iced'],
            Juice: ['Tea', 'Lemonade', 'Fruit'],
            MilkTea: ['Regular', 'Flavored'],
            Shakes: ['Fruit', 'Others'],
            Water: []
        },
        snacks: {
            Streetfood: ['Skewers', 'Fried'],
            Pasta: ['Noodles', 'Western Pasta', 'Pancit'],
            Bread: ['Sandwich', 'Sweets']
        }
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
                <div id="${category}-area"></div>
                <div id="${category}-sub-area"></div>
            `;
            selectedSection.appendChild(sectionWrapper);

            Object.keys(data[category.replace('-', '_')]).forEach(option => {
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-option');
                button.id = `${category}-${option}`;
                button.textContent = option;
                button.onclick = () => updateOptions(`${category}-${option}`, category);
                document.getElementById(`${category}-area`).appendChild(button);
            });
        });

        // Add the submit button after generating the content
        addSubmitButton();
    }

    function addSubmitButton() {
        const buttonContainer = document.querySelector('.button-container1');
        buttonContainer.innerHTML = ''; 

        const submitButton = document.createElement('button');
        submitButton.classList.add('submit-btn');
        submitButton.textContent = 'Submit';
        submitButton.onclick = handleFormSubmission; //form submission
        buttonContainer.appendChild(submitButton);
    }

    function updateOptions(optionId, category) {
        const subcategoryArea = document.getElementById(`${category}-sub-area`);
        subcategoryArea.innerHTML = '';
        const selectedOption = optionId.split('-')[1];
        if (data[category][selectedOption]) {
            data[category][selectedOption].forEach(subOption => {
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-sub-option');
                button.textContent = subOption;
                subcategoryArea.appendChild(button);
            });
        }
    }

    function handleFormSubmission() {
        // Add your form submission logic here
        console.log('Form submitted!');
    }
});

$(document).ready(function() {
    const buttons = $('.buttonselect button');

    buttons.click(function() {
        buttons.removeClass('btn-selected');
        $(this).addClass('btn-selected');
    });

    // Smooth scroll function
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            const sectionPosition = sectionTop - navbarHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    }

    $('.scroll-to-section').click(function(e) {
        e.preventDefault();
        const sectionId = $(this).attr('href').substr(1); 
        scrollToSection(sectionId);
    });
});
