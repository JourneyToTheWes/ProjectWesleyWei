// Typed.js implementation for the main section text
var options = {
    strings: [
        '<p>Hello</p> <p>&amp;</p> <p>Welcome!</p>',
        '<p>My name is <i>Wesley Wei</i>.</p><p>I am the best developer in the world!</p>'
    ],
    typeSpeed: 50,
    backSpeed: 40
};

var typed = new Typed('#main-banner-text-one', options);

// Hovering effects for navbar
var navButtonElem = document.getElementsByClassName('nav-button');
var navBarSectionDiv = document.getElementsByClassName('navbar-section');
var navBarSectionContentDiv = document.getElementsByClassName(
    'navbar-section-content'
);

// Hidden toggling for navbar
for (let i = 0; i < navButtonElem.length; i++) {
    navButtonElem[i].addEventListener('mouseover', () => {
        navBarSectionDiv[i].style.backgroundColor = 'white';
        navBarSectionContentDiv[i].classList.remove('hidden');
    });

    navButtonElem[i].addEventListener('mouseout', () => {
        navBarSectionDiv[i].style.backgroundColor = 'transparent';
        navBarSectionContentDiv[i].classList.add('hidden');
    });
}
