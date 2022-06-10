var functionSection = document.getElementById('function-section');
var menuBtn = document.getElementById('menu-button');
var menuIcon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

function openMenu() {
    functionSection.style.backgroundColor = '#f95f22';
    menuBtn.setAttribute('onclick', 'closeMenu()');
    menuBtn.style.borderRadius = '0';
    menuIcon.style.fontSize = '4vh';
    menuIcon.style.color = '#fff';
    menu.style.width = '100%';
}

function closeMenu() {
    functionSection.style.backgroundColor = '#fff';
    menuBtn.setAttribute('onclick', 'openMenu()');
    menuBtn.style.borderRadius = '100%';
    menuIcon.style.fontSize = '6vh';
    menuIcon.style.color = '#f95f22';
    menu.style.width = '0';
}