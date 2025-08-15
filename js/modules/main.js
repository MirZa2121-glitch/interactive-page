import { Section1 } from "./sections.js";
import { Section2 } from "./sections.js";
import { Section3 } from "./sections.js";
import { Section4 } from "./sections.js";

export function Main() {
    const $main = document.createElement('main');
    $main.classList.add('main');

    $main.append(Section1(), Section2(), Section3(), Section4());

    return $main;
}