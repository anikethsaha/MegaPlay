
$(document).ready(function(){
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing");
    });
});
// Scrolling Effect
$(window).on("scroll",function(){

    if($(window).scrollTop()){
    $('nav').addClass('black');
    }
    else{
    $('nav').removeClass('black');
    }
})
        new fullpage('#fullpage', {
            //options here
            autoScrolling:true,
            scrollHorizontally: true,
            sectionSelector: '.section',
            slideSelector: '.slide',
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            lazyLoading: true,
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: false,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: true,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            sectionsColor : ['white', 'white','red', 'yellow'],
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            controlArrows: true,
            verticalCentered: true,
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, #footer',
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: true,
            parallax: true,
            parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        })
        //methods
        fullpage_api.setAllowScrolling(false);


      // Menu-toggle button

      $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })


