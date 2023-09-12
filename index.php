<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Главная страница</title>
    <link rel="stylesheet" href="css/style.css?t=<?php echo(microtime(true).rand()); ?>" type="text/css"/>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-param" content="authenticity_token">


<body>
<header class="main-header main-header--home" id="header">
    <section class="main-header-top">
        <a class="main-header-top-cart" href="/">
      <span class="main-header-top-cart__icon">
        <img src="./img/svg/header_logo.svg" alt="SVG изображение">
      </span>
            <span class="main-header-top-cart__title"></span>
        </a>
    </section>

    <section class="main-header-inner">
        <div class="main-header-left">
            <article class="main-header-logo">
                <a class="main-header-logo__link" href="/">
                    <img src="./img/svg/header_logo.svg" alt="SVG logo">
                </a>
            </article>
        </div>

        <div class="main-header-middle">
            <article class="main-header-description">
                <span class="main-header-description__text">Разработано в Германии. Сделано в России.</span>
            </article>
        </div>

        <div class="main-header-search">
            <button class="main-header-search-btn" aria-label="Открыть поисковую строку">
        <span class="main-header-search-btn__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke-width="2"></path>
            <path d="M12.5 12.5L17.5 17.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
            </button>
            <div class="main-header-search-container">
                <form action="/" class="main-header-search-form">
                    <h6 class="main-header-search-title">Что вы ищете?</h6>
                    <div class="main-header-search-input custom-input-wrapper">
                        <input type="search" name="search[filter][keyword]" value="" class="custom-input" aria-label="Поисковая строка" placeholder="Раковина для ванной комнаты">
                    </div>
                    <div class="main-header-search-actions">
                        <button class="main-header-search-actions__reset button button--grey" type="reset">
                            <span class="button-title">Отмена</span>
                        </button>
                        <button class="main-header-search-actions__submit button" type="submit">
                            Искать
                        </button>
                    </div>
                </form>
            </div>
        </div>


        <div class="main-header-mobile">
            <button class="main-header-burger" type="button" aria-label="Открыть мобильное меню">
                <span class="main-header-burger__icon"></span>
                <span class="main-header-burger__title">Меню</span>
            </button>
        </div>

        <div class="main-header-right">
            <div class="main-header-scrollable">
                <nav class="main-header-nav" aria-label="Основная навигация">
                    <div class="main-header-nav__item">
                        <a class="main-header-nav__link" href="/">
                            <span class="main-header-nav__title">О компании</span>
                        </a>
                    </div>
                    <div class="main-header-nav__item">
                        <a class="main-header-nav__link" href="/">
                            <span class="main-header-nav__title">Сотрудничество </span>
                        </a>
                    </div>

                    <div class="main-header-nav__item main-header-nav__item--dropdown">
                        <a class="main-header-nav__link" data-click-trackable="header_show-catalog">
                            <span class="main-header-nav__title">Каталог товаров</span>
                            <span class="main-header-nav__icon">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L5 1L1 5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                        </a>
                        <div class="main-header-dropdown">
                            <div class="main-header-dropdown__item">
                                <a class="main-header-dropdown__link" href="/">
                                    <img class="main-header-dropdown__icon" src="./img/our_prod/image1_1.png" alt="Смесители" width="80" height="80">
                                    <span class="main-header-dropdown__title">Смесители</span>
                                </a>
                            </div>
                            <div class="main-header-dropdown__item">
                                <a class="main-header-dropdown__link" href="/">
                                    <img class="main-header-dropdown__icon" src="./img/our_prod/image2_1.png" alt="Мебель" width="80" height="80">
                                    <span class="main-header-dropdown__title">Мебель</span>
                                </a>
                            </div>
                            <div class="main-header-dropdown__item">
                                <a class="main-header-dropdown__link" href="/">
                                    <img class="main-header-dropdown__icon" src="./img/our_prod/image3_1.png" alt="Душевая программа" width="80" height="80">
                                    <span class="main-header-dropdown__title">Душевая программа</span>
                                </a>
                            </div>
                            <div class="main-header-dropdown__item">
                                <a class="main-header-dropdown__link" href="/">
                                    <img class="main-header-dropdown__icon" src="./img/our_prod/image4_1.png" alt="Фаянс" width="80" height="80">
                                    <span class="main-header-dropdown__title">Фаянс</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="main-header-actions">
                    <article class="main-header-phone">
                        <a class="main-header-phone__link" href="/" aria-label="Контактный телефон">
              <span class="main-header-phone__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.75 1.25H6.25C5.55937 1.25 5 1.80937 5 2.5V17.5C5 18.1906 5.55937 18.75 6.25 18.75H13.75C14.4406 18.75 15 18.1906 15 17.5V2.5C15 1.80937 14.4406 1.25 13.75 1.25ZM10 17.5C9.655 17.5 9.375 17.22 9.375 16.875C9.375 16.53 9.655 16.25 10 16.25C10.345 16.25 10.625 16.53 10.625 16.875C10.625 17.22 10.345 17.5 10 17.5ZM13.75 15.625H6.25V3.125H13.75V15.625Z" fill="#999999"></path>
                </svg>
              </span>
                            <span class="main-header-phone__title">+7 (905) 543 23 45</span>
                        </a>
                    </article>

                    <article class="main-header-cart">
                        <a class="main-header-cart__link" href="/" aria-label="Корзина">
              <span class="main-header-cart__icon">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.70312 3.11523H4.87704C5.31182 4.85436 6.26834 8.68045 6.61617 10.0718C7.05095 11.8109 7.48573 12.2457 9.22486 12.2457C10.5292 12.2457 13.5726 12.1152 14.877 12.1152C18.3769 12.1152 18.377 10.6152 19.0075 5.28915C13.2683 5.28915 9.52921 5.28915 8.65965 5.28915" stroke="#F5702C" stroke-width="1.6" stroke-linecap="round"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.22546 18.1155C9.18595 18.1155 9.96459 17.3368 9.96459 16.3763C9.96459 15.4158 9.18595 14.6372 8.22546 14.6372C7.26496 14.6372 6.48633 15.4158 6.48633 16.3763C6.48633 17.3368 7.26496 18.1155 8.22546 18.1155ZM15.3114 18.1155C16.2719 18.1155 17.0505 17.3368 17.0505 16.3763C17.0505 15.4158 16.2719 14.6372 15.3114 14.6372C14.3509 14.6372 13.5723 15.4158 13.5723 16.3763C13.5723 17.3368 14.3509 18.1155 15.3114 18.1155Z" fill="#F5702C"></path>
                </svg>
              </span>
                            <span class="main-header-cart__title"></span>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <section class="main-header-spacer"></section>
    <section class="main-header-overlay"></section>
