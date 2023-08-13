
const $search = document.querySelector('header .icons .fa-magnifying-glass');
const $user = document.querySelector('header .icons .fa-user');
const $x = document.querySelector('.section-form .fa-xmark');
const $navbar = document.querySelector('header .fa-bars')
const section_bar = document.querySelector('header .section-bar');
const section_form = document.querySelector('.section-form');
const head_navbar = document.querySelector('header .navbar');


$search.addEventListener('click', searchFunc);
$user.addEventListener('click', userFunc);
$x.addEventListener('click', xFunc);
$navbar.addEventListener('click', navbarFunc);


function searchFunc(e) {
    if (e.target.classList[1] == 'fa-magnifying-glass') {
        section_bar.classList.toggle('active');
    }
}


function userFunc(e) {
    if (e.target.classList[1] == 'fa-user') {
        section_form.classList.add('active');
    }
}

function xFunc(e) {
    if (e.target.classList[1] == 'fa-xmark') {
        section_form.classList.remove('active');

    }
}

function navbarFunc(e) {
    if (e.target.classList[1] == 'fa-bars') {
        head_navbar.classList.toggle('active');
    }
}