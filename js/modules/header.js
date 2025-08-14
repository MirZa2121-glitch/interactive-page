import { Nav } from "./nav.js";
import { Text } from "../components/text.js";

export function Header() {
    const $header = document.createElement('header');
    $header.classList.add('header');

    const $container = document.createElement('div');
    $container.classList.add('container');
    $header.appendChild($container);

    const $text = Text();

    $container.innerHTML = `
        <div class="header__wrapper">
            <div class="header__inner">
                <a class="header__logo" href="#home">
                    <img src="./img/logo/Logo.svg" alt="">
                    <p class="logo">${$text[0].text}</p>
                </a>
                ${Nav()}
            </div>
        </div>

    `
    return $header;
}