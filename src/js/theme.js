const themeButtonEl = document.querySelector('.theme');
const htmlEl = document.querySelector('.light');

const handleChangeThemeButton = () => {

if (themeButtonEl.textContent === 'dark') {
    htmlEl.classList.remove('light');
    htmlEl.classList.add('dark');
    themeButtonEl.textContent = 'light';
    themeButtonEl.blur();
} 

else  {
    htmlEl.classList.remove('dark');
    htmlEl.classList.add('light');
    themeButtonEl.textContent = 'dark';
    themeButtonEl.blur();
} 
}

themeButtonEl.addEventListener('click', handleChangeThemeButton)