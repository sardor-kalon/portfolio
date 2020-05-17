$(document).ready(function () {

    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header-nav-dropdown');
    const overlay = document.querySelector('#overlay');
    const primer = document.querySelector('.primer');
    
    

    mobileMenuToggle.addEventListener('click', function () {
        mobMenu.classList.toggle('active');
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        primer.classList.toggle('active');
        
    });

    window.addEventListener('resize', function () {
        mobMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
        primer.classList.remove('active');
        
    })

})