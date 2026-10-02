/* Optional fields on any goal:
     href: "page.html"   -> makes the whole card clickable (goes to that page)
     cta:  "Some text"   -> the little link line on the card (default "View details") */
const GOALS = [
    /* ── Kill3rKai ── */
    { member: "kill3rkai", name: "Followers", note: "Twitch followers", icon: "fa-users", current: 37, target: 50 },
    { member: "kill3rkai", name: "Affiliate", note: "Twitch affiliate requirements", icon: "fa-brands fa-twitch", current: 3, target: 4 },
    { member: "kill3rkai", name: "Partner", note: "Twitch partner requirements", icon: "fa-brands fa-twitch", current: 0, target: 2 },
    { member: "kill3rkai", name: "YouTube Subs", note: "YouTube subscribers", icon: "fa-brands fa-youtube", current: 65, target: 100 },
    { member: "kill3rkai", name: "Instagram Followers", note: "Instagram followers", icon: "fa-brands fa-instagram", current: 3, target: 10 },

    /* ── Polaris ── */
    { member: "polaris", name: "Followers", note: "Twitch followers", icon: "fa-users", current: 18, target: 30 },
    { member: "polaris", name: "YouTube Subs", note: "YouTube subscribers", icon: "fa-brands fa-youtube", current: 142, target: 150 },

    /* ── Orion ── */
    { member: "orion", name: "Followers", note: "Twitch followers", icon: "fa-users", current: 4, target: 10 },

    /* ── LillyAI ── */
    { member: "lillyai", name: "Website", note: "get kai to make me a website of my own...", icon: "fa-globe", current: 0, target: 100, href: "requirements.html", cta: "View requirements" },
];

/* who's who — colours, logos and profile links. Change a tag line here. */
const MEMBERS = {
    kill3rkai: { name: "Kill3rKai", color: "#4da6ff", rgb: "77,166,255", img: "Images/kill3rkai.png", profile: "members/kill3rkai.html", tag: "// streamer · developer" },
    polaris: { name: "Polaris", color: "#a78bfa", rgb: "167,139,250", img: "Images/polaris.png", profile: "members/polaris.html", tag: "// streamer · vtuber" },
    orion: { name: "Orion", color: "#93a866", rgb: "147,168,102", img: "Images/orion.png", profile: "members/orion.html", tag: "// streamer" },
    lillyai: { name: "LillyAI", color: "#ff6eb4", rgb: "255,110,180", img: "Images/lilly.png", profile: "members/lillyai.html", tag: "// ai member" },
};

(function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.getElementById("goalsRoot");
    if (!root) return;

    const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    const fmt = (n) => Number(n).toLocaleString();
    const iconClass = (i) => (/fa-(solid|brands|regular)/.test(i) ? i : "fa-solid " + i);

    function card(g) {
        const pct = g.target > 0 ? Math.min(100, Math.round((g.current / g.target) * 100)) : 0;
        const done = pct >= 100;
        const left = Math.max(0, g.target - g.current);

        // optional: whole card becomes a link when the goal has an href
        const link = g.href
            ? `<a class="goal-link" href="${esc(g.href)}" aria-label="${esc(g.name)}: ${esc(g.cta || "View details")}"></a>`
            : "";
        const cta = g.href
            ? `<div class="goal-cta">${esc(g.cta || "View details")} <i class="fa-solid fa-arrow-right"></i></div>`
            : "";

        return `
      <article class="goal-card${done ? " done" : ""}${g.href ? " is-link" : ""}">
        ${link}
        <div class="goal-top">
          <div class="goal-icon"><i class="${esc(iconClass(g.icon))}"></i></div>
          <div class="goal-id">
            <div class="goal-name">${esc(g.name)}</div>
            <div class="goal-note">${esc(g.note || "")}</div>
          </div>
          <div class="goal-count"><b data-to="${g.current}">${reduceMotion ? fmt(g.current) : 0}</b> <span>/ ${fmt(g.target)}</span></div>
        </div>
        <div class="goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${g.target}" aria-valuenow="${g.current}" aria-label="${esc(g.name)} progress">
          <div class="goal-fill" data-w="${pct}"></div>
        </div>
        <div class="goal-meta">
          <span>${done ? "Goal complete" : fmt(left) + " to go"}</span>
          <span class="pct">${pct}%</span>
        </div>
        ${cta}
      </article>`;
    }

    function pendingCard() {
        return `
      <article class="goal-card pending">
        <div class="goal-top">
          <div class="goal-icon"><i class="fa-solid fa-hourglass-half"></i></div>
          <div class="goal-id">
            <div class="goal-name">Goals incoming</div>
            <div class="goal-note">Nothing set yet — check back soon</div>
          </div>
        </div>
      </article>`;
    }

    function section(key, i) {
        const m = MEMBERS[key];
        const list = GOALS.filter((g) => g.member === key);
        const done = list.filter((g) => g.target > 0 && g.current >= g.target).length;
        const summary = list.length ? `${done} / ${list.length} complete` : "no goals yet";
        return `
      <section class="mbr" id="${key}" style="--c:${m.color}; --rgb:${m.rgb}; --i:${i}">
        <div class="mbr-head">
          <div class="mbr-av"><img src="${esc(m.img)}" alt="${esc(m.name)} logo"></div>
          <div>
            <h2 class="mbr-name">${esc(m.name)}</h2>
            <div class="mbr-tag">${esc(m.tag)} · ${summary}</div>
          </div>
          <a class="mbr-link" href="${esc(m.profile)}">Profile <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="goal-grid">
          ${list.length ? list.map(card).join("") : pendingCard()}
        </div>
      </section>`;
    }

    root.innerHTML = Object.keys(MEMBERS).map(section).join("");

    /* fill bars + count numbers up when each card scrolls into view */
    function reveal(cardEl) {
        const fill = cardEl.querySelector(".goal-fill");
        if (fill) fill.style.width = fill.dataset.w + "%";

        const num = cardEl.querySelector(".goal-count b");
        if (num && !reduceMotion) {
            const to = Number(num.dataset.to);
            const start = performance.now();
            const dur = 1100;
            (function step(now) {
                const t = Math.min(1, (now - start) / dur);
                const eased = 1 - Math.pow(1 - t, 3);
                num.textContent = fmt(Math.round(to * eased));
                if (t < 1) requestAnimationFrame(step);
            })(start);
        }
    }

    const cards = root.querySelectorAll(".goal-card:not(.pending)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
        cards.forEach((c) => {
            const f = c.querySelector(".goal-fill");
            if (f) f.style.width = f.dataset.w + "%";
            const n = c.querySelector(".goal-count b");
            if (n) n.textContent = fmt(n.dataset.to);
        });
    } else {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    reveal(e.target);
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.25 });
        cards.forEach((c) => io.observe(c));
    }
})();