$(document).ready(function () {
    var app = new application();
    app.init();
});


function application() {
    //variable
    //this.myMap;
}
application.prototype.init = function () {
    this.initTouch();
    this.checkNavBottomDropmenu();
    this.initSliders();
    this.toggleClassBurger();
    this.toggleClassDropMenu();
    this.addMaskedInput();
    this.initRegValidation();
    this.toggleClassBusinessMark();
    this.initMap();
    this.setIndentsContactsMap();
    this.toggleClassBusinessDrop();
}

// Mobile device сheck
application.prototype.initTouch = function () {
    if ('ontouchstart' in document.documentElement) {
        $('html').addClass('touch');
    }
}
// Checking the contents of the navigation menu
application.prototype.checkNavBottomDropmenu = function () {
    if($(".nav-bottom__item").length) {
        $(".nav-bottom__item").each(function () {
           $(".nav-bottom__item").has(".nav-bottom__drop").addClass("nav-bottom__item--contains");
        });
    }
}
// Slider initialization
application.prototype.initSliders = function () {
    // Partners
    if ($('.js-partners').length) {
        new Swiper(".js-partners", {
            slidesPerView: 1,
            slidesPerColumn: 3,
            spaceBetween: 16,
            grabCursor: true,
            mousewheel: true,
            scrollbar: {
                el: ".js-partners .swiper-scrollbar",
            },
            breakpoints: {
                // when window width is >= {value}px
                768: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 24,
                },
            },
        });
    }

    // Awards
    if ($('.js-awards').length) {
        var swiperAwards = null;

        function initSwiperAwards () {
            swiperAwards = new Swiper('.js-awards', {
                slidesPerView: 1,
                slidesPerColumn: 3,
                spaceBetween: 16,
                grabCursor: true,
                mousewheel: true,
                scrollbar: {
                    el: ".js-awards .swiper-scrollbar",
                },
            });
        }
        initSwiperAwards();

        function reinitSwiperAwards() {
            if (window.matchMedia("(min-width:768px)").matches) {
                swiperAwards.disable();
                swiperAwards.update();
                $(".js-awards").addClass("disabled");

            } else if (window.matchMedia("(max-width:767.98px)").matches) {
                swiperAwards.enable();
                swiperAwards.update();
                $(".js-awards").removeClass("disabled");
            }
        }

        $(window).on('resize', reinitSwiperAwards).trigger('resize');
    }

    // Vendors
    if ($('.js-vendors').length) {
        new Swiper(".js-vendors", {
            slidesPerView: 2,
            grabCursor: true,
            mousewheel: true,
            scrollbar: {
                el: ".js-vendors .swiper-scrollbar",
            },
            breakpoints: {
                // when window width is >= {value}px
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1440: {
                    slidesPerView: 5,
                },
            },
        });
    }
}
// Menu-burger button
application.prototype.toggleClassBurger = function () {
    $(".menu-btn").on("click", function () {
        $(this).toggleClass("active");
    });
}
// Menu top "nav-bottom__drop"
application.prototype.toggleClassDropMenu = function () {
    responsiveDropMenu();

    function responsiveDropMenu() {
        if (window.matchMedia("(max-width:767.98px)").matches) {
            $('.js-nav-bottom-link').on('click', function () {
                if (!$(this).closest('.nav-bottom__item--contains').hasClass('active')) {
                    $(".nav-bottom__item--contains").removeClass("active");
                    $(this).closest(".nav-bottom__item--contains").addClass("active");
                }
                else if ($(this).closest('.nav-bottom__item--contains').hasClass('active')) {
                    $(this).closest('.nav-bottom__item--contains').removeClass('active');
                }
            });
        } else { return }
    }
}
// Mobile number mask
application.prototype.addMaskedInput = function () {
    $(".isPhone").mask("+7 (999) 999-99-99", { autoclear: false });
}
// Validation of registration form
application.prototype.initRegValidation = function () {
    $(function() {
        $("form.registration").validate({
            // Specify validation rules
            rules: {
                SURNAME: "required",
                NAME: "required",
                MIDDLENAME: "required",
                PHONE: "required",
                EMAIL: {
                    required: true,
                    email: true
                },
                TAXPAYERID: "required",
                LEGALNAME: "required",
                BRANDNAME: "required",
                SITE: "required",
            },
            // Specify validation error messages
            messages: {
                SURNAME: "Поле не заполнено",
                NAME: "Поле не заполнено",
                MIDDLENAME: "Поле не заполнено",
                PHONE: "Поле не заполнено",
                EMAIL: "Поле не заполнено",
                TAXPAYERID: "Поле не заполнено",
                LEGALNAME: "Поле не заполнено",
                BRANDNAME: "Поле не заполнено",
                SITE: "Поле не заполнено",
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
            }
        });
    });
}
// Business-solutions marks behaviour
application.prototype.toggleClassBusinessMark = function () {
    if($(".business-solution .js-item-mark").length) {
        $(document).on("click", function (e) {
            if(!$(".business-solution .js-item-mark").is(e.target)) {
                $(".business-solution .js-item-mark").removeClass("active");
                $(".business-solution__item").removeClass("active");
                $(".business-solution__item-box").removeClass("has-active");
            }
        });

        $(".business-solution .js-item-mark").on("click", function () {
            if (!$(this).hasClass("active")) {
                $(".business-solution .js-item-mark").removeClass("active");
                $(".business-solution__item").removeClass("active");
                $(this).addClass("active");
                $(this).next(".business-solution__item").addClass("active");
                $(".business-solution__item-box").addClass("has-active");

                $("html, body").animate({
                    scrollTop: $(".business-solution").offset().top
                }, 300);

                $(".js-item-mark").removeClass("animated animation-delay-2 animation-delay-3 animation-delay-4 animation-delay-5 animation-delay-6 animation-delay-7 animation-delay-8");
            } else {
                $(this).removeClass("active");
                $(this).next(".business-solution__item").removeClass("active");
                $(".business-solution__item-box").removeClass("has-active");
            }
        });
    }
}
// Map initialization
application.prototype.initMap = function () {
    if($("#map").length) {
        var coords = null;
        var ratio = null;

        if (window.matchMedia("(max-width:767.98px)").matches) {
            zoomval = 12;
            coords = [55.79, 37.76];
            ratio = 1;
        }
        else if (window.matchMedia("(min-width:768px)").matches) {
            zoomval = 11;
            coords = [55.76, 37.63];
            ratio = 2;
        }

        ymaps.ready(init);
        $(window).on("resize", init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                center: coords,
                controls: [],
                zoom: zoomval,
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([55.752019,37.759488]);
            myMap.geoObjects.add(myPlacemark);
            myMap.controls.add('zoomControl', {position: {right: '10px', bottom: 80 * ratio + 'px'}});
            myMap.behaviors.disable('scrollZoom');
            //на мобильных устройствах... (проверяем по userAgent браузера)
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                //... отключаем перетаскивание карты
                myMap.behaviors.disable('drag');
            }
        }

    }
}
// Contacts map indents for mobile
application.prototype.setIndentsContactsMap = function () {
    if($("#map").length) {
        setHeight();
        $(window).on("resize", setHeight);

        function setHeight() {
            if (window.matchMedia("(max-width:767.98px)").matches) {
                var height = $(".js-contacts-map-board").outerHeight();

                $(".js-contacts-map-board").css({"margin-bottom" : -height});
            } else { return }
        }
    }
}
// Business solutions mobile dropdown menu
application.prototype.toggleClassBusinessDrop = function () {
    if (window.matchMedia("(max-width:767.98px)").matches) {
        $('.js-bs-drop').hide();

        $('.js-bs-btn').on('click', function () {
            if (!$(this).hasClass('active')) {
                $(".js-bs-btn").removeClass("active");
                $(".js-bs-drop").slideUp(300);
                $(this).addClass("active");
                $(this).next('.js-bs-drop').addClass("active").slideDown(300);
            }
            else if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.js-bs-drop').removeClass('active').slideUp(300);
            }
        });
    } else { return }
}

//# sourceMappingURL=script.js.map
