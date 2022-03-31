export function navigationPage() {
    let navEvent = {};

    navEvent.toggleToActiveLink = (target) => {
        let links = document.querySelectorAll('.nav_link'),
            showedSection = target.dataset.link;
        links.forEach((link) => {
            if (link.classList.contains('nav_link-active')) {
                link.classList.remove('nav_link-active');
            }
        });
        target.classList.add('nav_link-active');
        scrollToActiveSection(showedSection);
    };

    let scrollToActiveSection = (showedSection) => {
        let section = document.querySelector('.' + showedSection),
            coords = section.getBoundingClientRect(),
            animateTime = 0.4;
        let timerID = setInterval(() => {
            if (window.scrollY < coords.top) {
                window.scrollBy(0, 10);
            } else {
                clearInterval(timerID);
            }
        }, animateTime || 0.5);
    };

    DARKNESS.navigation = navEvent;
}