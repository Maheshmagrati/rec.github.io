let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
}


// JavaScript to add 'fixed' class to header when scrolling
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight; // Get the height of the header, including padding
    var homeSection = document.querySelector('.home');

    // Add 'fixed' class to header when scrolling down
    if (window.scrollY > homeSection.offsetTop + headerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});




