const navBar = document.querySelector('[data-navBar]')
const navTogglerElements = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]')
const blackBtn = document.querySelector('#blackTheme-btn')
const originalBtn = document.querySelector('#originalTheme-btn')
const body = document.body


function handleElementsOnClick(elements, eventType, callbackFunction) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callbackFunction)
    }
}


function handleToggleNavBar () {
    navBar.classList.toggle('active')
    overlay.classList.toggle('active')
}

handleElementsOnClick(navTogglerElements, 'click', handleToggleNavBar)



blackBtn.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark'); // If dark mode is on, turn it off
    } else {
        body.classList.add('dark'); // If dark mode is off, turn it on
    }
});

originalBtn.addEventListener('click', () => {
    body.classList.remove('dark'); // This will ensure that the original theme button always turns off dark mode
});
