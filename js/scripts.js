$(document).ready(() => {
    /**
     * TABS
     */
    let item = $('.tab');
    let itemContent = $('.tab__content');


    item.on('click', (e) => {
        if (!$(e.target).hasClass('tab_active')) {
            item.removeClass("tab_active");
            itemContent.fadeOut(500);
            itemContent.delay(500).eq($(this).index()).fadeIn(500);
            $(e.target).addClass("tab_active");
        }
    });

    /**
     * SLICK SLIDER
     */
    let slider = $('.firstSlider');

    if (slider.length > 0) {

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

    let itemsSlider = $('.tab__content__wrapper');

    if (itemsSlider.length > 0) {

        itemsSlider.slick({
            infinite: true,
            arrows: true,
            dots: false,
            slidesToShow: 5,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }

    $('#city').select2();
    $('#store').select2();

    // $.datepicker.setDefaults( $.datepicker.regional[ "" ] );
    $("#date").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: new Date($('#hiddendelivdate').val()),
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    });
    $("#anim").on("change", function () {
        $("#datepicker").datepicker("option", "showAnim", 'fadeIn');
    });
});