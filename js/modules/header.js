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
                <div class="header__logo" href="#home">
                    <img src="./img/logo/Logo.svg" alt="">
                    <a class="logo" href="#home">${$text[0].text}</a>
                </div>
                ${Nav()}
            </div>
        </div>

    `
    return $header;
}