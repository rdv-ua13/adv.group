<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <link rel="stylesheet" href="/build/css/main.css">

    <title>Document</title>
</head>
<body>
    <?/* if (strstr($APPLICATION->GetCurDir(), "/path")) */
    if (strpos($_SERVER["REQUEST_URI"], "index.php")
        || strpos($_SERVER["REQUEST_URI"], "vendors.php")
        || strpos($_SERVER["REQUEST_URI"], "contracts.php")
        || strpos($_SERVER["REQUEST_URI"], "cooperation.php")
        || strpos($_SERVER["REQUEST_URI"], "leasing.php")
        || strpos($_SERVER["REQUEST_URI"], "about.php")
        || strpos($_SERVER["REQUEST_URI"], "wholesale.php")
        || strpos($_SERVER["REQUEST_URI"], "copy-contract.php")
        || strpos($_SERVER["REQUEST_URI"], "business-solutions.php")
        || strpos($_SERVER["REQUEST_URI"], "service-repair.php")
        || strpos($_SERVER["REQUEST_URI"], "write-off.php")
        || strpos($_SERVER["REQUEST_URI"], "trade-in.php")
        || strpos($_SERVER["REQUEST_URI"], "cooperation-form.php")
        || strpos($_SERVER["REQUEST_URI"], "auth.php")) {
        echo '<header class="header pt-md-3">';
    }
    else if (strpos($_SERVER["REQUEST_URI"], "business-solutions-details.php")) {
		$isSubsection = 1;
        echo '<header class="header header--inner header--inner-extended">';
    }
    else {
		$isSubsection = 1;
        echo '<header class="header header--inner">';
    }?>
        <div class="container header__container">
            <div class="row">
				<? if($isSubsection) {
					echo '<div class="order-1 col-4 col-md-2 col-xl-3 py-2 pt-sm-3 py-md-0 d-flex align-items-center">';
				}
				else {
					echo '<div class="order-1 col-4 col-md-3 col-xl-2  mb-md-3 py-2 py-sm-3 py-md-0 d-flex align-items-center ">';
				} ?>
                    <div class="logo">
                        <a class="mr-2" href="/build/">
                            <img src="/build/img/logo.png" alt="logo">
                        </a>
                    </div>
                </div>
                <? if($isSubsection) {
                    echo '<div class="order-3 order-md-2 col-4 col-md-10 col-xl-9 py-2 py-sm-3 pt-md-0">';
                }
                else {
                    echo '<div class="order-3 order-md-2 col-4 col-md-9 col-xl-10  mb-md-3 py-2 py-sm-3 py-md-0  header__user-control">';
                } ?>
                    <div class="row h-100">
						<? if($isSubsection) {
						    echo '<nav class="nav-top col-md-7 col-xl-8 d-none d-md-flex justify-content-end align-items-center fsz-md">';
						}
						else {
						    echo '<nav class="nav-top col-md-12 col-xxl-9 mb-md-3 mb-xxl-0 d-none d-md-flex justify-content-end align-items-center fsz-md">';
						} ?>
                            <a class="logo nav-top-item" href="https://fplusimaging.arv.group/" target="_blank">
                                <img src="/build/img/fplus-logo1.png" alt="F+ imaging" title="F+ imaging" class="">
                            </a>
                            <a class="nav-top-item" href="">О&nbsp;компании</a>
                            <a class="nav-top-item" href="">Новости</a>
                            <a class="nav-top-item" href="">Контакты</a>
                        </nav>
						<? if($isSubsection) {
						    echo '<div class="user-control-top col-md-5 col-xl-4 fsz-md">';
						}
						else {
						    echo '<div class="user-control-top col-md-12 col-xxl-3 fsz-md">';
						} ?>
                            <a class="user-control order-3 order-md-1 mr-0 mr-md-3" href="tel:+74955805556">
                                <span class="user-control__i">
                                    <img class="img-desktop" src="/build/img/call.png" alt="contact phone">
                                    <img class="img-mobile" src="/build/img/call-black.png" alt="contact phone">
                                </span>
                                <span>+7 (495) 580-55-56</span>
                            </a>
                            <? if($isSubsection) {
                                echo '<a class="user-control order-1 order-md-2 d-md-none" href="javascript:;">';
                            }
                            else {
                                echo '<a class="user-control order-2 d-xxl-none" href="javascript:;">';
                            } ?>
                                <span class="user-control__i">
                                    <img class="img-desktop" src="/build/img/key.png" alt="login to b2b">
                                    <img class="img-mobile" src="/build/img/user.png" alt="login to b2b">
                                </span>
                                <span>Войти в B2B</span>
                            </a>
                            <a class="user-control order-1 logo-mobile d-block d-md-none" href="https://fplusimaging.arv.group/" target="_blank">
                                <?/*<img src="/include/header/f/logo-mobile.png" alt="F+ imaging" title="F+ imaging">*/?>
                                <img src="/build/img/fplus-logo-mobile.png" alt="F+ imaging" title="F+ imaging">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="nav-bottom-container order-2 order-md-3 col-4 col-md-12 pt-md-3">
                    <div class="row h-100">
                        <div class="nav-bottom-wrapper col-12 col-xl-8">
                            <div class="menu-btn"><span></span></div>
                            <div class="nav-bottom">
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="javascript:;">
                                        <span>Решения для организаций</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Полиграфические услуги, архитектурные бюро</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Производство и добыча сырья</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Банковские и финансовые услуги печати</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Туризм, рестораны, кинотеатры</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Строительство, недвижимость</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="javascript:;">
                                        <span>Сервис и ремонт</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Лизинг оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Трейд-ин оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Покопийный контракт</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Списание оргтехники</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="javascript:;">
                                        <span>Услуги</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Лизинг оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Трейд-ин оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Покопийный контракт</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Списание оргтехники</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item mr-0">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="javascript:;">
                                        <span>Магазин</span>
                                    </a>
                                </div>
                                <div class="nav-bottom__item d-md-none">
                                    <a class="user-control fsz-md" href="javascript:;">
                                        <span class="user-control__i">
                                            <img src="/build/img/key.png" alt="login to b2b">
                                        </span>
                                        <span class="text--red">Войти в B2B</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <?/*<div class="d-none d-xxl-block col-xl-3 col-xxl-2">
                            <a class="user-control justify-content-end py-md-4 fsz-md" href="javascript:;">
                                <span class="user-control__i">
                                    <img src="/build/img/key.png" alt="login to b2b">
                                </span>
                                <span class="user-control__text text--red">Войти в B2B</span>
                            </a>
                        </div>*/?>
                        <div class="nav-bottom-wrapper d-none d-xl-block col-xl-4">
                            <div class="nav-bottom nav-bottom--usercontrol">
                                <div class="nav-bottom__item nav-bottom__item--contains mr-0 mr-xl-2">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="javascript:;">
                                        <span>Оптовые продажи</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="javascript:;">Сотрудничество</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item d-none d-xxl-flex">
                                    <a class="mx-0 nav-bottom__link js-nav-bottom-link fsz-md user-control" href="javascript:;">
                                        <span class="user-control__i">
                                            <img src="/build/img/key.png" alt="Войти в B2B">
                                        </span>
                                        <span class="text--red">Войти в B2B</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>

	<?
    if($isSubsection && !strpos($_SERVER["REQUEST_URI"], "business-solutions-details.php")) {
		echo '<main class="main main--inner">';
	}
	else if ($isSubsection && strpos($_SERVER["REQUEST_URI"], "business-solutions-details.php")) {
		echo '<main class="main business-details">';
	}
	else {
		echo '<main class="main">';
	} ?>
