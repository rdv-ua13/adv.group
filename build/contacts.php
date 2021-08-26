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
        <div class="intro__wrapper" style="background-image: url('/build/img/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg')">
            <div class="container intro__content">
                <h1 class="intro__title visually-hidden-md">Наши&nbsp;<span class="text--red">контакты</span></h1>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="contacts-map col-12">

                <div class="contacts-map__board-wrapper col-md-12">
                    <div class="contacts-map__board col-md-12">
                        <div class="row">
                            <div class="contacts-map__board-col col-xl-4">
                                <div class="contacts-map__board-item text-uppercase">
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/placeholder.png" alt="location mark">
                                    </div>
                                    <a class="contacts-map__link" href="#">111524,&nbsp;Москва, Электродная&nbsp;11.стр.7</a>
                                </div>
                            </div>
                            <div class="contacts-map__board-col col-xl-4">
                                <div class="contacts-map__board-item">
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/call.png" alt="phone number">
                                    </div>
                                    <a class="contacts-map__link" href="tel:+74955805556">+7 (495) 580-55-56</a>
                                </div>
                            </div>
                            <div class="contacts-map__board-col col-xl-4">
                                <div class="contacts-map__board-item">
                                    <div class="contacts-map__board-i">
                                        <img src="/build/img/mail.png" alt="e-mail">
                                    </div>
                                    <div>
                                        <div class="contacts-map__link-row">
                                            <a class="contacts-map__link" href="mailto:service@arv.group">service@arv.group</a>
                                            <div>сервисный центр</div>
                                        </div>
                                        <div>
                                            <a class="contacts-map__link" href="mailto:info@arv.group">info@arv.group</a>
                                            <div>по всем вопросам</div>
                                        </div>
                                    </div>
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