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
