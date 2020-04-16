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

        /**
         * HAMBURGER
         */
        $('.menu-toggle-inner').on('click', function (e) {
            $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
            $('.headerNav_adaptive').toggleClass('header_opened');
        });

        $('#city').select2();
        $('#store').select2();

        $("#date").datepicker({
            dateFormat: "dd-mm-yy",
            minDate: new Date($('#hiddendelivdate').val()),
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        });
        $("#anim").on("change", function () {
            $("#datepicker").datepicker("option", "showAnim", 'fadeIn');
        });

        /**
         * Ya.maps
         */
        let optionList;
        if ($('#yandex_map').length != 0) {

            ymaps.ready(init);
            let myMap;
            let item;
            let myPoint;

            function init() {

                myMap = new ymaps.Map("yandex_map", {
                    center: [59.936918, 30.514327],
                    zoom: 10
                });
                myMap.behaviors.disable('scrollZoom');

                $.getJSON('data/data.json', function (data) {

                    let myPointArr = [];

                    for (let key in data) {
                        let dataPoint = data[key];

                        for (let keyPoint in dataPoint) {
                            myPointArr.push(dataPoint[keyPoint]);
                        }

                        item = document.createElement('option');
                        item.innerText = myPointArr[1].hintContent;
                        $('#store').append(item);

                        myPoint = new ymaps.Placemark(myPointArr[0], myPointArr[1]);

                        myPoint.events.add('click', (e) => {
                            console.log(e.get('target').properties.get('hintContent'));
                        });

                        myMap.geoObjects
                            .add(myPoint);


                        myPointArr = [];
                    }
                });
            }
        }
    }
);