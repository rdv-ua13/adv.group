<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/header.php'); ?>

<div class="container">
    <ol class="breadcrumb fsz-md" itemscope="" itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
            <a href="/" title="Главная" itemprop="item">
                <span itemprop="name">Главная</span>
                <meta itemprop="position" content="1">
            </a>
        </li>
        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
            <a href="/resheniya-dlya-organizacij/" title="Решения для организаций" itemprop="item">
                <span itemprop="name">Решения для организаций</span>
                <meta itemprop="position" content="2">
            </a>
        </li>
        <li><span>Офисы</span></li>
    </ol>
</div>

<?/* if (strstr($APPLICATION->GetCurDir(), "/path")) */
if (strpos($_SERVER["REQUEST_URI"], "business-solutions-details.php")) {
	echo '<div class="intro intro--inner intro--inner-empty mb-5 mb-md-0">';
}
else {
	echo '<div class="intro intro--inner mb-5 mb-md-6 mb-lg-7 mb-xl-8">';
}?>
	<div class="intro__wrapper" style="background-image: url('/build/img/rachel-moenning-zjxYwd4HOu0-unsplash.jpg')">
		<div class="container intro__content">
			<h1 class="intro__title">Решения&nbsp;<span class="text--red">для&nbsp;бизнеса</span></h1>
		</div>
	</div>
</div>

<div class="business-solution mb-5 mb-md-6 mb-lg-7 mb-xl-8">
    <div class="container">
        <div class="business-solution__wrapper">
            <img class="business-solution__img" src="/build/img/business-bg.png" alt="floor plan with the location of office equipment">
            <div class="business-solution__item-box">

                <div class="business-solution__mark business-solution__mark--first js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Настольный компьютер</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--second js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Принтер</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера2</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--third js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Цифровая машина</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера3</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--fourth js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Плоттер</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера4</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--fifth js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Ризограф</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера5</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--sixth js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Сканер</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера6</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--seventh js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Шредер</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера7</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="business-solution__mark business-solution__mark--eighth js-item-mark"></div>
                <div class="business-solution__item">
                    <button class="btn btn-primary business-solution__btn js-bs-btn">Шредер2</button>
                    <div class="business-solution__drop js-bs-drop">
                        <div class="business-solution__drop-view">
                            <img class="business-solution__drop-img" src="/build/img/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg" alt="Показ баннера глазами современников">
                        </div>
                        <div class="business-solution__drop-descr fsz-sm">
                            <div class="business-solution__drop-item">
                                <div class="mb-3 mb-lg-4 fsz-lg">
                                    <span>Показ баннера8</span>
                                    <span class="text--red">глазами&nbsp;современников</span>
                                </div>

                                <p class="fsz-sm lh-1_5">Партисипативное планирование переворачивает медиамикс. Такое понимание ситуации восходит к Эл Райс, при этом маркетинг
                                    ригиден как никогда. Коммуникация естественно позиционирует имидж предприятия. Позиционирование на рынке, анализируя
                                    результаты рекламной кампании, недостижимо. Согласно предыдущему, стратегический рыночный план тормозит коллективный
                                    рекламоноситель. К тому же повторный контакт изящно восстанавливает бренд.
                                </p>
                                <p class="mb-0 fsz-am lh-1_5">Тем не менее, перераспределение бюджета раскручивает традиционный канал, используя опыт предыдущих кампаний.
                                    Привлечение аудитории, согласно Ф.Котлеру, уравновешивает жизненный цикл продукции, используя опыт предыдущих кампаний.
                                    До недавнего времени считалось, что рейтинг конкурентоспособен.
                                </p>
                            </div>
                            <div class="business-solution__drop-item fsz-md">
                                <a href="#">Название услуги</a>
                                <a href="#">Название услуги</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="container business-solution-info">
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

<div class="container-fluid pre-footer-container">
	<div class="row">
		<div class="pre-footer pre-footer--main">
			<?php include($_SERVER["DOCUMENT_ROOT"].'/build/components/request-form.php');?>
		</div>
	</div>
</div>

<? include($_SERVER["DOCUMENT_ROOT"].'/build/components/footer.php'); ?>
