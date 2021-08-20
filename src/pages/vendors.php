<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/header.php');?>

<div class="intro intro--inner mb-4 mb-md-6 mb-lg-7 mb-xl-8">
	<div class="intro__wrapper" style="background-image: url('/build/img/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg')">
		<div class="container intro__content">
			<h1 class="intro__title">Вендоры</h1>
		</div>
	</div>
</div>

<?
$title = "Вендоры <span class='text--red'>дистрибуции</span>";

include($_SERVER["DOCUMENT_ROOT"].'/build/components/vendors-block.php');?>

<div class="container">
	<div class="row">
		<div class="col-12 mb-4 mb-md-6 mb-lg-7 mb-xl-8">
			<div class="h2 mb-3 mb-lg-5">
				<span>Показ баннера</span>
				<span class="text--red">глазами современников</span>
			</div>

			<p class="fsz-md lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
				ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
				результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
				рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
			</p>
			<p class="fsz-md lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
				Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
				До недавнего времени считалось, что рейтинг конкурентоспособен.
			</p>

		</div>
	</div>
</div>

<?
$footerModification = "footer__top--inner";

include($_SERVER["DOCUMENT_ROOT"].'/build/components/footer.php');?>
