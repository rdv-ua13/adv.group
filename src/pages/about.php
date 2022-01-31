<?php include($_SERVER["DOCUMENT_ROOT"] . '/build/components/header.php'); ?>

<div class="intro intro--inner mb-5 mb-md-6 mb-lg-7 mb-xl-8">
	<div class="intro__wrapper" style="background-image: url('/build/img/page-bg-4.jpg')">
		<div class="container intro__content">
			<h1 class="intro__title">О&nbsp;<span class="text--red">компании</span></h1>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12 mb-5 mb-md-6 mb-lg-7 mb-xl-8">
			<div class="h2 mb-4 mb-lg-5">
				<span>Показ баннера</span>
				<span class="text--red">глазами&nbsp;современников</span>
			</div>

			<p class="fsz-md lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
				ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
				результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
				рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
			</p>
			<p class="mb-0 fsz-md lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
				Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
				До недавнего времени считалось, что рейтинг конкурентоспособен.
			</p>

		</div>
	</div>
</div>

<? include($_SERVER["DOCUMENT_ROOT"] . '/build/components/benefits.php'); ?>

<? include($_SERVER["DOCUMENT_ROOT"] . '/build/components/partners.php'); ?>

<?
$title = "Вендоры <span class='text--red'>дистрибуции</span>";

include($_SERVER["DOCUMENT_ROOT"] . '/build/components/vendors-block.php'); ?>

<div class="container-fluid">
	<div class="row">
		<div class="pre-footer pre-footer--main">
			<?php include($_SERVER["DOCUMENT_ROOT"] . '/build/components/request-form.php');?>
		</div>
	</div>
</div>

<? include($_SERVER["DOCUMENT_ROOT"] . '/build/components/footer.php'); ?>
