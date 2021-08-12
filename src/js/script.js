// const { each } = require("jquery");

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
    this.tmp();
    this.topMenu();
    /*this.changeHeaderOnScroll();
    this.clickHeaderSidebarBtn();
    this.addClassAccordion();
    this.locationHeaderSidebarBtn();
    this.initSliders();
    this.reinitSliders();
    this.pageTenderTabs();
    this.pageWindowOptionsTabs();
    this.changeWindowConfig();
    this.sidebarFilter();
    this.toggleHiddenText();
    this.toggleFooterGoodsDesktop();
    this.toggleReadyCardCart();
    this.addMaskedInput();
    this.calcReviewOpacityArea();
    this.iqPieHover();
    this.animationMainScreen();
    this.getAdditionalParamsCompare();
    this.initSvgMap();*/
}

//Проверка на моб.
application.prototype.initTouch = function () {
    if ('ontouchstart' in document.documentElement) {
        $('html').addClass('touch');
    }
}
//tmp
application.prototype.tmp = function () {
    if($(".nav-bottom__item").length) {
        $(".nav-bottom__item").each(function () {
           $(".nav-bottom__item").has(".nav-bottom__drop").addClass("nav-bottom__item--contains");
        });
    }
}
//Меню верх
application.prototype.topMenu = function () {
    //desktop
    if (!$('html').hasClass('touch')) {
        // Shows drop-menu when it's parent is hovered.
        $('.js-drop-menu').parent().hover(function () {
            $(this).find('>.js-drop-menu').stop();
            $(this).find('>.js-drop-menu').slideDown(300);
            $(this).addClass('active');
        }, function () {
            $(this).find('>.js-drop-menu').stop();
            $(this).find('>.js-drop-menu').slideUp(150);
            $(this).removeClass('active');
        });
        // Shows drop-submenu when it's parent is hovered.
        $('.js-drop-submenu').parent().hover(function () {
            // Вывод __drop-submenu одинаковой высоты с __drop-menu
            var h = $(this).closest('.js-drop-menu').innerHeight();
            $(this).find('>.js-drop-submenu').css({
                'min-height': h,
            });

            $(this).find('>.js-drop-submenu').stop();
            $(this).find('>.js-drop-submenu').animate({ width: "toggle" });
            $(this).toggleClass('active');
        });

        if (window.matchMedia("(max-width:1199px)").matches) {
            $('.goods-menu__link').hover(function () {
                $(this).addClass('active');
            }, function () {
                $(this).removeClass('active');
            });
        }
    }
    else //mobile
    {
        $('.header-bottom__menu .goods-menu__link').on('click', function (e) {
            if ($(this).parent().hasClass('active')) return true;
            e.preventDefault();

            ///////////////
            $('.header-bottom__menu .goods-menu__item.active').each(function (i, el) {
                $(el).removeClass('active');
                $(el).find('.js-drop-menu').slideUp(150);
            });
            $('.header-bottom__menu .goods-menu__drop-menu-item').each(function (i, el) {
                $(el).removeClass('active');
                $(el).find('.js-drop-submenu').hide();
            });
            ///////////////
            $(this).parent().addClass('active');
            $(this).parent().find('>.js-drop-menu').slideDown(300);
        });

        $('.header-bottom__menu .goods-menu__drop-menu-link').on('click', function (e) {
            if ($(this).parent().hasClass('active')) return true;
            if (!$(this).parent().find('.js-drop-submenu').length) return true;
            e.preventDefault();

            $('.header-bottom__menu .goods-menu__drop-menu-item').each(function (i, el) {
                $(el).removeClass('active');
                $(el).find('.js-drop-submenu').hide();
            });

            $(this).parent().addClass('active');

            $(this).parent().find('.js-drop-submenu').animate({ width: "toggle" });
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.header-bottom__menu').length) {
                $('.header-bottom__menu .goods-menu__item').removeClass('active');
                $('.header-bottom__menu').find('.js-drop-menu').slideUp(150);
            }
        });
    }
}
// Хедер при скролле
application.prototype.changeHeaderOnScroll = function () {
    $(window).on('scroll', function(event){
        if (window.matchMedia("(min-width:768px)").matches) {
            if ($(this).scrollTop() > 25){
                $('.header').addClass('header--fixed');
                $('.header--fixed .header__logo-text, .header--fixed .header-sidebar .header__logo-text')
                    .addClass("header__logo-text--hide")
                    .removeClass("header__logo-text--show");
            }
            else if ($(this).scrollTop() < 25) {
                $('.header').removeClass('header--fixed');
                $('.header__logo-text.header__logo-text--hide, .header--fixed .header-sidebar .header__logo-text')
                    .addClass("header__logo-text--show")
                    .removeClass("header__logo-text--hide");
            }
        }
    });
}
// Хедер сайдбар
application.prototype.clickHeaderSidebarBtn = function () {
    $('.js-h-sb-btn').on('click', function () {
        $('.header-sidebar').addClass('show');
        $('body').addClass('overflow-hidden');
    });

    $('.js-h-sb-top-btn').on('click', function () {
        $('.header-sidebar').removeClass('show');
        $('body').removeClass('overflow-hidden');
    });
}
// Аккордион (добавление класса для css)
application.prototype.addClassAccordion = function () {
    $('.js-btn-topmost').on('click', function () {
        if (!$(this).closest('.accordion__item').hasClass('active')) {
            $('.accordion__item').removeClass('active')
            $(this).closest('.accordion__item').addClass('active');
        }
        else if ($(this).closest('.accordion__item').hasClass('active')) {
            $(this).closest('.accordion__item').removeClass('active');
        }
    });
}
// Хедер сайдбар аккордион (надстройка для <a>)
application.prototype.locationHeaderSidebarBtn = function () {
    $('.js-accordion-link').on('click', function (e) {
        let href = $(this).attr('href');
        $(location).attr('href', href);
    });
}
// Инициация слайдера
application.prototype.initSliders = function () {
    // Slider main feedback.
    if ($('.js-main-feedback-slider').length) {
        let swiperMainFeedback = new Swiper('.js-main-feedback-slider', {
            slidesPerView: 'auto',
            spaceBetween: 80,
        });
    }

    // Slider prices.
    if ($('.js-prices-slider').length) {
        let swiperPrices = new Swiper('.js-prices-slider', {
            slidesPerView: 3,
            spaceBetween: 20,
        });
    }

    // Slider examples.
    if ($('.js-examples-slider').length) {
        const slider = $(".js-examples-slider");

        var swiperExamples = new Swiper('.js-examples-slider', {
            allowTouchMove: false,
            navigation: {
                nextEl: '.examples__slider .swiper-button-next',
                prevEl: '.examples__slider .swiper-button-prev',
            },
            pagination: {
                el: '.examples__slider .swiper-pagination',
                clickable: true,
            },
            on: {
                init: function () {
                    slider.find(".examples__view").on({
                        'touchstart mousedown': function (e) {
                            $(this).on('touchmove mousemove', stop);
                            stop(e);
                        },
                        'touchend mouseup': function (e) {
                            $(this).off('touchmove mousemove', move);
                            move(e);
                        }
                    });

                    slider.find(".examples__desc").on({
                        'touchstart mousedown': function (e) {
                            $(this).on('touchmove mousemove', move);
                            move(e);
                        },
                        'touchend mouseup': function (e) {
                            $(this).off('touchmove mousemove', stop);
                            stop(e);
                        }
                    });

                    function move(e) {
                        swiperExamples.allowTouchMove = true;
                    }
                    function stop(e) {
                        swiperExamples.allowTouchMove = false;
                    }
                }
            },
        });
    }

    // Slider review.
    if ($('.js-review-slider').length) {
        new Swiper('.js-review-slider', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            breakpoints: {
                768: {
                    spaceBetween: 40,
                },
                992: {
                    spaceBetween: 50,
                },
                1200: {
                    spaceBetween: 80,
                }
            }
        });
    }

    // Slider promo.
    if ($('.js-promo-slider').length) {
        let swiperAdv = new Swiper('.js-promo-slider', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                1200: {
                    spaceBetween: 20,
                }
            }
        });
    }

    // Slider care-main.
    if ($('.js-care-main').length) {
        let swiperCareMain = new Swiper('.js-care-main', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                992: {
                    spaceBetween: 40,
                }
            }
        });
    }

    // Slider care-inner.
    if ($('.js-care-inner').length) {
        let swiperCareInner = new Swiper('.js-care-inner', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
        });
    }

    // Slider video feedback.
    if ($('.js-v-feedback').length) {
        new Swiper('.js-v-feedback', {
            slidesPerView: 'auto',
            spaceBetween: 28,
            pagination: {
                el: '.v-feedback .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    spaceBetween: 32,
                },
                1200: {
                    navigation: {
                        nextEl: '.v-feedback .swiper-button-next',
                        prevEl: '.v-feedback .swiper-button-prev',
                    },
                }
            }
        });
    }

    // Slider video feedback with experts.
    if ($('.js-v-feedback-expert').length) {
        new Swiper('.js-v-feedback-expert', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            navigation: {
                nextEl: '.v-feedback--expert .swiper-button-next',
                prevEl: '.v-feedback--expert .swiper-button-prev',
            },
            pagination: {
                el: '.v-feedback--expert .swiper-pagination',
                clickable: true,
            },
        });
    }

    // Slider about__advantage.
    if ($('.js-about-advantage').length) {
        let swiperAboutAdvantage = new Swiper('.js-about-advantage', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                1200: {
                    spaceBetween: 40,
                }
            }
        });
    }

    // Slider production__popular.
    if ($('.js-pop-goods').length) {
        let swiperPopGoods = new Swiper('.js-pop-goods', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                1200: {
                    spaceBetween: 20,
                }
            }
        });
    }

    // Slider ready-cards.
    if ($('.js-ready-cards').length) {
        let swiperReadyCards = new Swiper('.js-ready-cards', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                1200: {
                    spaceBetween: 20,
                }
            }
        });
    }

    // Slider dual.
    if ($('.js-dual-slider').length) {
        let swiperDual = new Swiper('.js-dual-slider', {
            simulateTouch: false,
            navigation: {
                nextEl: '.inner__dual-slider .swiper-button-next',
                prevEl: '.inner__dual-slider .swiper-button-prev',
            },
            pagination: {
                el: '.inner__dual-slider .swiper-pagination',
                clickable: true,
            },
        });
    }

    // Slider inner for just images.
    if ($('.js-inner-slider').length) {
        let swiperInnerSlider = new Swiper('.js-inner-slider', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.inner__slider .swiper-button-next',
                prevEl: '.inner__slider .swiper-button-prev',
            },
            pagination: {
                el: '.inner__slider .swiper-pagination',
            },
        });
    }

    // Slider for seo-cards.
    if ($('.js-seo-card-slider').length) {
        new Swiper('.js-seo-card-slider', {
            direction: 'horizontal',
            mousewheel: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            breakpoints: {
                1200: {
                    spaceBetween: 20,
                }
            }
        });
    }

    // Slider with thumbs.
    if ($('.js-gallery-thumbs').length) {
        let galleryThumbs = new Swiper('.js-gallery-thumbs', {
            spaceBetween: 12,
            slidesPerView: 'auto',
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                768: {
                    spaceBetween: 16,
                },
                1200: {
                    spaceBetween: 20,
                }
            }
        });
        let galleryTop = new Swiper('.js-gallery-top', {
            navigation: {
                nextEl: '.inner__slider-top .swiper-button-next',
                prevEl: '.inner__slider-top .swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }
}
// Инициация/переинициализация слайдера
application.prototype.reinitSliders = function () {
    // Slider window config tabs
    if ($('.js-w-config-slider').length) {
        let swiperIndividuality = null;
        function reinitSliderIndivid() {
            // if ($(window).width() >= 992 && swiperIndividuality) {
            //   swiperIndividuality.destroy();
            //   swiperIndividuality = null;
            // }
            // else if ($(window).width() <= 991 && swiperIndividuality === null) {
            //   swiperIndividuality = new Swiper('.js-w-config-slider', {
            //     slidesPerView: 'auto',
            //     spaceBetween: 0,
            //   });
            // }

            swiperIndividuality = new Swiper('.js-w-config-slider', {
                slidesPerView: 'auto',
                spaceBetween: 0,
            });
        }
        reinitSliderIndivid();
        $(window).on('resize', reinitSliderIndivid);
    }

    // Slider inner__sidebar
    if ($('.js-sidebar-menu').length) {
        let swiperSidebarMenu = null;
        function reinitSliderSidebarMenu() {
            if ($(window).width() >= 1200 && swiperSidebarMenu) {
                swiperSidebarMenu.destroy();
                swiperSidebarMenu = null;
            }
            else if ($(window).width() <= 1199 && swiperSidebarMenu === null) {
                swiperSidebarMenu = new Swiper('.js-sidebar-menu', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        };
        reinitSliderSidebarMenu();
        $(window).on('resize', reinitSliderSidebarMenu);
    }

    // Slider inner__slider-menu
    if ($('.js-slidermenu').length) {
        function reinitSliderMenu() {
            swiperSliderMenu = new Swiper('.js-slidermenu', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        };
        reinitSliderMenu();
        $(window).on('resize', reinitSliderMenu);
    }

    // Slider feedback-tabs
    if ($('.js-feedback-tabs').length) {
        let swiperFeedbackTabs = null;
        function reinitSliderFeedbackTabs() {
            if ($(window).width() >= 375 && swiperFeedbackTabs) {
                swiperFeedbackTabs.destroy();
                swiperFeedbackTabs = null;
            }
            else if ($(window).width() <= 374 && swiperFeedbackTabs === null) {
                swiperFeedbackTabs = new Swiper('.js-feedback-tabs', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                });
            }
        };
        reinitSliderFeedbackTabs();
        $(window).on('resize', reinitSliderFeedbackTabs);
    }

    // Slider payment tabs
    if ($('.js-payment-tabs').length) {
        let swiperPaymentTabs = null;
        function reinitSliderPaymentTabs() {
            if ($(window).width() >= 1200 && swiperPaymentTabs) {
                swiperPaymentTabs.destroy();
                swiperPaymentTabs = null;
            }
            else if ($(window).width() <= 1199 && swiperPaymentTabs === null) {
                swiperPaymentTabs = new Swiper('.js-payment-tabs', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                });
            }
        };
        reinitSliderPaymentTabs();
        $(window).on('resize', reinitSliderPaymentTabs);
    }

    // Slider tender tabs
    if ($('.js-tender-tabs').length) {
        let swiperTenderTabs = null;
        function reinitSliderTenderTabs() {
            if ($(window).width() >= 768 && swiperTenderTabs) {
                swiperTenderTabs.destroy();
                swiperTenderTabs = null;
            }
            else if ($(window).width() <= 767 && swiperTenderTabs === null) {
                swiperTenderTabs = new Swiper('.js-tender-tabs', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                });
            }
        };
        reinitSliderTenderTabs();
        $(window).on('resize', reinitSliderTenderTabs);
    }

    // Slider w-options tabs
    if ($('.js-w-options-tabs').length) {
        let swiperWindowOptionsTabs = null;
        function reinitSliderWindowOptionsTabs() {
            if ($(window).width() >= 768 && swiperWindowOptionsTabs) {
                swiperWindowOptionsTabs.destroy();
                swiperWindowOptionsTabs = null;
            }
            else if ($(window).width() <= 767 && swiperWindowOptionsTabs === null) {
                swiperWindowOptionsTabs = new Swiper('.js-w-options-tabs', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                });
            }
        };
        reinitSliderWindowOptionsTabs();
        $(window).on('resize', reinitSliderWindowOptionsTabs);
    }

    // Slider about__values
    if ($('.js-about-values').length) {
        let swiperAboutVal = null;
        function reinitSliderAboutVal() {
            if ($(window).width() >= 992 && swiperAboutVal) {
                swiperAboutVal.destroy();
                swiperAboutVal = null;
            }
            else if ($(window).width() <= 991 && swiperAboutVal === null) {
                swiperAboutVal = new Swiper('.js-about-values', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    pagination: {
                        el: '.about__values-slider .swiper-pagination',
                        clickable: true,
                    },
                });
            }
        };
        reinitSliderAboutVal();
        $(window).on('resize', reinitSliderAboutVal);
    }

    // Slider details influences
    if ($('.js-details-influences').length) {
        let swiperIndividuality = null;
        function reinitSliderIndivid() {
            if ($(window).width() >= 768 && swiperIndividuality) {
                swiperIndividuality.destroy();
                swiperIndividuality = null;
            }
            else if ($(window).width() <= 767 && swiperIndividuality === null) {
                swiperIndividuality = new Swiper('.js-details-influences', {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                });
            }
        }
        reinitSliderIndivid();
        $(window).on('resize', reinitSliderIndivid);
    }

    // Slider window config tabs
    if ($('.js-prices-product-slider').length) {
        let swiperIndividuality = null;
        function reinitSliderIndivid() {
            if ($(window).width() >= 1440 && swiperIndividuality) {
                swiperIndividuality.destroy();
                swiperIndividuality = null;
            }
            else if ($(window).width() <= 1439 && swiperIndividuality === null) {
                swiperIndividuality = new Swiper('.js-prices-product-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                });
            }
        }
        reinitSliderIndivid();
        $(window).on('resize', reinitSliderIndivid);
    }

    // Slider for seat tabs.
    if ($('.js-w-seat__tabs').length) {
        let swiperProdTypes = null;
        function reinitSliderProdTypes() {
            if ($(window).width() >= 576 && swiperProdTypes) {
                swiperProdTypes.destroy();
                swiperProdTypes = null;
            }
            else if ($(window).width() < 576 && swiperProdTypes === null) {
                swiperProdTypes = new Swiper('.js-w-seat__tabs', {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                });
            }
        }
        reinitSliderProdTypes();
        $(window).on('resize', reinitSliderProdTypes);
    }

    // Slider for prod-types.
    if ($('.js-prod-types-slider').length) {
        let swiperProdTypes = null;
        function reinitSliderProdTypes() {
            if ($(window).width() >= 768 && swiperProdTypes) {
                swiperProdTypes.destroy();
                swiperProdTypes = null;
            }
            else if ($(window).width() <= 767 && swiperProdTypes === null) {
                swiperProdTypes = new Swiper('.js-prod-types-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                });
            }
        }
        reinitSliderProdTypes();
        $(window).on('resize', reinitSliderProdTypes);
    }
}
// Инициация слайдера стр. Тендеры
application.prototype.pageTenderTabs = function () {
    new Swiper('.tender__assortment-cards .show', {
        direction: 'horizontal',
        mousewheel: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        breakpoints: {
            1200: {
                spaceBetween: 20
            }
        }
    });
    $('a[data-type="tab-tender"]').on('shown.bs.tab', function (e) {
        new Swiper($(e.target).attr('href'), {
            direction: 'horizontal',
            mousewheel: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
            breakpoints: {
                1200: {
                    spaceBetween: 20
                }
            }
        });
    });
}
// Инициация слайдера w-options(landing page)
application.prototype.pageWindowOptionsTabs = function () {
    if ($('.js-w-options-equip').length) {
        new Swiper('.w-options__tab-cnt .show .js-w-options-equip', {
            slidesPerView: 'auto',
            spaceBetween: 12,
        });
        $('a[data-type="flatRoomTab"]').on('shown.bs.tab', function (e) {
            new Swiper($($(e.target).attr('href')).find('.js-w-options-equip')[0], {
                slidesPerView: 'auto',
                spaceBetween: 12,
            });
        });
    }
}
// Изменение конфигурации окна
application.prototype.changeWindowConfig = function () {
    $('.js-change-pic').on('click', function () {
        let type = $(this).parents('.js-config-tab-cnt').attr('data-type');
        let src = $(this).attr('data-src');
        let name = $(this).attr('data-name');
        $('.js-main-pic [data-type=' + type + ']').attr('src', src);
        $('.js-main-pic [data-type=' + type + ']').attr('data-name', name);
    });

    // defines which elem is selected.
    $(document).on('click', ".js-change-pic", function () {
        $(this).closest('.js-config-tab-cnt').find('.js-change-pic').removeClass('selected');
        $(this).addClass('selected');
    });
}
// Фильтр внутренних страниц
application.prototype.sidebarFilter = function () {
    $('.inner__filter-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).siblings('.inner__filter-cnt').addClass('open');
        } else {
            $(this).siblings('.inner__filter-cnt').removeClass('open');
        }
    });

    $('.js-filter-btn').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.inner__filter').find('.inner__filter-body').toggleClass('active');
    });
}
// Скрыть/показать текст
application.prototype.toggleHiddenText = function () {
    $('.js-toggle-hidden').click(function () {
        $('.js-hidden-cnt').toggleClass('hide');
        if ($('.js-hidden-cnt').hasClass('hide')) {
            if ($('.js-hidden-cnt').attr('data-type') === 'more') {
                $('.js-toggle-hidden').html('Подробнее');
            }
            else if ($('.js-hidden-cnt').attr('data-type') === 'descr') {
                $('.js-toggle-hidden').html('Подробное описание');
            }
            else if ($('.js-hidden-cnt').attr('data-type') === 'read') {
                $('.js-toggle-hidden').html('Читать полностью');
            }
        }
        else {
            $('.js-toggle-hidden').html('Скрыть');
        }
        return false;
    });
}
// Раскрытие/скрытие каталога в футере
application.prototype.toggleFooterGoodsDesktop = function () {
    $('.js-f-goods-cnt-wrap').hide();

    $('.js-f-goods-toggle').on('click', function () {
        $(this).closest('.footer-goods__header').toggleClass('active');

        if ($(this).closest('.footer-goods__header').hasClass('active')) { $(this).closest('.footer-goods').find('.js-f-goods-cnt-wrap').slideDown(300); }
        else { $(this).closest('.footer-goods').find('.js-f-goods-cnt-wrap').slideUp(300); }
    });

    $('.js-f-goods-dropitem-toggle').on('click', function () {
        $('.footer-goods__dropitem').removeClass('active');
        $(this).parent().parent().addClass('active');
    });
}
// Готовые решения корзина
application.prototype.toggleReadyCardCart = function () {
    $('.js-ready-card-cart').on('click', function () {
        $(this).toggleClass('selected');
    });
}
// Маска мобильного номера
application.prototype.addMaskedInput = function () {
    $(".isPhone").mask("+7 (999) 999-99-99", { autoclear: false });
}
// Ревью расчёт области затенения
application.prototype.calcReviewOpacityArea = function () {
    if ($('.js-review').length) {
        function calcValues() {
            var elOuterWidth = $('.js-review').outerWidth();
            var elInnerWidth = $('.js-review').width();
            var resPosition = elInnerWidth;
            var resWidth = elOuterWidth - elInnerWidth;

            $('.review__mask').css({
                'left': resPosition + 'px',
                'width': resWidth + 'px',
            });

            if (window.matchMedia("(min-width:576px)").matches) {
                $('.review .swiper-slide:last-of-type').css({
                    'width': 290 + resWidth + 'px',
                    'padding-right': resWidth + 'px',
                });
            }
            else if (window.matchMedia("(max-width:575.98px)").matches) {
                $('.review .swiper-slide:last-of-type').css({
                    'width': 264 + resWidth + 'px',
                    'padding-right': resWidth + 'px',
                });
            }
        }

        calcValues();
        $(window).on('resize', calcValues).trigger('resize');
    }
}
// IQ service анимация наведения
application.prototype.iqPieHover = function () {
    if ($('.care-inner').length) {
        $( ".part--panel--area" ).hover(
            function() {

                $('.pie--button').hide();

                $('.part--panel').hide();
                $(this).find('.part--panel').show();

                $('.part--panel--area').find('.outline--element').css('opacity','.1');
                $(this).find('.outline--element').css('opacity','1');

                $('.part--panel--area').find('.care-hand').css('opacity','.1');
                $(this).find('.care-hand').css('opacity','1');


                if($(this).hasClass('care-inner__right-wrapper-top--left-part')) {

                    $('.care-inner__right-wrapper-bottom-left-outline').addClass('active-top-puzzle');
                }

                if($(this).hasClass('care-inner__right-wrapper-bottom--right-part')) {

                    $('.care-inner__right-wrapper-bottom-left-outline').addClass('active-right-puzzle');
                }


            }, function() {
                $('.part--panel').show();
                $('.pie--button').show();

                $('.part--panel--area').find('.outline--element').css('opacity','1');
                $('.part--panel--area').find('.care-hand').css('opacity','1');


                $('.care-inner__right-wrapper-bottom-left-outline').removeClass('active-right-puzzle');
                $('.care-inner__right-wrapper-bottom-left-outline').removeClass('active-top-puzzle');

            }
        );

        // dynamic content container append
        $('.care-cards__item-cnt-1').clone().appendTo('.care-inner__right-wrapper-top--right-part .care-inner__right-wrapper-content');

        $('.care-cards__item-cnt-2').clone().appendTo('.care-inner__right-wrapper-top--left-part .care-inner__right-wrapper-content');

        $('.care-cards__item-cnt-3').clone().appendTo('.care-inner__right-wrapper-bottom--right-part .care-inner__right-wrapper-content');

        $('.care-cards__item-cnt-4').clone().appendTo('.care-inner__right-wrapper-bottom--left-part .care-inner__right-wrapper-content');
    }
}
// Анимация главного экрана
application.prototype.animationMainScreen = function () {
    if($(location).attr('pathname') == '/build/index.php' || $(location).attr('pathname') == '/') {
        $(window).on('beforeunload', function() {
            $('body').hide();
            $(window).scrollTop(0);
        });
        $(window).on('load', function() {
            $( ".preloader--body" ).fadeOut("slow");
        });
    }
    else {
        $( ".preloader--body" ).remove();
    }

    $(document).ready(function () {
        $(window).scrollTop(0);
        $('.w--seat').addClass('w--seat--init');
        setTimeout(function(){
            $('.main-screen__feature').addClass('animate__animated');
        }, 2000);

        if(window.matchMedia("(max-width:767px)").matches) {
            $('.w-seat__tabs-link[href*="#"]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $('#w--seat--feature').offset().top
                }, 400, 'linear');
            });
        }
    });

    function updateContainer() {
        if (window.matchMedia("(min-width:768px)").matches) {
            var percentChange = .0025;
            var newWidth = $(window).outerWidth() * percentChange;
            if((window.matchMedia("(min-width:1920px)").matches)) {
                newWidth = 4.2;
            }
            $('#w--seat').css('transform', 'scale('+ newWidth +')');
            $('body').addClass('fixed--body--scroll');

            function animation_in() {
                $('body').removeClass('scrolled-ft-section');
                $('body').addClass('fixed--body--scroll');
                $('#w--seat').css('transform', 'scale('+ newWidth +')');
                setTimeout(function(){
                    $('body').removeClass('scrolled-out-section');
                    $('.main-screen__feature').addClass('animate__fadeInUp');
                }, 2000);
            }

            function animation_out() {
                $('body').addClass('scrolled-ft-section');
                setTimeout(function(){
                    $('body').removeClass('fixed--body--scroll');
                    $('.main-screen__feature').removeClass('animate__fadeInUp');
                }, 2000);
            }

            $(window).on('scroll', function(event){
                if (window.matchMedia("(min-width:1200px)").matches) {
                    if ($(this).scrollTop() > 25){
                        animation_out();
                    }
                    else {
                        animation_in();
                    }
                }
                else if (window.matchMedia("(min-width:768px) and (max-width:1199px)").matches) {
                    if ($(this).scrollTop() > 30){
                        animation_out();
                    }
                    else {
                        animation_in();
                    }
                }
            });
        }
    }

    $(window).resize(function() {
        updateContainer();
    }); updateContainer();

    $('.main-screen .main-screen__cnt-r').on("mouseover", function() {
        $('.w--seat').addClass('w--seat-hovered');
        if (window.matchMedia("(min-width:576px) and (max-width:767.98px)").matches) {
            $('.main-screen__cnt').addClass('main-screen__cnt--hovered');
        }
    }).on("mouseleave", function() {
        $('.w--seat').removeClass('w--seat-hovered');
        if (window.matchMedia("(min-width:576px) and (max-width:767.98px)").matches) {
            $('.main-screen__cnt').removeClass('main-screen__cnt--hovered');
        }
    });
}
// Блок сравнения
application.prototype.getAdditionalParamsCompare = function () {
    if ($(".comparison").length) {
        function getSizePackageTitle() {
            if(window.matchMedia("(min-width: 768px)").matches) {
                $(".compare__item").each(function(i, el) {
                    $(el).find(".compare__row").each(function(i, el) {
                        var containerHeight = $(el).outerHeight();
                        $(el).find(".compare__row-title").css("height", containerHeight);
                    });
                });
            }
            else { $(".compare__row-title").css("height", "auto"); }
        }
        getSizePackageTitle();
        $(window).resize(getSizePackageTitle);

        function setHeightItemTags() {
            var object = $(".compare__item--tags"),
                height = null;

            object.each(function(i, el) {
                if ($(el).find(".item-header").outerHeight() > $(el).find(".compare__col").outerHeight()) {
                    height = $(el).find(".item-header").outerHeight();
                    $(el).find(".compare__col").css("min-height", height);
                }
                else if ($(el).find(".item-header").outerHeight() <= $(el).find(".compare__col").outerHeight()) {
                    return;
                }
            });
        }
        setHeightItemTags();
        $(window).resize(setHeightItemTags);

        function setBorderItem() {
            var object = $(".compare__item:not(.compare__item--header)"),
                height = pseudoBorderHeight = null;

            object.each(function(i, el) {
                height = $(el).outerHeight();
                pseudoBorderHeight = $(el).find(".compare__item-border").css("height", height);
            });
        }
        setBorderItem();
        $(window).resize(setBorderItem);

    }
}
// SVG карта России
application.prototype.initSvgMap = function () {
    if ($("#vmap").length) {
        var pinIcon = '<div class="jq-map-wrapper"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <ellipse rx="8.90248" ry="9.445" transform="matrix(1.00151 0.00785632 0.00890231 0.998419 9 9.5)" fill="white"/> <path d="M5.89996 11.0077C5.99634 11.0084 6.02387 11.0087 6.16155 11.0097C6.40938 11.0116 6.59007 11.2013 6.60619 11.4622C6.60854 11.7229 6.41735 11.8953 6.16952 11.8933C5.68763 11.8896 5.38472 11.8872 4.90283 11.8835C4.72385 11.8821 4.57174 11.8085 4.4877 11.6485C4.41794 11.5466 4.37389 11.2421 4.63327 10.9979C4.81043 10.7965 6.70465 8.63849 7.04546 8.26454C7.05897 8.23567 7.04494 8.2066 7.0174 8.20638L7.00364 8.20628C6.28768 8.20072 5.55796 8.19506 4.84201 8.1895C4.63549 8.1879 4.45533 8.05614 4.41219 7.85302C4.3688 7.62093 4.46335 7.41888 4.65532 7.33347C4.71014 7.30492 4.76521 7.30535 4.83405 7.30588C5.89421 7.31411 6.96814 7.32245 8.0283 7.33068C8.23482 7.33228 8.37316 7.40578 8.45746 7.59473C8.5697 7.82735 8.46112 8.00032 8.37942 8.10108C8.22967 8.28821 6.73043 9.97126 5.89904 10.9063C5.88541 10.9207 5.88554 10.9352 5.87177 10.9351C5.84449 10.9638 5.85865 11.0074 5.89996 11.0077Z" fill="#141B4D"/> <path d="M8.13838 11.9086L7.27098 11.9019C7.06446 11.9003 6.88377 11.7106 6.88181 11.4933L6.88129 11.4354C6.87933 11.2181 7.05662 11.0312 7.26315 11.0328L8.13055 11.0395C8.33708 11.0411 8.51776 11.2308 8.51972 11.4481L8.52024 11.506C8.5222 11.7233 8.35868 11.9103 8.13838 11.9086Z" fill="#141B4D"/> <path d="M11.729 10.0825L10.8616 10.0757C10.655 10.0741 10.4744 9.88444 10.4724 9.66716L10.4719 9.60922C10.4699 9.39194 10.6472 9.20501 10.8537 9.20662L11.7211 9.21335C11.9277 9.21495 12.1083 9.40465 12.1103 9.62194L12.1108 9.67988C12.1128 9.89716 11.9355 10.0841 11.729 10.0825Z" fill="#141B4D"/> <path d="M9.28807 9.629C9.28245 9.00612 9.27684 8.38325 9.27123 7.76037C9.26901 7.51412 9.44643 7.34168 9.69426 7.34361C10.7682 7.35194 11.8421 7.36028 12.916 7.36861C13.1639 7.37054 13.3308 7.56013 13.3468 7.80649C13.3491 8.06723 13.1717 8.23967 12.9239 8.23774C12.0289 8.2308 11.134 8.22385 10.2528 8.21701C10.184 8.21648 10.1703 8.23086 10.171 8.30328C10.179 9.1869 10.1869 10.0705 10.195 10.9686C10.1957 11.041 10.2233 11.0557 10.2783 11.0417C11.1732 11.0486 12.0544 11.0555 12.9493 11.0624C13.1421 11.0639 13.3083 11.1811 13.365 11.3553C13.4357 11.5587 13.3688 11.7754 13.2045 11.8755C13.1224 11.9328 13.0399 11.9467 12.9573 11.946C11.8971 11.9378 10.837 11.9296 9.77681 11.9213C9.50144 11.9192 9.33466 11.7441 9.33218 11.4689C9.29916 10.8603 9.29355 10.2374 9.28807 9.629Z" fill="#141B4D"/> </svg></div>';
        var pins = {
            rz: pinIcon,
            mc: pinIcon,
            vm: pinIcon,
            tl: pinIcon,
            kj: pinIcon,
            sm: pinIcon,
        };

        jQuery('#vmap').vectorMap({
            map: 'russia_en',
            enableZoom: false,
            backgroundColor: null,
            color: 'rgba(20, 27, 77, 0.1)',
            hoverColor: '#141B4D',
            borderColor: '#fff',
            borderOpacity: 1,
            borderWidth: 1,
            pins: pins,
            pinMode: 'content',
            //hoverOpacity: 0.7,
            selectedColor: '#384F86',
            showTooltip: true,
            selectedRegions: ['rz','mc','vm','tl','kj','sm'],
            //colors: {rz: '#fff', },
            normalizeFunction: 'polynomial',
            onRegionClick: function(element, code, region){
                if(code == 'rz' || code == 'mc' || code == 'vm' || code == 'tl' || code == 'kj' || code == 'sm'){
                    window.open('https://ze-okna.ru/offices/main_office/mainoffice/',"_blank");
                    element.preventDefault();
                } else {
                    element.preventDefault();
                }
            }
        });

        $(window).on("load resize",function(){
            var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if(winWidth>1199.98){
                $("#country_map").mCustomScrollbar({
                    axis:"x",
                    moveDragger: true,
                    scrollbarPosition: "inside",
                    theme:"rounded-dark"
                });
            }else{
                $("#country_map").mCustomScrollbar("destroy");
            }
        });

    }
}