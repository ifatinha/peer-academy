/** AOS Animation */
AOS.init();

/** ativar link na página */
const links = document.querySelectorAll("#menu-desktop .nav-desktop a");

function ativarLink(link) {
    const url = location.href;
    const lHref = link.href;

    if (url.includes(lHref)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);