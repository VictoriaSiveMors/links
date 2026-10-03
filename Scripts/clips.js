const CLIPS = [
    /* ── Kill3rKai ── */
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/4NyHGgzG1hg", title: "Committing War Crimes In WARDOGS" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/Oy5eB8oostM", title: "Just Taking Him Somewhere Safe" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/RMFLEk6NhLA", title: "Most Embarrassing Death In WARDOGS" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/XIuk9SDW-R4", title: "Getting Polaris Killed In Phas" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/tEgq9XWaU70", title: "Hunter Rework Looks A Bit Different" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/EnDq7sonm-I", title: "Things Just Kept Getting Worse" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/Zyhw-tgyNIQ", title: "Best Sniper in VSM" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/b5zLCfVbasg", title: "Kai Obliterates Polaris In Machine Party" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/yWm2C3tquKU", title: "Blatently Cheating In Machine Party" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/zJj3pKm7mWc", title: "Orion Got Kai Barkin" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/wni3ykVXR9I", title: "Polaris Does A Racism" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/Ls3Xv0oYHVY", title: "Pride Restored???" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/pvVbKk2uqko", title: "A MONKEY IN A WHAT!?" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/1ElEXcjrbcU", title: "BY THE WAHT IN MY WHAT!?" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/0P6BlzLKRf0", title: "Kai gets checked at airline security" },
    { member: "kill3rkai", url: "https://www.youtube.com/shorts/WGg5WHGva-0", title: "Kai teaches how to commit fraud on twitch" },

    /* ── Polaris ── */
    { member: "polaris", url: "https://www.youtube.com/shorts/2JGa1U7PcEc", title: "Bad Situation" },
    { member: "polaris", url: "https://www.youtube.com/shorts/eNnrwnYn9gk", title: "In a cis way" },
    { member: "polaris", url: "https://www.youtube.com/shorts/5TborM2rJXQ", title: "What a bad joke" },
    { member: "polaris", url: "https://www.youtube.com/shorts/p2zg77ggDYI", title: "Based on a true story" },
    { member: "polaris", url: "https://www.youtube.com/shorts/q7T7TWmQ-c4", title: "Average Open Lobby Experience" },
    { member: "polaris", url: "https://www.youtube.com/shorts/4E3w62D1PgE", title: "What did that bomb do?" },
    { member: "polaris", url: "https://www.youtube.com/shorts/qqUJb9b8V9k", title: "Average Minecraft VC Experience" },
    { member: "polaris", url: "https://www.youtube.com/shorts/bpO8xLJ9iog", title: "Fraud 101" },
    { member: "polaris", url: "https://www.youtube.com/shorts/p4-1K2BoMyg", title: "Wait tho are they fighting?" },
    { member: "polaris", url: "https://www.youtube.com/shorts/IWoMy8pi0P8", title: "HE's TAKING US WHERE!?" },

    /* ── Orion ── */
    // { member: "orion", url: "https://www.youtube.com/shorts/XXXXXXXXXXX", title: "Funny moment" },

    /* ── LillyAI ── */
    // { member: "lillyai", url: "https://www.youtube.com/shorts/XXXXXXXXXXX", title: "Funny moment" },
];

const MEMBERS = {
    kill3rkai: { name: "Kill3rKai", color: "#4da6ff", rgb: "77,166,255", img: "Images/kill3rkai.png", tag: "// streamer · developer", yt: "https://www.youtube.com/@Kill3rKai/shorts" },
    polaris: { name: "Polaris", color: "#a78bfa", rgb: "167,139,250", img: "Images/polaris.png", tag: "// streamer · vtuber", yt: "https://www.youtube.com/@Polaris1374/shorts" },
    orion: { name: "Orion", color: "#93a866", rgb: "147,168,102", img: "Images/orion.png", tag: "// streamer", yt: "" /* TODO: his Shorts link */ },
    lillyai: { name: "LillyAI", color: "#ff6eb4", rgb: "255,110,180", img: "Images/lilly.png", tag: "// ai member", yt: "" },
};

