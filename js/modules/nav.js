export function Nav() {
    const $nav = document.createElement('nav');
    $nav.classList.add('nav');

    return `
        <ul class="header__list">
            <li><a href="#link" class="link">Product</a></li>
            <li><a href="#services" class="link">Services</a></li>
            <li><a href="#link" class="link">About</a></li>
            <a class="btn" href="#link">Log In</a>
        </ul>
    `
}