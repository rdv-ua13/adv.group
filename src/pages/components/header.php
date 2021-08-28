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
        || strpos($_SERVER["REQUEST_URI"], "business-solutions-details.php")
        || strpos($_SERVER["REQUEST_URI"], "service-repair.php")
        || strpos($_SERVER["REQUEST_URI"], "write-off.php")
        || strpos($_SERVER["REQUEST_URI"], "trade-in.php")
        || strpos($_SERVER["REQUEST_URI"], "cooperation-form.php")) {
        echo '<header class="header">';
    }
    else {
		$isSubsection = 1;
        echo '<header class="header header--inner">';
    }?>
        <div class="container">
            <div class="row">
				<? if($isSubsection) {
					echo '<div class="order-1 col-4 col-sm-3 col-md-2 col-xl-3 mb-md-3 py-2 py-sm-3 py-md-0 d-flex align-items-center">';
				}
				else {
					echo '<div class="order-1 col-4 col-sm-3 mb-md-3 py-2 py-sm-3 py-md-0 d-flex align-items-center">';
				} ?>
                    <a class="logo" href="/">
                        <img class="logo-i" src="/build/img/logo.png" alt="logo">
                    </a>
                </div>
                <? if($isSubsection) {
                    echo '<div class="order-3 order-md-2 col-4 col-sm-3 col-md-10 col-xl-9 mb-md-3 py-2 py-sm-3 py-md-0">';
                }
                else {
                    echo '<div class="order-3 order-md-2 col-4 col-sm-3 col-md-9 mb-md-3 py-2 py-sm-3 py-md-0">';
                } ?>
                    <div class="row h-100">
						<? if($isSubsection) {
						    echo '<nav class="nav-top col-md-7 col-xl-8 col-xxxl-9 d-none d-md-flex justify-content-end align-items-center fsz-md">';
						}
						else {
						    echo '<nav class="nav-top col-md-12 col-xl-8 col-xxxl-9 mb-md-3 mb-xl-0 d-none d-md-flex justify-content-end align-items-center fsz-md">';
						} ?>
                            <a class="nav-top-item" href="">О&nbsp;компании</a>
                            <a class="nav-top-item" href="">Новости</a>
                            <a class="nav-top-item" href="">Контакты</a>
                        </nav>
						<? if($isSubsection) {
						    echo '<div class="user-control-top col-md-5 col-xl-4 col-xxxl-3 fsz-md">';
						}
						else {
						    echo '<div class="user-control-top col-md-12 col-xl-4 col-xxxl-3 fsz-md">';
						} ?>
                            <a class="user-control js-call order-2 order-md-1" href="tel:+74955805556">
                                <span class="user-control__i">
                                    <? /* src from js/script.js */ ?>
                                    <img src="" alt="contact phone">
                                </span>
                                <span>+7 (495) 580-55-56</span>
                            </a>
                            <? if($isSubsection) {
                                echo '<a class="user-control js-user order-1 order-md-2 d-md-none" href="#">';
                            }
                            else {
                                echo '<a class="user-control js-user order-1 order-md-2 d-xl-none" href="#">';
                            } ?>
                                <span class="user-control__i">
                                    <? /* src from js/script.js */ ?>
                                    <img src="" alt="login to b2b">
                                </span>
                                <span>Войти в B2B</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="nav-bottom-container order-2 order-md-3 col-4 col-sm-6 col-md-12 pt-md-3">
                    <div class="row h-100">
                        <div class="nav-bottom-wrapper col-md-12 col-xl-9 col-xxl-10">
                            <div class="menu-btn"><span></span></div>
                            <div class="nav-bottom">
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="#">
                                        <span>Оптовые</span>
                                        <span>продажи</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Лизинг оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Трейд-ин оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Покопийный контракт</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Списание оргтехники</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="#">
                                        <span>Решения</span>
                                        <span>для бизнеса</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Полиграфические услуги, архитектурные бюро</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Производство и добыча сырья</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Банковские и финансовые услуги печати</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Туризм, рестораны, кинотеатры</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Строительство, недвижимость</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="#">
                                        <span>Сервис и</span>
                                        <span>ремонт</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Лизинг оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Трейд-ин оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Покопийный контракт</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Списание оргтехники</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="#">
                                        <span>Услуги</span>
                                    </a>
                                    <ul class="nav-bottom__drop fsz-sm">
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Лизинг оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Трейд-ин оргтехники</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Покопийный контракт</a>
                                        </li>
                                        <li class="nav-bottom__drop-item">
                                            <a href="#">Списание оргтехники</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-bottom__item">
                                    <a class="nav-bottom__link js-nav-bottom-link fsz-md" href="#">
                                        <span>Магазин</span>
                                    </a>
                                </div>
                                <div class="nav-bottom__item d-md-none">
                                    <a class="user-control fsz-md" href="#">
                                        <span class="user-control__i">
                                            <img src="/build/img/key.png" alt="login to b2b">
                                        </span>
                                        <span class="text--red">Войти в B2B</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="d-none d-xl-block col-xl-3 col-xxl-2">
                            <a class="user-control justify-content-end py-md-4 fsz-md" href="#">
                                <span class="user-control__i">
                                    <img src="/build/img/key.png" alt="login to b2b">
                                </span>
                                <span>Войти в B2B</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>

	<? if($isSubsection) {
		echo '<main class="main main--inner">';
	}
	else if (strpos($_SERVER["REQUEST_URI"], "business-solutions-details.php")) {
		echo '<main class="main business-details">';
	}
	else {
		echo '<main class="main">';
	} ?>
