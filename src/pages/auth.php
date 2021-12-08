<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/header.php'); ?>

<div class="intro intro--inner intro--inner-empty intro--auth mb-5 mb-md-6 mb-lg-7 mb-xl-8">
    <div class="intro__wrapper" style="background-image: url('/build/img/rachel-moenning-zjxYwd4HOu0-unsplash.jpg')">
        <div class="container intro__content">
            <h1 class="intro__title">Авторизация</h1>
        </div>
    </div>
</div>


<div class="container">
    <form class="auth" method="post" autocomplete="off">
        <div class="auth__item">
            <label for="inputAuthLogin">Логин</label>
            <input id="inputAuthLogin" type="text" name="LOGIN" required="">
        </div>
        <div class="auth__item">
            <label for="inputAuthPassword">Имя</label>
            <input id="inputAuthPassword" type="password" name="PASSWORD" required="">
        </div>

        <div class="auth__item auth__checkbox">
            <label>
                <input type="checkbox" value="">
                <span class="auth__checkbox-mark"></span>
                <span class="text-left">Запомнить меня на этом компьютере</span>
            </label>
        </div>

        <div class="auth__item">
            <button class="btn btn-primary fsz-md" type="submit">Войти</button>
        </div>
    </form>
</div>


<div class="container-fluid">
    <div class="row">
        <div class="pre-footer pre-footer--inner"></div>
    </div>
</div>

<? include($_SERVER["DOCUMENT_ROOT"].'/build/components/footer.php'); ?>
