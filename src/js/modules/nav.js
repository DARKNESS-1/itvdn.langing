export function navButton() {
    let nav = document.querySelector('.nav');
    if (nav) {
        nav.addEventListener('click', (e) => {
            let target = e.target;
            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }
            e.preventDefault();
            DARKNESS.navigation.toggleToActiveLink(target);
        });
    }
};