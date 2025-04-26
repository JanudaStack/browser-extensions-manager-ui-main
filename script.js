const themeToggle = document.querySelector('.themeToggle'); // Use querySelector to select the button
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
});
