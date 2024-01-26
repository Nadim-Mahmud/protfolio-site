/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
    scrollFunction();
};

window.onload = function () {
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
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
})