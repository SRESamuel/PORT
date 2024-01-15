const navBar = document.querySelector('[data-navBar]')
const navTogglerElements = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]')
const themeBtn = document.querySelector('#theme-btn')
const originalBtn = document.querySelector('#originalTheme-btn')
const body = document.querySelector('body')

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

themeBtn.addEventListener('click', () => {
    // Cycle through the colors without going back to original
    let currentClass = body.className; // Using className
    switch (currentClass) {
        case 'black':
            body.className = 'green';
            break;
        case 'green':
            body.className = 'red';
            break;
        case 'red':
            body.className = 'blue';
            break;
        case 'blue':
            body.className = 'yellow';
            break;
        case 'yellow':
            body.className = 'purple';
            break;
        case 'purple':
            body.className = 'g';
            break;
        // If 'g' or any other class, it will go back to 'black'
        default:
            body.className = 'black';
    }
});

originalBtn.addEventListener('click', () => {
    body.className = ''; // Clear any class setting it back to the default color
});


