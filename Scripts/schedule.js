/* ============================================================
   schedule.js — VSM schedule calendar

   EDIT THE SCHEDULE HERE. Add / remove / change entries in
   scheduleData below. Nothing else in this file needs to change.

   Fields:
     member  -> "kill3rkai" | "polaris" | "orion" | "lillyai"
     game    -> name of the game / stream
     date    -> "YYYY-MM-DD"
     time    -> "HH:MM" (24hr) in THAT MEMBER'S OWN timezone (see MEMBERS).
                Use "24:00" for midnight at the END of the date, e.g.
                a Friday-night stream that starts at midnight.
                Visitors see it converted to THEIR local time.
     duration-> minutes (used for the "LIVE" window, default 120)
     note    -> optional short line
     off     -> optional, true for a break day / no stream
     tz      -> optional, overrides the member's timezone for one entry
   ============================================================ */

const SCHEDULE_TZ = "Europe/Dublin"; // fallback if a member has no tz

const MEMBERS = {
  kill3rkai: { name: "Kill3rKai", color: "#4da6ff", tz: "Europe/Dublin", twitch: "https://www.twitch.tv/Kill3rKai" },
  polaris: { name: "Polaris", color: "#a78bfa", tz: "Africa/Johannesburg", twitch: "https://www.twitch.tv/polaris1374_" },
  orion: { name: "Orion", color: "#93a866", tz: "Africa/Johannesburg", twitch: "https://www.twitch.tv/orion1367" },
  lillyai: { name: "LillyAI", color: "#ff6eb4", tz: "Europe/Dublin", twitch: "https://www.twitch.tv/Kill3rKai" },
};

