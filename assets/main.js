// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Elapsed time since 1966-07-30 00:00 London (≈ 1966-07-29 23:00 UTC)
(function startClock(){
  const grab = id => document.getElementById(id);
  const el = {years:grab("years"),days:grab("days"),hours:grab("hours"),minutes:grab("minutes"),seconds:grab("seconds")};
  if (!el.years) return;

  const startUTC = Date.UTC(1966,6,29,23,0,0); // months 0-based, July=6
  const pad2 = n => String(n).padStart(2,"0");

  function tick(){
    const now = new Date();
    const nowUTC = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate(),now.getUTCHours(),now.getUTCMinutes(),now.getUTCSeconds());

    let years = new Date(nowUTC).getUTCFullYear() - 1966;
    const anniv = Date.UTC(1966+years,6,29,23,0,0);
    if (nowUTC < anniv) years--;

    const afterYears = Date.UTC(1966+years,6,29,23,0,0);
    const diffSec = Math.floor((nowUTC - afterYears)/1000);
    const days = Math.floor(diffSec/86400);
    const h = Math.floor((diffSec - days*86400)/3600);
    const m = Math.floor((diffSec - days*86400 - h*3600)/60);
    const s = diffSec - days*86400 - h*3600 - m*60;

    el.years.textContent = years;
    el.days.textContent = days;
    el.hours.textContent = pad2(h);
    el.minutes.textContent = pad2(m);
    el.seconds.textContent = pad2(s);
  }

  tick();
  setInterval(tick, 1000);
})();
