function scrollFlash() {
    const headings = document.querySelector('.headings')
    const introPosition = headings.getBoundingClientRect().top;
    console.log(introPosition);
    const screenPosition = window.innerHeight/2;
    if (introPosition < screenPosition) {
        headings.classList.add(flashAppear);
    }
}
addEventListener('scroll', scrollFlash);