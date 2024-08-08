document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
    const scrollText = document.querySelector('.scroll-text');
    const scrollImage = document.querySelector('.scroll-image');

    menuIcon.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollSectionTop = document.querySelector('.scroll-section').offsetTop;

        if (scrollPosition > scrollSectionTop - windowHeight / 2) {
            const opacity = (scrollPosition - (scrollSectionTop - windowHeight / 2)) / (windowHeight / 2);
            scrollText.style.opacity = 1 - opacity;
            scrollImage.style.opacity = opacity;
        } else {
            scrollText.style.opacity = 1;
            scrollImage.style.opacity = 0;
        }
    });
});