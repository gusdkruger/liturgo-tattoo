function adjustImgContainerHeight() {
    const imgContainer = document.querySelector('.contact__img-container');
    if (window.innerWidth >= 900) {
        const form = document.querySelector('.contact__form');
        if (imgContainer && form) {
            imgContainer.style.height = `${form.offsetHeight}px`;
        }
    }
    else if (imgContainer) {
        imgContainer.style.height = 'fit-content';
    }
}

window.addEventListener('load', adjustImgContainerHeight);
window.addEventListener('resize', adjustImgContainerHeight);
