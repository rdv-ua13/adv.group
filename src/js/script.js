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
    this.changeImageUser();
    this.toggleClassBurger();
    this.toggleClassDropMenu();

    /*this.topMenu();
    this.addMaskedInput();*/
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
                1200: {
                    slidesPerView: 5,
                },
            },
        });
    }
}
// Сhange the image of the entrance to personal account
application.prototype.changeImageUser = function () {
    var srcImgKey = "/build/img/key.png",
        srcImgUser = "/build/img/user.png",
        srcImgCallBlack = "/build/img/call-black.png",
        srcImgCallRed = "/build/img/call.png";

    $(window).on("resize", function () {
        if (window.matchMedia("(min-width:768px)").matches) {
            $('.js-user img').attr("src", srcImgKey);
            $('.js-call img').attr("src", srcImgCallRed);
        }
        else if (window.matchMedia("(max-width:767.98px)").matches) {
            $('.js-user img').attr("src", srcImgUser);
            $('.js-call img').attr("src", srcImgCallBlack);
        }
    }).trigger('resize');
}
// Menu-burger button
application.prototype.toggleClassBurger = function () {
    $(".menu-btn").on("click", function () {
        $(this).toggleClass("active");
    });
}
// Menu top "nav-bottom__drop"
application.prototype.toggleClassDropMenu = function () {
    if (window.matchMedia("(max-width:767.98px)").matches) {
        $('.nav-bottom__item--contains .nav-bottom__drop').hide();

        $(".js-nav-bottom-link").on("click", function () {
            $(this).closest(".nav-bottom__item--contains").toggleClass("active");

            if ($(this).closest('.nav-bottom__item--contains').hasClass('active')) {
                $(this).closest('.nav-bottom__item--contains').find('.nav-bottom__drop').slideDown(300);
            } else {
                $(this).closest('.nav-bottom__item--contains').find('.nav-bottom__drop').slideUp(300);
            }
        });
    } else { return }
}


// Top menu
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
// Mobile number mask
application.prototype.addMaskedInput = function () {
    $(".isPhone").mask("+7 (999) 999-99-99", { autoclear: false });
}
