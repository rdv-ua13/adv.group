<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/header.php'); ?>

<div class="intro intro--inner intro--inner-empty intro--registration mb-5 mb-md-6 mb-lg-7 mb-xl-8">
	<div class="intro__wrapper" style="background-image: url('/build/img/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg')">
		<div class="container intro__content">
			<h1 class="intro__title">Заявка&nbsp;<span class="text--red">на регистрацию</span></h1>
		</div>
	</div>
</div>


<div class="container">
    <form class="registration" method="post" autocomplete="off">
        <div class="registration__item">
            <button class="btn btn-primary fsz-md" type="button">Вход</button>
            <button class="btn btn-primary fsz-md" type="button">Регистрация</button>
        </div>

        <div class="registration__item">
            <label for="inputRegSurname">Фамилия</label>
            <input id="inputRegSurname" type="text" name="SURNAME" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegName">Имя</label>
            <input id="inputRegName" type="text" name="NAME" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegMiddleName">Отчество</label>
            <input id="inputRegMiddleName" type="text" name="MIDDLENAME" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegPhone">Телефон</label>
            <input id="inputRegPhone" class="isPhone" type="tel" name="PHONE" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegEmail">Email</label>
            <input id="inputRegEmail" type="email" name="EMAIL" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegTaxpayerId">ИНН организации</label>
            <input id="inputRegTaxpayerId" type="text" name="TAXPAYERID" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegLegalName">Юридическое название</label>
            <input id="inputRegLegalName" type="text" name="LEGALNAME" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegBrandName">Брендовое название</label>
            <input id="inputRegBrandName" type="text" name="BRANDNAME" required="">
        </div>
        <div class="registration__item">
            <label for="inputRegSite">Сайт</label>
            <input id="inputRegSite" type="text" name="SITE">
        </div>

        <div class="registration__item registration__checkbox">
            <label>
                <input type="checkbox" value="">
                <span class="registration__checkbox-mark"></span>
                <span class="text-left">Я уже являюсь клиентом АРВ Трейд</span>
            </label>
        </div>

        <div class="registration__item">
            <button class="btn btn-primary fsz-md" type="submit">Отправить заявку</button>
        </div>
    </form>
</div>


<div class="container-fluid">
	<div class="row">
		<div class="pre-footer pre-footer--inner"></div>
	</div>
</div>

<? include($_SERVER["DOCUMENT_ROOT"].'/build/components/footer.php'); ?>
