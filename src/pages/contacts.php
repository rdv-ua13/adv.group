<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/header.php'); ?>

    <div class="container">
        <ol class="breadcrumb fsz-md" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope
                itemtype="https://schema.org/ListItem">
                <a itemprop="item" href="/">
                    <span itemprop="name">Главная</span></a>
                <meta itemprop="position" content="1" />
            </li>
            <li itemprop="itemListElement" itemscope
                itemtype="https://schema.org/ListItem">
                <a itemprop="item" href="/contacts.php">
                    <span itemprop="name">Контакты</span></a>
                <meta itemprop="position" content="2" />
            </li>
        </ol>
    </div>

    <div class="intro intro--inner intro--inner-empty">
        <div class="intro__wrapper" style="background-image: url('/build/img/rachel-moenning-zjxYwd4HOu0-unsplash.jpg')">
            <div class="container intro__content">
                <h1 class="intro__title visually-hidden-md">Наши&nbsp;<span class="text--red">контакты</span></h1>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="contacts-map col">

                <div class="contacts-map__board-container container">
                    <div class="contacts-map__board col-md-12 js-contacts-map-board">
                        <div class="row">
                            <div class="h3">Наши <span class='text--red'>контакты</span></div>
                            <div class="contacts-map__board-col">
                                <div class="contacts-map__board-item">
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/placeholder.png" alt="location mark">
                                        <span class="contacts-map__title">Адрес</span>
                                    </div>
                                    <a class="contacts-map__link text-uppercase" href="#">111524,&nbsp;Москва, Электродная&nbsp;11.стр.7</a>
                                </div>
                            </div>
                            <div class="contacts-map__board-col">
                                <div class="contacts-map__board-item">
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/call.png" alt="phone number">
                                        <span class="contacts-map__title">Телефон</span>
                                    </div>
                                    <a class="contacts-map__link" href="tel:+74955805556">+7 (495) 580-55-56</a>
                                </div>
                            </div>
                            <div class="contacts-map__board-col">
                                <div class="contacts-map__board-item">
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/mail.png" alt="e-mail">
                                        <span class="contacts-map__title">Email</span>
                                    </div>
                                    <div>
                                        <div class="contacts-map__link-row">
                                            <a class="contacts-map__link" href="mailto:service@arv.group">service@arv.group</a>
                                            <div class="contacts-map__link-descr"><span>-&nbsp;</span>сервисный центр</div>
                                        </div>
                                        <div class="contacts-map__link-row">
                                            <a class="contacts-map__link" href="mailto:info@arv.group">info@arv.group</a>
                                            <div class="contacts-map__link-descr"><span>-&nbsp;</span>по всем вопросам</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="contacts-map__board-col"><!--popover-content__row-->
                                <div class="contacts-map__board-item"><!-- popover-content__title-->
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/clock.png" alt="schedule">
                                        <span class="contacts-map__title">Мы работаем для Вас:</span>
                                    </div>
                                    <span class="contacts-map__link mb-1">c Понедельника по Пятницу, 10:00&nbsp;-&nbsp;19:00</span><!-- popover-content__link-->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="map"></div>

            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="pre-footer pre-footer--contacts">
				<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/request-form.php');?>
            </div>
        </div>
    </div>

<? include($_SERVER["DOCUMENT_ROOT"].'/build/components/footer.php'); ?>