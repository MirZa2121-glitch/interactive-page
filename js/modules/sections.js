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
            spaceBetween: 1,
        });
    };

    return $section1;
}

export function Section2() {
    const $section2 = document.createElement('section');
    $section2.classList.add('services');

    const $text = Text();

    $section2.innerHTML += `

    `

    return $section2;
}