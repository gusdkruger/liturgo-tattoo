/*
    Header nav link scroll function

    I know i can do this by just putting href="id" in the tag a
    but i don't like how it changes the url to "liturgo-tattoo/#id"
    and it doesn't account for the height of the header or the margin in the element

    element.scrollIntoView();
    also doesn't account for the height of the header or the margin in the element
*/

// Get every link and add a event listener for 'click'
const navLinks = document.querySelectorAll('.header__nav__link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
        // Get attribute inside data-*
        const attribute = navLink.getAttribute('data-link-to-class');
        // Get element for the attribute
        const element = document.querySelector(`.${attribute}`);
        if(element) {
            // Get the top position of the body relative to the viewport
            const bodyTop = document.body.getBoundingClientRect().top;
            // Get the top position of the element relative to the viewport
            const elementTop = element.getBoundingClientRect().top;
            // Scrolls to the top of the element -90px
            window.scrollTo(0, elementTop - bodyTop - 90);
            // The "- 90" is to account for the margin and header
            // Header height is 60px
            // Default margin is each section is 60px
        }
    });
});



/*
    Adjust ".contact__img-container" height so that it matches the height of ".contact__form"

    Had to use JavaScript because as the form width increases its height decreases
*/

function adjustImgContainerHeight() {
    // Get the element to adjust the height
    const imgContainer = document.querySelector('.contact__img-container');
    // If the width is greater than or equal to 900px
    // Has to match the media query that changes the layout of the contact section
    if(window.innerWidth >= 900) {
        // Get the contact form
        const form = document.querySelector('.contact__form');
        if(imgContainer && form) {
            // Set the height to be the same
            imgContainer.style.height = `${form.offsetHeight}px`;
        }
    }
    else if(imgContainer) {
        imgContainer.style.height = 'fit-content';
    }
}

// Add event listener to adjust height of ".contact__img-container"
window.addEventListener('load', adjustImgContainerHeight);
window.addEventListener('resize', adjustImgContainerHeight);