</header>


<div class="flash-message-list">
</div>

<main class="page-main">
    <section class="main-intro" data-observable="home_intro">
        <div class="main-intro-inner">
            <div class="main-intro-spacer"></div>
            <div class="main-intro-background"></div>
            <article class="main-intro-content">
                <h1 class="main-intro-content__title">Сантехника и мебель для ванной комнаты</h1>

                <nav class="main-intro-nav" aria-label="Дополнительная навигация">
                    <div class="main-intro-nav__item">
                        <a class="main-intro-nav__link arrow-btn" href="/">
                            <span class="main-intro-nav__title">О компании</span>
                        </a>
                    </div>
                    <div class="main-intro-nav__item">
                        <a class="main-intro-nav__link arrow-btn" href="/">
                            <span class="main-intro-nav__title">Сотрудничество </span>
                        </a>
                    </div>
                    <div class="main-intro-nav__item">
                        <a class="main-intro-nav__link arrow-btn" href="/">
                            <span class="main-intro-nav__title">Каталог товаров</span>
                        </a>
                    </div>
                </nav>
            </article>

            <article class="main-intro-slider swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                <div class="swiper-wrapper" style="transition-duration: 1000ms;">
                    <div class="main-intro-slider__item swiper-slide" style="width: 1317px; opacity: 0; transform: translate3d(0px, 0px, 0px); transition-duration: 1000ms;">
                        <div class="main-intro-slider__content">
                            <div class="main-intro-slider__items">
                                <picture>
                                    <source media="(max-width: 1024px)" srcset="/img/slider/1m_1.png, /img/slider/1m_2.png 2x">
                                    <img src="./img/slider/1_1.png" srcset="/img/slider/1_2.png 2x" alt="image">
                                </picture>


                                <div class="main-intro-slider__price" style="top: 450px;right: 320px">
                                    <a  class="css-modal-open main-intro-slider__link button" href="#windowmdl">Обратная связь</a>>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-intro-slider__item swiper-slide swiper-slide-prev" style="width: 1317px; opacity: 0; transform: translate3d(-1317px, 0px, 0px); transition-duration: 1000ms;">
                        <div class="main-intro-slider__content">
                            <picture>
                                <source media="(max-width: 1024px)" srcset="/img/slider/2m_1.png, /img/slider/2m_2.png 2x">
                                <img src="./img/slider/2_1.png" srcset="/img/slider/2_2.png 2x" alt="image">
                            </picture>

                            <div class="main-intro-slider__price" style="top: 450px;right: 320px">
                                <a  class="css-modal-open main-intro-slider__link button" href="#windowmdl">Обратная связь</a>>
                            </div>
                        </div>
                    </div>
                    <div class="main-intro-slider__item swiper-slide swiper-slide-active" style="width: 1317px; opacity: 1; transform: translate3d(-2634px, 0px, 0px); transition-duration: 1000ms;">
                        <div class="main-intro-slider__content">
                            <picture>
                                <source media="(max-width: 1024px)" srcset="/img/slider/3m_1.png, /img/slider/3m_2.png 2x">
                                <img src="/img/slider/3_1.png" srcset="/img/slider/3_2.png 2x" alt="image">
                            </picture>
                            <div class="main-intro-slider__price" style="top: 450px;right: 320px">
                                <a  class="css-modal-open main-intro-slider__link button" href="#windowmdl">Обратная связь</a>>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="main-intro-slider__nav swiper-pagination-clickable swiper-pagination-bullets">
                    <button class="main-top__button swiper-pagination-bullet" type="button" aria-label="Go to slide 1" tabindex="0" role="button">
                        <div class="main-top__line"></div>
                    </button>

                    <button class="main-top__button swiper-pagination-bullet" type="button" aria-label="Go to slide 2" tabindex="0" role="button">
                        <div class="main-top__line"></div>
                    </button>

                    <button class="main-top__button swiper-pagination-bullet swiper-pagination-bullet-active" type="button" aria-label="Go to slide 3" tabindex="0" role="button">
                        <div class="main-top__line"></div>
                    </button>

                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></article>

        </div>
    </section>


    <div class="dm-overlay" id="windowmdl">
        <div class="dm-table">
            <div class="dm-cell">
                <div class="dm-modal">
                    <a href="#close" class="close">X</a>
                    <h3>Обратная связь </h3>
                    <div id="contact-wrapper">
                        <form class="feedback-form" id="contactForm" action="/php/email.php" method="POST" enctype="multipart/form-data" onsubmit="return validateForm(this)">
                            <h2>Форма обратной связи</h2>
                            <p id="error-msg" style="color: red;"></p>
                            <label for="name">Имя:</label>
                            <input type="text" id="name" name="name" minlength="5" maxlength="20" required>

                            <label for="last_name">Фамилия:</label>
                            <textarea id="last_name" name="last_name" minlength="5" maxlength="25" required></textarea>

                            <label for="Number">Номер:</label>
                            <input type="Number" id="Number" name="Number" minlength="10" maxlength="11" required>

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" minlength="5" maxlength="20" required>

                            <label for="attachment">Прикрепить файл:</label>
                            <input type="file" id="attachment" name="attachment" required>

                            <button type="submit">Отправить</button>

                        </form>
                    </div>


                </div>
            </div>
        </div>
    </div>









    <section class="about-us" data-observable="home_about-us">
        <h2 class="visually-hidden">О нас</h2>
        <div class="about-us__wrapper container">
            <div class="about-us__box">
                <p class="about-us__text">
                    <span class="about-us__name">Orange</span> – немецкая торговая марка. Главный офис и основное производство расположены в Германии. Производим смесители,  душевые кабины,
                    ванны и мебель для ванных комнат.
                    Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям российскиого рынка.
                </p>
                <p class="about-us__text">Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям российского рынка.</p>
            </div>
            <ul class="about-us__list">
                <li class="about-us__item about-us__item--technology">
                    <h3 class="about-us__subtitle">Собственное производство</h3>
                    <p class="about-us__desc">Высокий уровень технологий позволяет гарантировать качество продукции на протяжении 10 лет</p>
                </li>
                <li class="about-us__item about-us__item--ecology">
                    <h3 class="about-us__subtitle">Экологичность и доступность</h3>
                    <p class="about-us__desc">Уникальный состав сплава делает продукцию Orange безопасной для потребителя</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="production page-main__production" data-observable="home_products">
        <div class="production__wrapper container">
            <h2 class="production__title">Наша продукция</h2>
            <ul class="production__list">
                <li class="production__item">
                    <a class="production__link production__link--1" href="/">
                        <picture>
                            <source media="(max-width: 1023px)" srcset="/img/our_prod/imagem1_1.png, /img/our_prod/imagem1_2.png 2x">
                            <img src="./img/our_prod/image1_1.png" srcset="/img/our_prod/image1_2.png 2x" alt="image" width="292" height="350">
                        </picture>
                        <div class="production__subtitle">Смесители</div>
                    </a>
                </li>
                <li class="production__item">
                    <a class="production__link production__link--2" href="/">
                        <picture>
                            <source media="(max-width: 1023px)" srcset="/img/our_prod/imagem2_1.png, /img/our_prod/imagem2_2.png 2x">
                            <img src="./img/our_prod/image2_1.png" srcset="/img/our_prod/image2_2.png 2x" alt="image" width="292" height="350">
                        </picture>
                        <div class="production__subtitle">Мебель</div>
                    </a>
                </li>
                <li class="production__item">
                    <a class="production__link production__link--3" href="/">
                        <picture>
                            <source media="(max-width: 1023px)" srcset="/img/our_prod/imagem3_1.png, /img/our_prod/imagem3_2.png 2x">
                            <img src="./img/our_prod/image3_1.png" srcset="/img/our_prod/image3_2.png 2x" alt="image" width="292" height="350">
                        </picture>
                        <div class="production__subtitle">Душевая программа</div>
                    </a>
                </li>
                <li class="production__item">
                    <a class="production__link production__link--4" href="/">
                        <picture>
                            <source media="(max-width: 1023px)" srcset="/img/our_prod/imagem4_1.png, /img/our_prod/imagem4_2.png 2x">
                            <img src="./img/our_prod/image4_1.png" srcset="/img/our_prod/image4_2.png 2x" alt="image" width="292" height="350">
                        </picture>
                        <div class="production__subtitle">Фаянс</div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <section class="index-collection" data-observable="home_collection">
        <div class="index-collection-inner">
            <article class="index-collection-card">
                <div class="index-collection-more">
                    <div class="index-collection-more__title">ARISTO</div>
                    <a class="index-collection-more__link" href="/">
                        <span class="index-collection-more__text">от</span>
                        <span class="index-collection-more__price">
                  4 990 ₽
                </span>
                    </a>
                </div>
                <picture class="index-collection-preview">
                    <source media="(max-width: 1023px)" srcset="/img/collection_m1.png, /img/collection_m2.png 2x">
                    <source media="(max-width: 1600px)" srcset="/img/collection.png, /img/collection_2.png 2x">
                    <img src="./img/collection.png" srcset="/img/collection_2.png 2x" alt="image" width="988" height="665">
                </picture>
            </article>
            <article class="index-collection-info">
                <div class="index-collection-description">
                    <h2 class="index-collection-description__title">Коллекции</h2>
                    <p class="index-collection-description__text">
                        Чувственность и элегантность, пуризм и эксклюзивность, а может уют и романтичность? Наши коллекции, разработанные лучшими дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую вы всегда искали.
                    </p>
                </div>
                <footer class="index-collection-footer">
                    <a class="index-collection-footer__link arrow-btn" href="/">
                        Все коллекции
                    </a>
                </footer>
            </article>
        </div>
    </section>
    <section class="product page-main__product" data-observable="home_popular-products">
        <div class="product__wrapper container">
            <h2 class="product__title">Акционные товары</h2>
            <ul class="product__list">
                <li class="product__item">
                    <div class="product__link effect" >
                        <div class="product__promo">-15%</div>
                        <img srcset="./img/catalog/id_1.png 2x" alt="O-mebel зеркальный шкаф со светом Лотос" width="180" height="188" class="product__image" src="./img/catalog/id_1.png">
                        <p class="product__desc">O-mebel зеркальный шкаф со светом Лотос</p>
                        <div class="product__inner">
                            <div class="product__price"><span>5 990 ₽</span></div>
                            <div class="product__old-price"><span>6 499 ₽</span></div>
                        </div>
                    </div>
                </li>
                <li class="product__item">
                    <div class="product__link effect" >
                        <img srcset="./img/catalog/id_2.png 2x" alt="Orange Berti M17-021cr однорычажный смеситель для раковины без донного клапана" width="180" height="188" class="product__image" src="./img/catalog/id_2.png">
                        <p class="product__desc">Orange Berti M17-021cr однорычажный смеситель для раковины без донного клапана</p>
                        <div class="product__inner">
                            <div class="product__price"><span>4 090 ₽</span></div>
                        </div>
                    </div>
                </li>
                <li class="product__item">
                    <div class="product__link effect">
                        <img srcset="./img/catalog/id_3.png 2x" alt="Orange Berti M17-100cr однорычажный ванно-душевой смеситель" width="180" height="188" class="product__image" src="./img/catalog/id_3.png">
                        <p class="product__desc">Orange Berti M17-100cr однорычажный ванно-душевой смеситель</p>
                        <div class="product__inner">
                            <div class="product__price"><span>5 490 ₽</span></div>
                        </div>
                    </div>
                </li>
                <li class="product__item">
                    <div class="product__link effect">
                        <div class="product__promo">-12%</div>
                        <img srcset="./img/catalog/id_4.png 2x" alt="Ручной душ O-Shower OS05" width="180" height="188" class="product__image" src="./img/catalog/id_4.png">
                        <p class="product__desc">Ручной душ O-Shower OS05</p>
                        <div class="product__inner">
                            <div class="product__price"><span>1 100 ₽</span></div>
                            <div class="product__old-price"><span>1 990 ₽</span></div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </section>
    <section class="advantages page-main__advantages" data-observable="home_benefits">
        <div class="advantages__wrapper container">
            <h2 class="advantages__title">Наши преимущества</h2>
            <ul class="advantages__list">
                <li class="advantages__item advantages__item--refund">

                    <h3 class="advantages__subtitle">Бесплатный возврат</h3>
                    <p class="advantages__desc">Если товар вам не подходит, вы можете верунть его в течении 30 дней.</p>
                </li>
                <li class="advantages__item advantages__item--quality">
                    <h3 class="advantages__subtitle">Гарантия 10 лет</h3>
                    <p class="advantages__desc">Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий.</p>
                </li>
                <li class="advantages__item advantages__item--secure">
                    <h3 class="advantages__subtitle">Безопасная оплата</h3>
                    <p class="advantages__desc">Банковской картой или наличными при получении</p>
                </li>
            </ul>
        </div>
    </section>
    <div class="grid--Rectangle">
        <img src="./img/image22.png" alt="Описание изображения" class="Rectangle--image">
    </div>
    </div>
