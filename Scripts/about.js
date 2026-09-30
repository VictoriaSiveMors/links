/* about.js — VSM about page
   Same circuit-grid + stars canvas and custom cursor as index.js. */

(function () {
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");
    const BLUE = "rgba(77,166,255,";
    const PURPLE = "rgba(167,139,250,";

    function mulberry32(a) {
        return function () {
            a |= 0; a = a + 0x6D2B79F5 | 0;
            let t = Math.imul(a ^ a >>> 15, 1 | a);
            t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }

    function draw() {
        const W = (canvas.width = window.innerWidth);
        const H = (canvas.height = window.innerHeight);
        ctx.clearRect(0, 0, W, H);

        ctx.strokeStyle = BLUE + "0.045)";
        ctx.lineWidth = 1;
        const step = 64;
        for (let x = 0; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

        const rng = mulberry32(7);
        const starCount = Math.round((W * H) / 26000);
        for (let i = 0; i < starCount; i++) {
            const x = rng() * W, y = rng() * H;
            const r = 0.6 + rng() * 1.5;
            const a = 0.2 + rng() * 0.4;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220,215,255,${a})`;
            ctx.shadowColor = `rgba(220,215,255,${a * 0.5})`;
            ctx.shadowBlur = r * 3;
            ctx.fill();
        }
        ctx.shadowBlur = 0;

        function hex(cx, cy, r, alpha, color) {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 180) * (60 * i - 30);
                const px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = color + alpha + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        [
            { cx: 90, cy: 90, color: BLUE },
            { cx: W - 90, cy: 90, color: PURPLE },
            { cx: 90, cy: H - 90, color: PURPLE },
            { cx: W - 90, cy: H - 90, color: BLUE },
        ].forEach(({ cx, cy, color }) => {
            for (let i = 0; i < 3; i++) hex(cx, cy, 30 + i * 26, 0.08 - i * 0.02, color);
        });
    }

    draw();
    window.addEventListener("resize", draw);
})();

/* ── custom cursor ── */
(function () {
    const dot = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");
    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;

    let rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
        rx = e.clientX; ry = e.clientY;
    });
    function tick() {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        requestAnimationFrame(tick);
    }
    tick();

    // ring grows over links and cards
    document.querySelectorAll("a, .card").forEach((el) => {
        el.addEventListener("pointerenter", () => document.body.classList.add("hot"));
        el.addEventListener("pointerleave", () => document.body.classList.remove("hot"));
    });
})();