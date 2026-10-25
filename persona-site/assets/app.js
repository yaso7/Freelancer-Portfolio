(() => {
  const S = window.SITE;
  const P = window.PERSONAS;
  const ROUTES = ["home", "about", "services", "work", "contact"];
  const STORE_KEY = "persona-choice";

  const $ = (sel, root = document) => root.querySelector(sel);
  const main = $("#main");
  const gate = $("#gate");

  let persona = null;
  let route = "home";

  /* ---------- storage (may be unavailable) ---------- */
  const store = {
    get() { try { return localStorage.getItem(STORE_KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(STORE_KEY, v); } catch { /* ignore */ } }
  };

  /* ---------- small building blocks ---------- */
  const ph = (cls, label) => `<div class="ph ${cls}" data-label="${label}" role="img" aria-label="${label}"></div>`;
  const collage = () => `<div class="collage">${ph("ph--main", "Portrait photo")}${ph("ph--small", "Detail photo")}</div>`;
  const mock = (title) => `
    <div class="mock" aria-hidden="true">
      <div class="m-nav"><i></i><i></i></div>
      <div class="m-hero"><b>${title}</b></div>
      <span class="m-line"></span><span class="m-line short"></span>
      <div class="m-row"><span></span><span></span></div>
      <span class="m-btn"></span>
    </div>`;
  const btn = (text, to, ghost) => `<a class="btn${ghost ? " btn--ghost" : ""}" href="#${to}">${text}</a>`;
  const band = (cls, inner, extra = "") => `<section class="band ${cls}" ${extra}><div class="inner">${inner}</div></section>`;

  const wave = `<svg class="wave" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20 420 C 180 300, 320 520, 560 380 S 900 120, 1220 200"/>
      <path d="M-20 80 C 220 160, 380 -20, 640 60 S 1000 260, 1220 120"/>
    </svg>`;

  const badge = (text) => `
    <svg class="badge" viewBox="0 0 140 140" aria-hidden="true">
      <defs><path id="badge-ring" d="M70 70 m-52 0 a52 52 0 1 1 104 0 a52 52 0 1 1 -104 0"/></defs>
      <g class="spin"><text><textPath href="#badge-ring">${text}${text}</textPath></text></g>
      <circle class="core" cx="70" cy="70" r="6"/>
    </svg>`;

  /* ---------- shared sections ---------- */
  const testimonialBand = (t) => band("band--accent t-band", `
      ${wave}
      <div class="split">
        <div class="stack">
          <h2>${t.quote}</h2>
          <p>${t.body}</p>
          <p class="attribution">${t.who}</p>
        </div>
        ${ph("ph--round", "Client photo")}
      </div>`);

  const slider = (quotes, cls = "") => band(cls, `
      <div class="slider" data-slider>
        <div class="slide-holder" aria-live="polite"></div>
        <div class="pips" aria-hidden="true">${quotes.map(() => "<i></i>").join("")}</div>
        <div class="controls">
          <button type="button" data-dir="-1" aria-label="Previous testimonial">‹</button>
          <button type="button" data-dir="1" aria-label="Next testimonial">›</button>
        </div>
      </div>`);

  const finalCta = (f, to = "contact") => band("", `
      <div class="center stack">
        ${badge(persona.badge)}
        <h2>${f.h}</h2>
        <p class="muted">${f.body}</p>
        ${f.cta ? btn(f.cta, to) : ""}
      </div>`);

  const optin = () => {
    const o = persona.optin;
    return band("band--surface optin", `
      <div class="split">
        ${ph("", "Guide cover")}
        <div class="stack">
          <p class="eyebrow">${o.eyebrow}</p>
          <h2>${o.h}</h2>
          <p class="muted">${o.body}</p>
          ${btn(o.cta, "contact")}
        </div>
      </div>`);
  };

  /* ---------- pages ---------- */
  const pages = {
    home() {
      const h = persona.home;
      return [
        band("", `
          <div class="split">
            ${collage()}
            <div class="stack stack--lg">
              <p class="eyebrow">${h.eyebrow}</p>
              <h1>${h.h1}</h1>
              <p class="lead">${h.lead}</p>
              ${btn(h.cta, "services")}
            </div>
          </div>`),
        band("band--surface", `
          <div class="center">
            <p class="eyebrow">${h.stripTitle}</p>
            <ul class="strip">${h.strip.map((s) => `<li>${s}</li>`).join("")}</ul>
          </div>`, ""),
        band("", `
          <div class="split split--flip">
            <div class="mock-stack">${mock(h.featured[0].name)}</div>
            <div class="stack">
              <p class="eyebrow">${h.empathy.eyebrow}</p>
              <h2>${h.empathy.h2}</h2>
              <div class="prose">${h.empathy.paras.map((p) => `<p>${p}</p>`).join("")}</div>
              ${btn(h.empathy.cta, "services")}
            </div>
          </div>`),
        testimonialBand(h.band),
        band("", `
          <div class="center">
            <h2 class="display">${h.featuredTitle}</h2>
            <div class="cards">
              ${h.featured.map((f) => `
                <a class="card" href="#work">
                  ${mock(f.name)}
                  <h3>${f.name}</h3>
                  <p class="eyebrow">${f.tag}</p>
                </a>`).join("")}
            </div>
            <div style="margin-top:44px">${btn("See more", "work")}</div>
          </div>`),
        band("band--accent", `
          <div class="center">
            <h2 class="display">${h.servicesTitle}</h2>
            <ul class="svc">${h.services.map((s) => `<li>${s}</li>`).join("")}</ul>
          </div>`),
        band("band--surface", `
          <div class="split">
            ${ph("", "Lifestyle photo")}
            <div class="stack">
              <h2 class="display">${h.meet.h}</h2>
              <p><strong>${h.meet.sub}</strong></p>
              <p class="muted">${h.meet.body}</p>
              ${btn(h.meet.cta, "about")}
            </div>
          </div>`),
        slider(h.quotes),
        finalCta(h.final),
        optin()
      ].join("");
    },

    about() {
      const a = persona.about;
      return [
        band("", `
          <div class="split">
            ${collage()}
            <div class="stack stack--lg">
              <p class="eyebrow">${a.eyebrow}</p>
              <h1>${a.h1}</h1>
              <p class="lead">${a.lead}</p>
              <p class="muted">Based in ${S.city}.</p>
              ${btn(persona.nav.services, "services")}
            </div>
          </div>`),
        band("band--surface", `
          <div class="narrow stack">
            <p class="eyebrow">${a.place.eyebrow}</p>
            <h2>${a.place.h2}</h2>
            <p class="muted">${a.place.body}</p>
          </div>`),
        band("band--accent", `
          <div class="split split--flip">
            ${ph("", "Candid photo")}
            <div class="stack">
              <h2 class="display">${a.story.h}</h2>
              <div class="prose">${a.story.paras.map((p) => `<p>${p}</p>`).join("")}</div>
            </div>
          </div>`),
        band("", `
          <div class="center">
            <h2 class="display">Inspired by…</h2>
            <ul class="words">${a.inspired.map((w) => `<li>${w}</li>`).join("")}</ul>
          </div>`),
        band("band--surface", `
          <div class="narrow">
            <h2 class="display">Guided by…</h2>
            <div class="values">
              ${a.values.map((v) => `<div><p class="eyebrow" style="color:var(--sand)">${v.t}</p><p class="muted">${v.d}</p></div>`).join("")}
            </div>
          </div>`),
        slider(persona.home.quotes),
        band("band--deep", `
          <div class="center stack">
            <p class="eyebrow">${a.promise.eyebrow}</p>
            <h2>${a.promise.h}</h2>
            <p class="muted">${a.promise.body}</p>
            ${btn(a.promise.cta, "contact")}
          </div>`),
        optin()
      ].join("");
    },

    services() {
      const s = persona.services;
      const q = persona.home.quotes;
      return [
        band("band--deep", `
          <div class="center stack stack--lg">
            <p class="eyebrow">${s.eyebrow}</p>
            <h1>${s.h1}</h1>
            <p class="lead">${s.lead}</p>
            ${btn(s.cta, "contact")}
          </div>`),
        band("", `
          <div class="narrow stack">
            <p class="eyebrow">${s.pain.eyebrow}</p>
            <h2>${s.pain.h2}</h2>
            <hr class="rule">
            <p class="eyebrow">${s.pain.lead}</p>
            <ul class="ticks">${s.pain.list.map((l) => `<li>${l}</li>`).join("")}</ul>
            <h2 style="margin-top:24px">${s.pain.close}</h2>
          </div>`),
        band("band--surface", `
          <div class="split">
            ${ph("", "Working photo")}
            <div class="stack">
              <h2 class="display">${s.stat.h}</h2>
              <p class="muted">${s.stat.body}</p>
              ${btn("Book a call", "contact")}
            </div>
          </div>`),
        testimonialBand({ quote: q[0].q, body: q[0].body, who: q[0].who }),
        band("", `
          <div class="narrow stack">
            <p class="eyebrow">${s.details.eyebrow}</p>
            <h2 class="display">${s.details.h}</h2>
            <p class="eyebrow" style="color:var(--accent)">${s.details.sub}</p>
            <hr class="rule">
            <div class="prose">${s.details.paras.map((p) => `<p>${p}</p>`).join("")}</div>
            <div class="include-box">
              <p class="eyebrow" style="color:var(--sand)">What's included</p>
              <ul class="ticks">${s.details.includes.map((l) => `<li>${l}</li>`).join("")}</ul>
            </div>
          </div>`),
        testimonialBand({ quote: q[1].q, body: q[1].body, who: q[1].who }),
        band("", `
          <div class="center">
            <p class="eyebrow">How it works</p>
            <h2 style="margin-top:12px">Three steps, start to finish.</h2>
            <ol class="steps">
              ${s.process.map((p, i) => `<li><span class="num">${i + 1}</span><p class="eyebrow" style="color:var(--sand)">${p.t}</p><p>${p.d}</p></li>`).join("")}
            </ol>
          </div>`),
        band("band--surface", contactBlock(s.final.h, s.final.body)),
      ].join("");
    },

    work() {
      const w = persona.work;
      return [
        band("band--deep", `
          <div class="center stack stack--lg">
            <p class="eyebrow">${w.eyebrow}</p>
            <h1>${w.h1}</h1>
            <p class="lead">${w.lead}</p>
          </div>`),
        band("", `
          <div class="projects">
            ${w.projects.map((p, i) => `
              <article class="split ${i % 2 ? "split--flip" : ""} project">
                <div class="stack">
                  <p class="eyebrow">${p.tag}</p>
                  <h2 class="display">${p.name}</h2>
                  <p class="muted">${p.quote}</p>
                  ${btn("Ask about this project", "contact", true)}
                </div>
                <div class="mock-stack">${mock(p.name)}${mock("")}</div>
              </article>`).join("")}
          </div>`),
        finalCta(persona.home.final),
        optin()
      ].join("");
    },

    contact() {
      const c = persona.contact;
      return [
        band("band--deep", `
          <div class="split">
            ${collage()}
            <div class="stack stack--lg">
              <p class="eyebrow">${c.eyebrow}</p>
              <h1>${c.h1}</h1>
              <p class="lead">${c.lead}</p>
            </div>
          </div>`),
        band("", contactBlock(c.formTitle, "Fill out the form, or email me directly.")),
        slider(persona.home.quotes, "band--surface"),
        band("", `
          <div class="center">
            <h2 class="display">FAQs</h2>
            <div class="faq">
              ${c.faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("")}
            </div>
          </div>`)
      ].join("");
    }
  };

  function contactBlock(title, sub) {
    const c = persona.contact;
    return `
      <div class="split">
        <div class="stack">
          <h2>${title}</h2>
          <p class="muted">${sub}</p>
          <div class="hours">
            <p class="eyebrow">Email</p>
            <div class="copy-row"><code>${S.email}</code><button type="button" data-copy="${S.email}">Copy</button></div>
            <p class="eyebrow" style="margin-top:10px">Hours</p>
            <p>${S.hours}</p>
            <p class="muted">Based in ${S.city}.</p>
          </div>
        </div>
        <form class="form" id="contact-form" novalidate>
          <div class="row">
            <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" required></div>
            <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
          </div>
          <div class="field"><label for="f-topic">${c.select.label}</label>
            <select id="f-topic" name="topic">${c.select.options.map((o) => `<option>${o}</option>`).join("")}</select></div>
          <div class="field"><label for="f-msg">Message</label><textarea id="f-msg" name="message" rows="5" required></textarea></div>
          <button class="btn" type="submit">Send message</button>
          <p class="form-status" id="form-status" role="status"></p>
        </form>
      </div>`;
  }

  /* ---------- chrome: header nav, footer ---------- */
  function renderChrome() {
    document.documentElement.style.setProperty("--accent", persona.accent);
    $("#nav-list").innerHTML = ROUTES.map((r) =>
      `<li><a href="#${r}" ${r === route ? 'aria-current="page"' : ""}>${persona.nav[r]}</a></li>`).join("");
    $("#chip-label").textContent = persona.pick.label;
    $("#foot-nav").innerHTML = ROUTES.map((r) => `<li><a href="#${r}">${persona.nav[r]}</a></li>`).join("");
    $("#foot-tagline").textContent = persona.tagline;
    $("#foot-city").textContent = `Based in ${S.city}.`;
    $("#foot-year").textContent = `© ${S.name} ${S.year}`;
  }

  function render() {
    main.innerHTML = pages[route]();
    renderChrome();
    document.title = `${route === "home" ? "" : persona.nav[route] + " · "}${S.name}`;
    initSliders();
    initReveal();
  }

  /* ---------- behaviours ---------- */
  function initSliders() {
    document.querySelectorAll("[data-slider]").forEach((el) => {
      const quotes = persona.home.quotes;
      const holder = $(".slide-holder", el);
      const pips = el.querySelectorAll(".pips i");
      let i = 0;
      const show = () => {
        const q = quotes[i];
        holder.innerHTML = `<div class="slide"><h2>${q.q}</h2><p>${q.body}</p><p class="attribution">${q.who}</p></div>`;
        pips.forEach((p, k) => p.classList.toggle("on", k === i));
      };
      el.querySelectorAll("[data-dir]").forEach((b) => b.addEventListener("click", () => {
        i = (i + Number(b.dataset.dir) + quotes.length) % quotes.length;
        show();
      }));
      show();
    });
  }

  let observer;
  function initReveal() {
    observer?.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.remove("pre"); observer.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    main.querySelectorAll(".inner > *").forEach((el) => {
      el.classList.add("reveal");
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("pre"); observer.observe(el); }
    });
  }

  document.addEventListener("click", (e) => {
    const copy = e.target.closest("[data-copy]");
    if (copy) {
      const done = () => { copy.textContent = "Copied"; setTimeout(() => (copy.textContent = "Copy"), 1600); };
      navigator.clipboard?.writeText(copy.dataset.copy).then(done).catch(() => {
        const range = document.createRange();
        range.selectNodeContents(copy.previousElementSibling);
        getSelection().removeAllRanges(); getSelection().addRange(range);
      });
    }
    if (e.target.closest(".nav a")) closeMenu();
  });

  document.addEventListener("submit", (e) => {
    if (e.target.id !== "contact-form") return;
    e.preventDefault();
    const f = e.target;
    const status = $("#form-status");
    if (!f.checkValidity()) {
      status.textContent = "Add your name, a valid email and a message, then send again.";
      f.querySelector(":invalid")?.focus();
      return;
    }
    status.textContent = `Thanks, ${f.name.value.split(" ")[0]}. This demo form isn't connected yet, so nothing was sent. Email ${S.email} directly for now.`;
    f.reset();
  });

  /* ---------- mobile menu ---------- */
  const burger = $("#burger");
  const nav = $("#nav");
  function closeMenu() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });

  /* ---------- persona gate ---------- */
  function openGate(canClose) {
    const order = ["translator", "creator", "teacher", "you"];
    $("#options").innerHTML = order.map((id) => {
      const p = P[id];
      return `<button type="button" class="opt" data-pick="${id}" style="--c:${p.accent}" ${persona?.id === id ? 'aria-current="true"' : ""}>
        <span class="n">${p.pick.n}</span><span class="l">${p.pick.label}</span><span class="b">${p.pick.blurb}</span></button>`;
    }).join("");
    $("#gate-close").hidden = !canClose;
    gate.classList.remove("leaving");
    gate.hidden = false;
    document.body.classList.add("locked");
    $(".opt", gate).focus();
  }

  function closeGate() {
    gate.classList.add("leaving");
    document.body.classList.remove("locked");
    setTimeout(() => { gate.hidden = true; }, 450);
  }

  function choose(id) {
    persona = P[id];
    store.set(id);
    render();
    closeGate();
    $("#main").focus({ preventScroll: true });
  }

  gate.addEventListener("click", (e) => {
    const b = e.target.closest("[data-pick]");
    if (b) choose(b.dataset.pick);
  });
  $("#gate-close").addEventListener("click", closeGate);
  document.addEventListener("keydown", (e) => {
    if (gate.hidden) return;
    const map = { 1: "translator", 2: "creator", 3: "teacher", 4: "you" };
    if (map[e.key]) choose(map[e.key]);
    if (e.key === "Escape" && persona) closeGate();
  });
  document.querySelectorAll("[data-open-gate]").forEach((b) => b.addEventListener("click", () => { closeMenu(); openGate(true); }));

  /* ---------- routing ---------- */
  function fromHash() {
    const h = location.hash.slice(1);
    return ROUTES.includes(h) ? h : "home";
  }
  window.addEventListener("hashchange", () => {
    route = fromHash();
    if (!persona) return;
    render();
    window.scrollTo({ top: 0 });
  });

  /* ---------- boot ---------- */
  route = fromHash();
  const saved = store.get();
  persona = P[saved] || null;
  if (persona) {
    render();
  } else {
    persona = P.translator;   // render something behind the picker
    render();
    persona = null;
    openGate(false);
  }
})();
