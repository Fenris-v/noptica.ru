$(document).ready(() => {
    /**
     * TABS
     */
    let item = $('.tab');
    let itemContent = $('.tab__content');



    item.on('click', function () {
        console.log(123);
        if (!$(this).hasClass('tab_active')) {
            console.log(456);
            item.removeClass("tab_active");
            itemContent.fadeOut(500);
            itemContent.delay(500).eq($(this).index()).fadeIn(500);
            $(this).addClass("tab_active");
        }
    });

    /**
     * SLICK SLIDER
     */
    let slider = $('.firstSlider');

    if(slider.length > 0) {

        slider.slick({
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 0,
                settings: {
                    arrows: false
                }
            },
            ]
        });
    }
});