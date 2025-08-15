import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { Text } from "../components/text.js";

export function Section1() {
    const $section1 = document.createElement('section');
    $section1.classList.add('intro');

    const $text = Text();

    $section1.innerHTML += `
        <div class="container">
            <div class="intro__wrapper" id="home">
                <div class="intro__inner">
                    <div class="intro__text">
                        <h1 class="intro__title">${$text[1].text}</h1>
                        <p class="intro__description">${$text[1].description}</p>

                        <div class="btn-box">
                            <a class="btn1" href="#link">${$text[1].btn1}</a>
                            <a class="btn2" href="#link">${$text[1].btn2}</a>
                        </div>
                    </div>
                </div>
                <div class="hero-ground"></div>
            </div>

            <div class="sponsore-wrapper">
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="sponsore-box">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="sponsore-box">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="sponsore-box">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-1.png" alt="" class="sponsore">
                                <img src="./img/logo/Logo-2.png" alt="" class="sponsore">
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    `

        $section1.initSwiper = () => {
        new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 4000, 
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
               
            }
        });
    };

    return $section1;
}

export function Section2() {
    const $section2 = document.createElement('section');
    $section2.classList.add('services');

    const $text = Text();

    $section2.innerHTML += `
        <div class="container" id="services">
            <div class="services__wrapper">
            <div class="services__text">
                <p class="services__subtitle">${$text[2].text}</p>
                <h2 class="services__title">${$text[2].description}</h2>
            </div>
                <div class="services__inner">
                    <div class="services__card">
                        <div class="card">
                            <div class="card__inner">
                                <div class="card-hero-1"></div>
                                <h3 class="card__title">${$text[3].text}</h3>
                                <p class="card__description">${$text[3].description}</p>
                                <div class="btn-box">
                                    <a href="#link" class="card__btn">${$text[3].btn}</a>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner">
                                <div class="card-hero-2"></div>
                                <h3 class="card__title">${$text[4].text}</h3>
                                <p class="card__description">${$text[4].description}</p>
                                <div class="btn-box">
                                    <a href="#link" class="card__btn">${$text[4].btn}</a>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__inner">
                                <div class="card-hero-3"></div>
                                <h3 class="card__title">${$text[5].text}</h3>
                                <p class="card__description">${$text[5].description}</p>
                                <div class="btn-box">
                                    <a href="#link" class="card__btn">${$text[5].btn}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    return $section2;
}

export function Section3() {
    const $section3 = document.createElement('section');
    $section3.classList.add('customer');

    const $text = Text();

    $section3.innerHTML += `
        <div class="container">
            <div class="customer__wrapper">
                <div class="customer__inner">
                <div class="customer__hero"><img src="./img/details/Group-1.png" alt=""></div>
                    <div class="customer__box">
                    <h2 class="customer__title">${$text[6].text}</h2>
                        <div class="customer__text">
                            <div class="check-box">
                                <img src="./img/vector/check.png" alt="" class="check">
                            </div>

                            <p class="customer__description">${$text[6].description1}</p>
                        </div>
                        <div class="customer__text">
                            <div class="check-box">
                                <img src="./img/vector/check.png" alt="" class="check">
                            </div>

                            <p class="customer__description">${$text[6].description2}</p>
                        </div>
                        <div class="customer__text">
                            <div class="check-box">
                                <img src="./img/vector/check.png" alt="" class="check">
                            </div>

                            <p class="customer__description">${$text[6].description3}</p>
                        </div>
                        <a class="customer__btn" href="#link">${$text[6].btn}</a>
                    </div>
                </div>
            </div>
        </div>
    `

    return $section3;
}

export function Section4() {
    const $section4 = document.createElement('section');
    $section4.classList.add('connections');
    
    const $text = Text();

    $section4.innerHTML += `
        <div class="container">
            <div class="connections__wrapper">
                <div class="connections__inner">
                    <div class="connections__text">
                        <h2 class="connections__title">${$text[7].text}</h2>
                        
                        <div class="connections__box">
                            <p class="connections__description">${$text[7].description1}</p>
                        </div>
                        <div class="connections__box">
                            <p class="connections__description"><img src="./img/vector/vector-2.svg" alt="" class="">${$text[7].description2}</p>
                        </div>
                        <div class="connections__box">
                            <p class="connections__description"><img src="./img/vector/vector-3.svg" alt="" class="">${$text[7].description3}</p>
                        </div>
                    </div>
                    <img src="./img/details/Group-2.png" alt="" class="">
                </div>
            </div>
        </div>
    `

    return $section4;
}