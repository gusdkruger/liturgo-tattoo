const navLinks = document.querySelectorAll('.header__nav__link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
        const attribute = navLink.getAttribute('data-link-to-class');
        const element = document.querySelector(`.${attribute}`);
        if(element) {
            const bodyRect = document.body.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            window.scrollTo(0, elementRect.top - bodyRect.top - 90);
        }
    });
});

function adjustImgContainerHeight() {
    const imgContainer = document.querySelector('.contact__img-container');
    if(window.innerWidth >= 900) {
        const form = document.querySelector('.contact__form');
        if(imgContainer && form) {
            imgContainer.style.height = `${form.offsetHeight}px`;
        }
    }
    else if(imgContainer) {
        imgContainer.style.height = 'fit-content';
    }
}

window.addEventListener('load', adjustImgContainerHeight);
window.addEventListener('resize', adjustImgContainerHeight);
