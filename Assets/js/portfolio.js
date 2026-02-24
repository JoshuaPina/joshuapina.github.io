// THEME SWITCHER
function setTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else if (mode === 'light') {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
        applyAuto();
    }
}

function applyAuto() {
    if (!localStorage.getItem('theme')) {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', isDark);
    }
}

// NAVIGATION
function showPage(id) {
    const home = document.getElementById('view-home');
    const contact = document.getElementById('view-contact');
    const title = document.getElementById('firstHeading');

    if (id === 'contact') {
        home.style.display = 'none';
        contact.style.display = 'block';
        title.innerText = "Contact: Joshua Piña";
    } else {
        home.style.display = 'block';
        contact.style.display = 'none';
        title.innerText = "Joshua Piña (Data Scientist)";
    }
}

// INIT
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
else if (!localStorage.getItem('theme')) applyAuto();