const scheduleData = [
  //  Kill3rKai (23:00 Irish time) 
  { member: "kill3rkai", game: "WARDOGS", date: "2026-09-18", time: "23:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "kill3rkai", game: "WARDOGS", date: "2026-09-19", time: "23:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "kill3rkai", game: "BREAK DAY", date: "2026-09-25", time: "23:00", off: true, note: "No stream today" },
  { member: "kill3rkai", game: "Minecraft", date: "2026-09-26", time: "23:00", duration: 180, note: "Taking on Polaris's Minecraft challenge!" },
  { member: "kill3rkai", game: "WARDOGS", date: "2026-10-02", time: "23:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "kill3rkai", game: "WARDOGS", date: "2026-10-03", time: "23:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "kill3rkai", game: "WARDOGS", date: "2026-10-04", time: "23:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-09", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-10", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-16", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-17", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-23", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-24", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "TBD", date: "2026-10-30", time: "23:00", duration: 180, note: "TBD" },
  { member: "kill3rkai", game: "No Stream Day", date: "2026-10-31", time: "23:00", duration: 180, off: true, note: "No Stream Day" },

  //  Polaris (midnight South Africa time = 23:00 Irish time) 
  { member: "polaris", game: "Warthunder", date: "2026-09-18", time: "24:00", duration: 120, note: "Warthunder Task Run!" },
  { member: "polaris", game: "Warthunder", date: "2026-09-19", time: "24:00", duration: 120, note: "Warthunder Task Run!" },
  { member: "polaris", game: "BREAK DAY", date: "2026-09-25", time: "24:00", off: true, note: "No stream today" },
  { member: "polaris", game: "Minecraft", date: "2026-09-26", time: "24:00", duration: 120, note: "VSM takes on my Minecraft challenge!" },
  { member: "polaris", game: "Driving Rogue", date: "2026-10-02", time: "24:00", duration: 120, note: "Driving Rouge!" },
  { member: "polaris", game: "WARTHUNDER", date: "2026-10-03", time: "24:00", duration: 120, note: "Warthunder Grind!" },
  { member: "polaris", game: "TBD", date: "2026-10-09", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "TBD", date: "2026-10-10", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "TBD", date: "2026-10-16", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "TBD", date: "2026-10-17", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "TBD", date: "2026-10-23", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "TBD", date: "2026-10-24", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "TBD", date: "2026-10-30", time: "24:00", duration: 180, note: "TBD" },
  { member: "polaris", game: "No Stream Day", date: "2026-10-31", time: "24:00", duration: 180, off: true, note: "No Stream Day" },

  //  Orion (midnight South Africa time = 23:00 Irish time) 
  { member: "orion", game: "WARDOGS", date: "2026-09-18", time: "24:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "orion", game: "WARDOGS", date: "2026-09-19", time: "24:00", duration: 180, note: "WARDOGS WEEKEND!" },
  { member: "orion", game: "BREAK DAY", date: "2026-09-25", time: "24:00", off: true, note: "No stream today" },
  { member: "orion", game: "Minecraft", date: "2026-09-26", time: "24:00", duration: 180, note: "Taking on Polaris's Minecraft challenge!" },
  { member: "orion", game: "WARDOGS", date: "2026-10-02", time: "24:00", duration: 180, note: "WARDOGS WEEKEND" },
  { member: "orion", game: "WARDOGS", date: "2026-10-03", time: "24:00", duration: 180, note: "WARDOGS WEEKEND" },
  { member: "orion", game: "WARDOGS", date: "2026-10-04", time: "24:00", duration: 180, note: "WARDOGS WEEKEND" },
  { member: "orion", game: "TBD", date: "2026-10-09", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "TBD", date: "2026-10-10", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "TBD", date: "2026-10-16", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "TBD", date: "2026-10-17", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "TBD", date: "2026-10-23", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "TBD", date: "2026-10-24", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "TBD", date: "2026-10-30", time: "24:00", duration: 180, note: "TBD" },
  { member: "orion", game: "No Stream Day", date: "2026-10-31", time: "24:00", duration: 180, off: true, note: "No Stream Day" },

  { member: "lillyai", game: "Minecraft", date: "2026-09-26", time: "23:00", duration: 180, note: "Taking on Polaris's Minecraft challenge!" },
];

(function () {
  const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let entries = [];
  let view = { year: 0, month: 0 };
  let filter = "all";

  /* turn "2026-09-18 23:00 in Dublin" into a real moment in time */
  function zoned(date, time, tz) {
    const [y, m, d] = date.split("-").map(Number);
    const [hh, mm] = time.split(":").map(Number);
    const guess = Date.UTC(y, m - 1, d, hh, mm);
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-US", {
        timeZone: tz, hourCycle: "h23", year: "numeric", month: "numeric",
        day: "numeric", hour: "numeric", minute: "numeric",
      }).formatToParts(new Date(guess)).map((p) => [p.type, p.value])
    );
    const asUTC = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
    return new Date(guess - (asUTC - guess));
  }

  function parse(raw) {
    return raw.map((e) => {
      const m = MEMBERS[e.member] || { name: e.member, color: "#8891b8", tz: SCHEDULE_TZ, twitch: null };
      const start = zoned(e.date, e.time, e.tz || m.tz || SCHEDULE_TZ);
      const end = new Date(start.getTime() + (e.duration || 120) * 60000);
      return { ...e, start, end, m };
    }).sort((a, b) => a.start - b.start);
  }

  const dayKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const fmtTime = (d) => d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
  const fmtDate = (d) => d.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  const isLive = (e) => { const n = new Date(); return !e.off && n >= e.start && n <= e.end; };

  function byDay() {
    const map = {};
    entries.forEach((e) => {
      if (filter !== "all" && e.member !== filter) return;
      (map[dayKey(e.start)] = map[dayKey(e.start)] || []).push(e);
    });
    return map;
  }

  /*  ticker  */
  function typeText(el, text) {
    clearInterval(el._t);
    el.textContent = "";
    let i = 0;
    el._t = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) clearInterval(el._t);
    }, 26);
  }

  function updateTicker() {
    const now = new Date();
    const next = entries.filter((e) => !e.off && e.end > now)[0];
    let text = "NO STREAMS SCHEDULED, CHECK BACK SOON";
    if (next) {
      text = isLive(next)
        ? `LIVE NOW: ${next.m.name.toUpperCase()} · ${next.game.toUpperCase()}`
        : `NEXT_STREAM: ${next.m.name.toUpperCase()} · ${next.game.toUpperCase()} · ${fmtDate(next.start).toUpperCase()}, ${fmtTime(next.start)}`;
    }
    typeText($("ticker-text"), text);
  }

  /*  filter chips  */
  function buildFilters() {
    const box = $("filters");
    const items = [["all", "All", "var(--text)"]].concat(
      Object.keys(MEMBERS).map((k) => [k, MEMBERS[k].name, MEMBERS[k].color]));
    box.innerHTML = items.map(([k, label, c]) =>
      `<button type="button" class="chip${k === filter ? " on" : ""}" data-m="${k}" style="--c:${c}"><i></i>${esc(label)}</button>`
    ).join("");
    box.querySelectorAll(".chip").forEach((b) => b.addEventListener("click", () => {
      filter = b.dataset.m;
      box.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === b));
      renderCalendar();
    }));
  }

  /*  day popup  */
  function openDay(list) {
    $("modal-date").textContent = fmtDate(list[0].start);
    $("modal-body").innerHTML = list.map((e) => `
      <div class="entry${e.off ? " off" : ""}" style="--c:${e.m.color}">
        <div class="e-who">${esc(e.m.name)}</div>
        <div class="e-game">${esc(e.game)}</div>
        <div class="e-time">${isLive(e) ? "LIVE NOW · " : ""}${e.off ? "OFF" : fmtTime(e.start)}</div>
        ${e.note ? `<div class="e-note">${esc(e.note)}</div>` : ""}
        ${e.m.twitch && !e.off ? `<a class="e-watch" href="${esc(e.m.twitch)}" target="_blank" rel="noopener"><i class="fa-brands fa-twitch"></i> Watch on Twitch</a>` : ""}
      </div>`).join("");
    $("modal").classList.add("open");
    $("modal").setAttribute("aria-hidden", "false");
    $("modal-close").focus();
  }

  function closeDay() {
    $("modal").classList.remove("open");
    $("modal").setAttribute("aria-hidden", "true");
  }

  /*  calendar  */
  function renderCalendar() {
    const { year, month } = view;
    $("cal-title").textContent = `${MONTHS[month]} ${year}`;

    const map = byDay();
    const offset = new Date(year, month, 1).getDay();
    const todayKey = dayKey(new Date());
    let html = "";

    for (let i = 0; i < 42; i++) {
      const d = new Date(year, month, 1 - offset + i);
      const k = dayKey(d);
      const list = map[k] || [];
      const cls = ["cell"];
      if (d.getMonth() !== month) cls.push("other");
      if (k === todayKey) cls.push("today");
      if (i % 7 >= 5) cls.push("fs");
      if (list.length) cls.push("has");

      const pills = list.slice(0, 2).map((e) =>
        `<span class="pill${isLive(e) ? " live" : ""}${e.off ? " off" : ""}" style="--c:${e.m.color}"><i class="pd"></i><span class="pl">${esc(e.m.name)} · ${esc(e.game)}</span></span>`
      ).join("") + (list.length > 2 ? `<span class="more">+${list.length - 2} more</span>` : "");

      html += `<div class="${cls.join(" ")}" data-key="${k}"${list.length ? ' tabindex="0" role="button"' : ""}><span class="num">${d.getDate()}</span>${pills}</div>`;
    }

    const grid = $("cal-grid");
    grid.innerHTML = html;
    grid.querySelectorAll(".cell.has").forEach((c) => {
      const open = () => openDay(map[c.dataset.key]);
      c.addEventListener("click", open);
      c.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); open(); } });
    });
  }

  function changeMonth(delta) {
    let { year, month } = view;
    month += delta;
    if (month < 0) { month = 11; year--; }
    if (month > 11) { month = 0; year++; }
    view = { year, month };
    const cal = document.querySelector(".cal");
    cal.style.opacity = "0.35";
    setTimeout(() => { renderCalendar(); cal.style.opacity = "1"; }, 140);
  }

  function init() {
    entries = parse(scheduleData);
    const now = new Date();
    view = { year: now.getFullYear(), month: now.getMonth() };

    buildFilters();
    renderCalendar();
    updateTicker();

    $("cal-prev").addEventListener("click", () => changeMonth(-1));
    $("cal-next").addEventListener("click", () => changeMonth(1));
    $("modal-close").addEventListener("click", closeDay);
    $("modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeDay(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDay(); });

    setInterval(() => { renderCalendar(); updateTicker(); }, 60000); // keeps LIVE state fresh
  }

  init();
})();