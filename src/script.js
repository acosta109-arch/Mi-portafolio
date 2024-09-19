
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    new Typed(".typing", {
        strings: ["Desarrollador web", "Blogger", "Diseñador web", "loguero", "Desarrollador móvil"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Desarrollador web", "Blogger", "Diseñador web", "loguero", "Desarrollador móvil"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const backgrounds = [
        "https://www.tupuedes.cl/web/wp-content/uploads/sites/28/2015/11/analista-programador2.0.jpg",
        "https://worldcampus.saintleo.edu/img/article/que-es-la-arquitectura-informatica.webp",
        "https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010144.jpg",
        "https://media.telefonicatech.com/telefonicatech/uploads/2021/1/139914_Imagen-ingeniera-ultima.jpg"
    ];
    
    let currentBackgroundIndex = 0;
    
    function changeBackground() {
        const homeElement = document.querySelector('.home');
        if (homeElement) {
            currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
            homeElement.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
        }
    }
    
    setInterval(changeBackground, 3000);
});