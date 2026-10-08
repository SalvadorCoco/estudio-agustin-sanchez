declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Params = Record<string, string | number>;

const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);

/** Envío seguro: si gtag falla o está bloqueado (adblock), el sitio sigue andando. */
export function track(event: string, params: Params = {}) {
  try {
    if (isLocal) {
      console.debug("[analytics]", event, params);
      return;
    }
    // beacon: el evento sale aunque la página navegue enseguida (WhatsApp en móvil)
    window.gtag?.("event", event, { transport_type: "beacon", ...params });
  } catch {
    /* nunca romper el sitio por la medición */
  }
}

/** Zona de la página donde está un elemento: header, footer, hero, servicios... */
function locationOf(el: Element): string {
  const zone = el.closest("header, footer, section[id]");
  if (!zone) return "floating";
  return zone.tagName === "SECTION" ? zone.id : zone.tagName.toLowerCase();
}

/**
 * Clics declarativos: cualquier elemento con data-track="id" se mide solo.
 *   data-track="hero_consulta"            -> evento por defecto: cta_click
 *   data-track-event="outbound_click"     -> otro tipo de evento
 *   data-track-goal="consulta_whatsapp"   -> además dispara este evento (resultado de negocio)
 * Se envía además link_location (dónde está). Nunca se envía texto de usuarios.
 */
function initClickTracking() {
  document.addEventListener(
    "click",
    (e) => {
      const target = (e.target as Element | null)?.closest?.("[data-track]");
      if (!target) return;
      const params = {
        link_id: target.getAttribute("data-track") || "",
        link_location: locationOf(target),
      };
      track(target.getAttribute("data-track-event") || "cta_click", params);
      // Evento extra para lo que cuenta como resultado de negocio (evento clave en GA4)
      const goal = target.getAttribute("data-track-goal");
      if (goal) track(goal, params);
    },
    true,
  );
}

/** Profundidad de scroll: 25, 50, 75 y 100 %, una sola vez por visita. */
function initScrollDepth() {
  const marks = [25, 50, 75, 100];
  const sent = new Set<number>();

  const check = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const pct = (window.scrollY / scrollable) * 100;
    for (const m of marks) {
      if (pct >= m - 1 && !sent.has(m)) {
        sent.add(m);
        track("scroll_depth", { percent: m });
      }
    }
  };

  // el cálculo es mínimo y se corta solo cuando ya se enviaron todas las marcas
  window.addEventListener("scroll", () => sent.size < marks.length && check(), {
    passive: true,
  });
}

/** Secciones vistas (al menos 40 % visible). Las secciones se cargan diferidas, por eso MutationObserver. */
function initSectionViews() {
  const seen = new Set<string>();
  const watched = new WeakSet<Element>();

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting && !seen.has(id)) {
          seen.add(id);
          track("section_view", { section: id });
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.4 },
  );

  const scan = () => {
    document.querySelectorAll("section[id]").forEach((s) => {
      if (!watched.has(s)) {
        watched.add(s);
        io.observe(s);
      }
    });
  };

  scan();
  const root = document.getElementById("root");
  if (root) new MutationObserver(scan).observe(root, { childList: true, subtree: true });
}

export function initAnalytics() {
  try {
    initClickTracking();
    initScrollDepth();
    initSectionViews();
  } catch {
    /* la medición nunca debe romper el sitio */
  }
}
