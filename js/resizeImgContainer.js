function adjustImgContainerHeight() {
    let imgContainer = document.querySelector('.contact__img-container');
    if (screen.width >= 900) {
        let form = document.querySelector('.contact__form');
        if (imgContainer && form) {
            imgContainer.style.height = `${form.offsetHeight}px`;
        }
    }
    else {
        imgContainer.style.height = `100%`;
    }
}

window.addEventListener('load', adjustImgContainerHeight);
window.addEventListener('resize', adjustImgContainerHeight);
