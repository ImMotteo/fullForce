/*
===================
Глобальные переменные
===================
*/ 
const html = document.querySelector('html')
const switchThemeBtn = document.querySelector('.switch-theme')


function switchTheme() {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        html.setAttribute("data-theme", newTheme);
}

// Обработчики

switchThemeBtn.addEventListener('click', switchTheme)
