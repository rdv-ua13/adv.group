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
    this.addMaskedInput();
    this.initRegValidation();
    this.toggleClassBusinessMark();
    this.initMap();

    /*this.topMenu();*/
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

        $('.js-nav-bottom-link').on('click', function () {
            if (!$(this).closest('.nav-bottom__item--contains').hasClass('active')) {
                $(".nav-bottom__item--contains").removeClass("active");
                $(".nav-bottom__drop").slideUp(300);
                $(this).closest(".nav-bottom__item--contains").addClass("active");
                $(this).closest(".nav-bottom__item--contains").find('.nav-bottom__drop').slideDown(300);
            }
            else if ($(this).closest('.nav-bottom__item--contains').hasClass('active')) {
                $(this).closest('.nav-bottom__item--contains').removeClass('active');
            }
        });
    } else { return }
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
            }
        });

        $(".business-solution .js-item-mark").on("click", function () {
            if (!$(this).hasClass("active")) {
                $(".business-solution .js-item-mark").removeClass("active");
                $(".business-solution__item").removeClass("active");
                $(this).addClass("active");
                $(this).next(".business-solution__item").addClass("active");
            } else {
                $(this).removeClass("active");
                $(this).next(".business-solution__item").removeClass("active");
            }
        });
    }
}
// Map initialization
application.prototype.initMap = function () {
    if($("#map").length) {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                center: [55.76, 37.64],
                controls: [],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Создание макета балуна на основе Twitter Bootstrap.
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover top">' +
                '<a class="close" href="javascript:void(0)">&times;</a>' +
                '<div class="arrow"></div>' +
                '<div class="popover-inner">' +
                '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
                '</div>' +
                '</div>', {
                    /**
                     * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                     * @function
                     * @name build
                     */
                    build: function () {
                        this.constructor.superclass.build.call(this);

                        this._$element = $('.popover', this.getParentElement());

                        this.applyElementOffset();

                        this._$element.find('.close')
                            .on('click', $.proxy(this.onCloseClick, this));
                    },

                    /**
                     * Удаляет содержимое макета из DOM.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                     * @function
                     * @name clear
                     */
                    clear: function () {
                        this._$element.find('.close')
                            .off('click');

                        this.constructor.superclass.clear.call(this);
                    },

                    /**
                     * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onSublayoutSizeChange
                     */
                    onSublayoutSizeChange: function () {
                        MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                        if(!this._isElement(this._$element)) {
                            return;
                        }

                        this.applyElementOffset();

                        this.events.fire('shapechange');
                    },

                    /**
                     * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name applyElementOffset
                     */
                    applyElementOffset: function () {
                        this._$element.css({
                            left: -(this._$element[0].offsetWidth / 2),
                            top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                        });
                    },

                    /**
                     * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                     * @function
                     * @name onCloseClick
                     */
                    onCloseClick: function (e) {
                        e.preventDefault();

                        this.events.fire('userclose');
                    },

                    /**
                     * Используется для автопозиционирования (balloonAutoPan).
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                     * @function
                     * @name getClientBounds
                     * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                     */
                    getShape: function () {
                        if(!this._isElement(this._$element)) {
                            return MyBalloonLayout.superclass.getShape.call(this);
                        }

                        var position = this._$element.position();

                        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                            [position.left, position.top], [
                                position.left + this._$element[0].offsetWidth,
                                position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                            ]
                        ]));
                    },

                    /**
                     * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                     * @function
                     * @private
                     * @name _isElement
                     * @param {jQuery} [element] Элемент.
                     * @returns {Boolean} Флаг наличия.
                     */
                    _isElement: function (element) {
                        return element && element[0] && element.find('.arrow')[0];
                    }
                }),

                // Создание вложенного макета содержимого балуна.
                MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="popover-title">$[properties.balloonHeader]</div>' +
                    '<div class="popover-content">$[properties.balloonContent]</div>'
                ),

                // Создание метки с пользовательским макетом балуна.
                myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    balloonHeader: "Наши <span class='text--red'>контакты</span>",
                    balloonContent:
                        "<div class='popover-content__row'>" +
                            "<div class='popover-content__title'>" +
                                "<img src='/build/img/placeholder.png' alt='location mark'>" +
                                "<span>Адрес</span>" +
                            "</div>" +
                            "<div class='popover-content__link'>111524, Москва, Электродная 11.стр.7</div>" +
                        "</div>" +
                        "<div class='popover-content__row'>" +
                            "<div class='popover-content__title'>" +
                                "<img src='/build/img/call.png' alt='phone number'>" +
                                "<span>Телефон</span>" +
                            "</div>" +
                            "<a class='popover-content__link' href='tel:+74955805556'>+7 (495) 580-55-56</a>" +
                        "</div>" +
                        "<div class='popover-content__row'>" +
                            "<div class='popover-content__title'>" +
                                "<img src='/build/img/mail.png' alt='email'>" +
                                "<span>Email</span>" +
                            "</div>" +
                            "<div>" +
                                "<div class='popover-content__link-row'>" +
                                    "<a class='popover-content__link' href='mailto:service@arv.group'>service@arv.group&nbsp;</a>" +
                                    "<span>– сервисный центр</span>" +
                                "</div>" +
                                "<div class='popover-content__link-row'>" +
                                    "<a class='popover-content__link' href='mailto:info@arv.group'>info@arv.group&nbsp;</a>" +
                                    "<span>– по всем вопросам</span>" +
                                "</div>" +
                            "</div>" +
                        "</div>"
                }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0
                    // Не скрываем иконку при открытом балуне.
                    // hideIconOnBalloonOpen: false,
                    // И дополнительно смещаем балун, для открытия над иконкой.
                    // balloonOffset: [3, -40]
                });

                myMap.geoObjects.add(myPlacemark);
                myMap.events.add('click', e => e.get('target').balloon.close());
                myMap.controls.add('zoomControl', {position: {left: '15px', bottom: '25vw'}});
                myMap.behaviors.disable('scrollZoom');
                //на мобильных устройствах... (проверяем по userAgent браузера)
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                    //... отключаем перетаскивание карты
                    myMap.behaviors.disable('drag');
                }
        }
    }
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

//# sourceMappingURL=script.js.map
