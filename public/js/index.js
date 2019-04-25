// Typed.js implementation for the main section text
var options = {
    strings: [
        'My name is <i>Wesley Wei</i>. I am the best developer in the world!'
    ],
    typeSpeed: 50
};

var typed = new Typed('#main div p', options);

// Hovering effects for navbar
var navButtonElem = document.getElementsByClassName('nav-button');
var navBarSectionDiv = document.getElementsByClassName('navbar-section');
var navBarSectionContentDiv = document.getElementsByClassName(
    'navbar-section-content'
);
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
