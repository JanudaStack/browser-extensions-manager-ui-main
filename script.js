const themeToggleButton = document.querySelector('.themeToggle'); // Use querySelector to select the button
const body = document.body;
const DARK_MODE_CLASS = 'dark-mode';

const currentTheme = localStorage.getItem('theme');

if (currentTheme === DARK_MODE_CLASS) {
    body.classList.add(currentTheme);
}

// Toggle the dark mode class on the body and update the theme in localStorage
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle(DARK_MODE_CLASS);

    if (body.classList.contains(DARK_MODE_CLASS)) {
        localStorage.setItem('theme', DARK_MODE_CLASS);
    } else {
        localStorage.setItem('theme', '');
    }
});

// Dynamically update data-active attribute based on checkbox toggle
const checkboxes = document.querySelectorAll(
    '.checkbox-apple input[type="checkbox"]'
);

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        const card = event.target.closest('.extension-card');
        if (card) {
            card.setAttribute(
                'data-active',
                event.target.checked ? 'true' : 'false'
            );
        }
    });
});

// When click on "Active" filter it will only display active extensions
const allExtensions = document.querySelector('#all');
const activeExtensions = document.querySelector('#active');
const inactiveExtensions = document.querySelector('#inactive');
const extensionCards = document.querySelectorAll('.extension-card');

activeExtensions.addEventListener('click', () => {
    let hasActiveExtensions = false;

    extensionCards.forEach((card) => {
        if (card.getAttribute('data-active') === 'true') {
            card.style.display = 'block'; // Show active extensions
            hasActiveExtensions = true;
        } else {
            card.style.display = 'none'; // Hide inactive extensions
        }
    });

    const noActiveMessage = document.querySelector('#no-active-message');
    const extensionList = document.querySelector('.extension-list'); // Assuming this is the container for the extensions
    const attribution = document.querySelector('.attribution'); // Assuming this is the attribution section

    if (!hasActiveExtensions) {
        if (!noActiveMessage) {
            const message = document.createElement('p');
            message.id = 'no-active-message';
            message.textContent = 'There is no active extensions.';
            message.style.textAlign = 'center'; // Center the text
            message.style.margin = '20px 0'; // Add some spacing
            extensionList.parentNode.insertBefore(message, attribution); // Insert message before attribution
        }
    } else if (noActiveMessage) {
        noActiveMessage.remove();
    }
});

// Display only inactive extensions
inactiveExtensions.addEventListener('click', () => {
    extensionCards.forEach((card) => {
        if (card.getAttribute('data-active') === 'false') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Display every extension
allExtensions.addEventListener('click', () => {
    extensionCards.forEach((card) => {
        card.style.display = 'block'; // Show all extensions regardless of data-active value
    });
});

const removeButtons = document.querySelectorAll('.remove-btn');

removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.extension-card');
        if (card) {
            card.remove(); // Remove the extension card from the DOM
        }
    });
});
