  
 $(window).on("load",function() {
     
    $(".preloader").fadeOut("slow");

 });
  
  
  
  
  /*====================navbar shrink==================*/
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 30) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
};

$(document).ready(function(){
    /*==============video popup======================*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        alert("ویدئو بزودی بارگزاری میشود");
    
    });



    $('.features-carousel').owlCarousel({
        margin: 5,
        rtl: true,
        loop: true,
        autoplay: false,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 3,
                nav: true
            },
        }
    });

    $('.screen-carousel').owlCarousel({
        margin: 5,
        rtl: true,
        loop: true,
        autoplay: false,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 4,
                nav: true
            },
        }
    });

    $('.testimonials-carousel').owlCarousel({
        margin: 5,
        rtl: true,
        loop: true,
        autoplay: false,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 3,
                nav: true
            },
        }
    });

    $('.team-carousel').owlCarousel({
        margin: 5,
        rtl: true,
        loop: true,
        autoplay: false,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items: 2,
                nav: true
            },
            1000:{
                items: 3,
                nav: true
            },
        }
    });


    $.scrollIt({
        topOffset: -50

    });

    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");

    });

});
//---------------------------------------------------------------//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work__container', {

    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork (){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')

}
linkWork.forEach(l=> l.addEventListener('click', activeWork))

