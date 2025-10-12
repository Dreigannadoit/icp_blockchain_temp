const theme = 1; // 1,2,3
const color_theme = 1; // 1,2,3


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    if (theme === 0 || color_theme === 0) body.classList.add(`Missing`);

    body.classList.add(`theme-${theme}`, `color-${color_theme}`);
});