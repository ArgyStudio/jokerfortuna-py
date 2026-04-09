(() => {
    const EMOJI    = '🇵🇾';
    const MAX      = 4;
    const INTERVAL = 2500;
    const SIZE_MIN = 13;
    const SIZE_MAX = 22;
    const DUR_MIN  = 3.2;
    const DUR_MAX  = 4.8;

    let active = 0;

    function spawn() {
        if (active >= MAX) return;

        const container = document.querySelector('.card');
        if (!container) return;

        const el = document.createElement('span');
        el.textContent = EMOJI;
        el.className   = 'py-bubble';

        const size = SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN);
        const dur  = DUR_MIN  + Math.random() * (DUR_MAX  - DUR_MIN);

        el.style.left     = Math.random() * 88 + '%';
        el.style.top      = Math.random() * 85 + '%';
        el.style.fontSize = size + 'px';
        el.style.setProperty('--py-duration', dur + 's');

        container.appendChild(el);
        active++;

        el.addEventListener('animationend', () => {
            el.remove();
            active--;
        }, { once: true });
    }

    window.addEventListener('load', () => {
        setInterval(spawn, INTERVAL);
    });
})();
