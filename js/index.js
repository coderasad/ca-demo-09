
//-----------
// Variables
//-----------

//-------
// Start
//-------

$(function(){
    testi_carouselInit();
    // videoControll();
    // videoControll_2();
});

//-----------
// Functions
//-----------

//function for hero video
function videoControll() {
    $(".video_1")
        .parent()
        .click(function() {
            if (
                $(this)
                    .children(".video_1")
                    .get(0).paused
            ) {
                $(this)
                    .children(".video_1")
                    .get(0)
                    .play();
                $(this)
                    .children(".playpause")
                    .fadeOut();
                $(".background-image-holder img").hide();
            } else {
                $(this)
                    .children(".video_1")
                    .get(0)
                    .pause();
                $(this)
                    .children(".playpause")
                    .fadeIn();
                $(".background-image-holder img").show();
            }
        });
}

//function for the Our Process video
function videoControll_2() {
    $(".video.video_2")
        .parent()
        .click(function() {
            if (
                $(this)
                    .children(".video_2")
                    .get(0).paused
            ) {
                $(this)
                    .children(".video_2")
                    .get(0)
                    .play();
                $(this)
                    .children(".playpause")
                    .fadeOut();
                $(".background-image-holder_2 img, .landing_box").hide();
            } else {
                $(this)
                    .children(".video_2")
                    .get(0)
                    .pause();
                $(this)
                    .children(".playpause")
                    .fadeIn();
                $(".background-image-holder_2 img, .landing_box").show();
            }
        });
}

//testimonial carousel owl-carousel
function testi_carouselInit() {
    $(".owl-carousel.testi_carousel").owlCarousel({
        autoplay: false,
        // autoplayTimeout: 5000,
        dots: false,
        loop: true,
        margin: 58,
        stagePadding: 75,
        // autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                stagePadding: 25,
                margin: 38
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
}