(function () {
    const root = document.getElementById("clipsRoot");
    if (!root) return;


    const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

    function ytId(input) {
        const s = String(input || "").trim();
        if (/^[\w-]{11}$/.test(s)) return s;
        const m = s.match(/(?:shorts\/|youtu\.be\/|[?&]v=|embed\/)([\w-]{11})/);
        return m ? m[1] : null;
    }

    function clipCard(c) {
        const id = ytId(c.url);
        if (!id) return "";                       
        const title = c.title || "Watch clip";
        return `
      <article class="clip" data-id="${id}" data-title="${esc(title)}">
        <button class="clip-play" type="button" aria-label="Play: ${esc(title)}">
          <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="clip-shade"></span>
          <span class="clip-icon"><i class="fa-solid fa-play"></i></span>
          ${c.title ? `<span class="clip-title">${esc(c.title)}</span>` : ""}
        </button>
        <a class="clip-ext" href="https://www.youtube.com/shorts/${id}" target="_blank" rel="noopener"
           aria-label="Open on YouTube" title="Open on YouTube"><i class="fa-brands fa-youtube"></i></a>
      </article>`;
    }

    function emptyCard() {
        return `
      <article class="clip-empty">
        <i class="fa-solid fa-film"></i>
        <div>
          <div class="ce-name">Clips incoming</div>
          <div class="ce-note">Nothing posted here yet — check back soon</div>
        </div>
      </article>`;
    }

    function section(key, i) {
        const m = MEMBERS[key];
        const cards = CLIPS.filter((c) => c.member === key).map(clipCard).filter(Boolean);
        const count = cards.length;
        const more = m.yt
            ? `<a class="mbr-link" href="${esc(m.yt)}" target="_blank" rel="noopener">All Clips <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
            : "";
        const body = count
            ? `<div class="carousel">
           <button class="car-btn prev" type="button" aria-label="Previous clip"><i class="fa-solid fa-chevron-left"></i></button>
           <div class="clip-track" tabindex="0" role="group" aria-label="${esc(m.name)} clips">${cards.join("")}</div>
           <button class="car-btn next" type="button" aria-label="Next clip"><i class="fa-solid fa-chevron-right"></i></button>
           <div class="car-count" aria-live="polite"></div>
         </div>`
            : `<div class="clip-grid">${emptyCard()}</div>`;
        return `
      <section class="mbr" id="${key}" style="--c:${m.color}; --rgb:${m.rgb}; --i:${i}">
        <div class="mbr-head">
          <div class="mbr-av"><img src="${esc(m.img)}" alt="${esc(m.name)} logo"></div>
          <div>
            <h2 class="mbr-name">${esc(m.name)}</h2>
            <div class="mbr-tag">${esc(m.tag)} · ${count ? count + (count === 1 ? " clip" : " clips") : "no clips yet"}</div>
          </div>
          ${more}
        </div>
        ${body}
      </section>`;
    }

    root.innerHTML = Object.keys(MEMBERS).map(section).join("");

    let playing = null;                        

    function stop() {
        if (!playing) return;
        playing.card.classList.remove("playing");
        const stage = playing.card.querySelector(".clip-stage");
        if (stage) stage.outerHTML = playing.html;
        playing = null;
    }

    function play(card) {
        const btn = card.querySelector(".clip-play");
        if (!btn) return;
        stop();
        const id = card.dataset.id;
        const title = card.dataset.title;
        playing = { card, html: btn.outerHTML };
        btn.outerHTML = `
      <div class="clip-stage">
        <iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1"
                title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowfullscreen></iframe>
      </div>`;
        card.classList.add("playing");
    }

    function initCarousel(car) {
        const track = car.querySelector(".clip-track");
        const cards = Array.from(track.querySelectorAll(".clip"));
        const prev = car.querySelector(".car-btn.prev");
        const next = car.querySelector(".car-btn.next");
        const counter = car.querySelector(".car-count");
        const n = cards.length;
        const slots = new Array(n).fill(null);    
        let active = 0;                            

        function slotOf(i) {
            let o = (((i - active) % n) + n) % n;
            if (o > Math.floor(n / 2)) o -= n;
            return o;
        }

        function render() {
            cards.forEach((c, i) => {
                const o = slotOf(i);
                if (slots[i] !== null && Math.abs(o - slots[i]) > 1) c.classList.add("no-anim");
                slots[i] = o;
                c.style.setProperty("--o", o);
                c.style.setProperty("--a", Math.abs(o));
                c.classList.toggle("is-active", o === 0);
                c.classList.toggle("far", Math.abs(o) > 2);
                c.setAttribute("aria-hidden", Math.abs(o) > 2 ? "true" : "false");
            });
            requestAnimationFrame(() => requestAnimationFrame(() =>
                cards.forEach((c) => c.classList.remove("no-anim"))));

            if (playing && cards.indexOf(playing.card) !== -1 && playing.card !== cards[active]) stop();
            if (counter) counter.textContent = (active + 1) + " / " + n;
        }

        function go(i) {                           
            active = ((i % n) + n) % n;
            render();
        }

        if (n < 2) {                               
            prev.hidden = true;
            next.hidden = true;
        } else {
            prev.addEventListener("click", () => go(active - 1));
            next.addEventListener("click", () => go(active + 1));
        }

        track.addEventListener("keydown", (e) => {
            if (n < 2) return;
            if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
            else if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
        });

        let startX = null, swiped = false;
        track.addEventListener("pointerdown", (e) => { startX = e.clientX; swiped = false; });
        track.addEventListener("pointerup", (e) => {
            if (startX === null) return;
            const dx = e.clientX - startX;
            startX = null;
            if (n > 1 && Math.abs(dx) > 45) { swiped = true; go(active + (dx < 0 ? 1 : -1)); }
        });
        track.addEventListener("pointercancel", () => { startX = null; });

        track.addEventListener("click", (e) => {
            if (swiped) { swiped = false; return; } 
            const btn = e.target.closest(".clip-play");
            if (!btn) return;
            const card = btn.closest(".clip");
            const i = cards.indexOf(card);
            if (i !== active) go(i);
            else play(card);
        });

        render();
    }

    root.querySelectorAll(".carousel").forEach(initCarousel);
})();