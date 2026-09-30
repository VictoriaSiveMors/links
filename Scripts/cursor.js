(function () {
    if (window.__vsmCursor) return;
    window.__vsmCursor = true;

    // mouse-type devices only
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const DEFAULT_COLOR = "#4da6ff";
    const HOVER_SELECTOR = 'a, button, summary, [role="button"], .redacted';
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LAG = reduceMotion ? 1 : 0.22; // 1 = no lag

    function build() {
        const root = document.createElement("div");
        root.id = "vsm-cursor";
        root.setAttribute("aria-hidden", "true");
        root.innerHTML =
            '<div class="vc-reticle"><svg viewBox="-24 -24 48 48"><g class="vc-ticks">' +
            '<line x1="0" y1="-17" x2="0" y2="-10"/>' +
            '<line x1="17" y1="0" x2="10" y2="0"/>' +
            '<line x1="0" y1="17" x2="0" y2="10"/>' +
            '<line x1="-17" y1="0" x2="-10" y2="0"/>' +
            '</g></svg></div><div class="vc-dot"></div>';
        document.body.appendChild(root);
        document.documentElement.classList.add("vsm-cursor-on");

        const reticle = root.querySelector(".vc-reticle");
        const dot = root.querySelector(".vc-dot");

        let x = 0, y = 0, rx = 0, ry = 0;
        let started = false;

        /* colour: nearest --c, else nearest --accent, else default */
        function setColor(el) {
            const cs = getComputedStyle(el);
            let c = cs.getPropertyValue("--c").trim() || cs.getPropertyValue("--accent").trim();
            if (!/^(#|rgb|hsl)/i.test(c)) c = DEFAULT_COLOR;
            root.style.color = c;
        }

        window.addEventListener("mousemove", (e) => {
            x = e.clientX;
            y = e.clientY;
            dot.style.transform = "translate3d(" + x + "px," + y + "px,0) translate(-50%,-50%)";
            if (!started) {
                started = true;
                rx = x; ry = y;          // snap the reticle on the first move
                root.classList.add("ready");
            }
        }, { passive: true });

        // reticle chases the pointer
        (function tick() {
            rx += (x - rx) * LAG;
            ry += (y - ry) * LAG;
            reticle.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
            requestAnimationFrame(tick);
        })();

        // hover state + member colour, updated whenever the pointer enters a new element
        document.addEventListener("mouseover", (e) => {
            root.classList.toggle("is-hover", !!e.target.closest(HOVER_SELECTOR));
            setColor(e.target);
        }, { passive: true });

        // press + click pulse
        document.addEventListener("mousedown", (e) => {
            root.classList.add("is-down");
            if (reduceMotion) return;
            const pulse = document.createElement("div");
            pulse.className = "vc-pulse";
            pulse.style.left = e.clientX + "px";
            pulse.style.top = e.clientY + "px";
            pulse.addEventListener("animationend", () => pulse.remove());
            root.appendChild(pulse);
        });
        document.addEventListener("mouseup", () => root.classList.remove("is-down"));

        // hide when the pointer leaves the window
        document.documentElement.addEventListener("mouseleave", () => root.classList.remove("ready"));
        document.documentElement.addEventListener("mouseenter", () => { if (started) root.classList.add("ready"); });
    }

    if (document.body) build();
    else document.addEventListener("DOMContentLoaded", build);
})();