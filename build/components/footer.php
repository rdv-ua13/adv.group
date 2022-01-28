    </main>

    <footer class="footer">
        <div class="container">
			<?/* if (strstr($APPLICATION->GetCurDir(), "/path")) */
			if (strpos($_SERVER["REQUEST_URI"], "contacts.php")) {
				echo '<div class="footer__board col-md-12" style="display: none;">';
			}
			else {
				echo '<div class="footer__board col-md-12">';
			}?>

                <div class="footer__board-top row">
                    <div class="col-md-4 fsz-md">
                        <a class="footer__link" href="javascript:;">О компании</a>
                        <a class="footer__link" href="javascript:;">Новости</a>
                        <a class="footer__link" href="javascript:;">Контакты</a>
                    </div>
                    <div class="col-md-4 fsz-md">
                        <a class="footer__link" href="javascript:;">Оптовые продажи</a>
                        <a class="footer__link" href="javascript:;">Решения для бизнеса</a>
                        <a class="footer__link" href="javascript:;">Сервис и ремонт</a>
                    </div>
                    <div class="col-md-4 fsz-md">
                        <a class="footer__link" href="javascript:;">Услуги</a>
                        <a class="footer__link" href="javascript:;">Магазин</a>
                        <a class="footer__link" href="javascript:;">Войти в в2в</a>
                    </div>
                </div>

                <div class="footer__board-bottom row">
                    <div class="footer__board-col col-lg-4">
                        <div class="footer__board-item text-uppercase fsz-md">
                            <div class="footer__board-i">
                                <img src="/build/img/placeholder.png" alt="location mark">
                            </div>
                            <a class="footer__link" href="javascript:;">
                                <div>111524, Москва,</div>
                                <div>Электродная 11.стр.7</div>
                            </a>
                        </div>
                    </div>
                    <div class="footer__board-col col-lg-4">
                        <div class="footer__board-item fsz-md">
                            <div class="footer__board-i">
                                <img src="/build/img/call.png" alt="phone number">
                            </div>
                            <a class="footer__link" href="tel:+74955805556">+7 (495) 580-55-56</a>
                        </div>
                    </div>
                    <div class="footer__board-col col-lg-4">
                        <div class="footer__board-item fsz-md">
                            <div class="footer__board-i">
                                <img src="/build/img/mail.png" alt="e-mail">
                            </div>
                            <div>
                                <div class="footer__link-row">
                                    <a class="footer__link" href="mailto:service@arv.group">service@arv.group</a>
                                    <span><span>–</span> сервисный центр</span>
                                </div>
                                <div class="footer__link-row">
                                    <a class="footer__link" href="mailto:info@arv.group">info@arv.group</a>
                                    <span><span>–</span> по всем вопросам</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="mb-4 justify-content-center logo">
                        <a href="/build/">
                            <img src="/build/img/logo.png" alt="logo">
                        </a>
                    </div>
                    <!--<a class="logo footer__logo" href="/build/index.php">
                        <svg class="header__logo-i">
                            <use xlink:href="/build/img/sprite.svg#logo"></use>
                        </svg>
                    </a>-->
                </div>
                <div class="col-12 footer__info fsz-sm">
                    <div class="mb-md-2 text-center">АРВ трейдинг 2021</div>
                    <div class="mb-1 mb-md-3 text-center">
                        <a href="javascript:;">Политика конфиденциальности/Использование файлов cookies</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <?/*<script src="https://api-maps.yandex.ru/2.1/?apikey=<ваш API-ключ>&lang=ru_RU" type="text/javascript"></script>*/?>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=6617a1b6-abb2-45da-8cf2-13e5890cc7fa&lang=ru_RU" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../../build/js/libs.min.js"></script>
    <script src="../../build/js/script.js"></script>
</body>
</html>