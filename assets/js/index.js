/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
    scrollFunction();
};

window.onload = function () {
    resolveThemeOnLoad();
    scrollFunction();
};

function scrollFunction() {

    if (document.documentElement.scrollTop > 30) {
        document.getElementById("navbarId").classList.add("top-nav-collapse");
    } else if (document.documentElement.scrollTop < 30) {
        document.getElementById("navbarId").classList.remove("top-nav-collapse");
    }
}

// nav collapase on click
$('.nav-collapse-btn').on('click', function () {
    $('.navbar-collapse').collapse('hide');
})

// Dark - Light mode
$('.theme-icon').on('click', function () {
    toggleTheme();
})

function resolveThemeOnLoad() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = getCurrentTheme();

    if (savedTheme !== null && savedTheme !== currentTheme
        || (savedTheme === null && prefersDarkMode && currentTheme === 'light-theme')) {

        toggleTheme();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    const currentTheme = getCurrentTheme();
    localStorage.setItem('theme', currentTheme);

    if (currentTheme === 'dark-theme') {
        $('#theme-icon').attr('src', 'assets/icons/sun.png');
    }
    else {
        $('#theme-icon').attr('src', 'assets/icons/moon.png')
    }
}

function getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
}
