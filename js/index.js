import { Header } from './modules/header.js';
import { Main } from './modules/main.js';

const $root = document.getElementById('root');

function startApp() {
    const $header = Header();
    $root.appendChild($header);

    const $main = Main();
    $root.appendChild($main);

    const $section1 = $main.querySelector('.intro');
    if ($section1 && $section1.initSwiper) {
        $section1.initSwiper();
    }
}

startApp();