</main>

<footer class="main-footer">
    <section class="main-footer__wrapper container">
        <div class="main-footer__inner-box">
            <svg width="126" height="35">
                <image xlink:href="/img/svg/header_logo.svg"></image>
            </svg>
            <ul class="main-footer__list-nav">
                <li class="main-footer__item"><a class="main-intro-nav__link arrow-btn" href="/">О компании</a></li>
                <li class="main-footer__item"><a class="main-intro-nav__link arrow-btn" href="/">Где купить</a></li>
                <li class="main-footer__item"><a class="main-intro-nav__link arrow-btn" href="/">Сторудничество</a></li>
                <li class="main-footer__item"><a class="main-intro-nav__link arrow-btn" href="/">Сервисное обслуживание</a></li>
                <li class="main-footer__item"><a class="main-intro-nav__link arrow-btn" href="/">Покупателям</a></li>
                <li class="main-footer__item"><a class="main-intro-nav__link arrow-btn" href="/">Контакты</a></li>
            </ul>
            <div
            <div class="main-footer__box-ask">
                <h3>Есть вопросы?</h3>
                <ul class="main-footer__list-ask">
                    <li class="main-footer__item"><a class="main-footer__link effect main-footer__link--mail" href="/">hello@orangemixers.ru</a></li>
                    <li class="main-footer__item"><a class="main-footer__link effect main-footer__link--phone" href="/">+7 (495) 543 23 45</a></li>
                </ul>
            </div>
            <div class="main-footer__box-social">
                <h3>Мы в соцсетях</h3>
                <ul class="main-footer__list-social">
                    <li class="main-footer__item">
                        <a class="main-footer__link effect" href="/">
                            <span class="visually-hidden">Наш Инстаграм</span>
                            <svg class="main-footer__icon-in effect" width="38" height="38">
                                <image xlink:href="/img/svg/icons/Instagram.svg"></image>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-footer__copyright">
            <p>© 2019 Orange Mixers</p><a class="effect main-footer__copyright-link" target="_blank" href="/">Разработано в bitberry.ru</a>
        </div>
    </section>
    <div class="main-footer__scroll-top"><a class="main-footer__top-link" href="/"><span class="visually-hidden">Вернуться в начало</span>
            <svg class="effect main-footer__icon-arrow" width="35" height="28">
                <image xlink:href="/img/svg/up_arrow.svg"></image>
            </svg></a></div>
</footer>

<script src="./js/script2.js" defer="defer"></script>
<script src="./js/script.js" defer="defer"></script>
<script src="./js/script3.js" defer="defer"></script>
<script src="./js/script4.js" defer="defer"></script>
<script src="./js/side_arrows.js" defer="defer"></script>


</body></html>
