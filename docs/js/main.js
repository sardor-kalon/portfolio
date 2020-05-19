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

$(document).ready(function () {

    let containerEl = document.querySelector("#portfolio-projects");

        let mixer = mixitup(containerEl, {
            classNames: {
                block:""
            }
        });

    const filterToggles = document.querySelectorAll(".portfolio-cards-toggle__item");
    const portfolioBigCards = document.querySelectorAll(".portfolio-projects__item");

    for (let i = 0; i < filterToggles.length; i++) {
        filterToggles[i].addEventListener("click", function () {
            if (i == 0) {
                for (let j = 0; j<2; j++) {
                portfolioBigCards[j].classList.add("portfolio-projects__item--big")
                }
            } else {
                for (let j = 0; j<2; j++) {
                portfolioBigCards[j].classList.remove("portfolio-projects__item--big") 
                }
            }
        });
    }



})