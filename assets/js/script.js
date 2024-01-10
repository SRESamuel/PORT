const navBar = document.querySelector('[data-navBar]')
const navTogglerElements = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]')



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

