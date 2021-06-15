function scrollAppear() {
    var imageWrapper = document.querySelector('.subHeroSubClass');
    var introPosition = imageWrapper.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.2;
    
    if(introPosition < screenPosition) {
        imageWrapper.classList.add('intro-Appear');
    }
}
addEventListener('scroll', scrollAppear)
