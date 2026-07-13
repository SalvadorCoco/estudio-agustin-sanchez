import { useState, useEffect } from "react";

export interface Testimonial {
  name: string;
  cargo: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

const fallbackTestimonials: Testimonial[] = [
  {
    name: "María González",
    cargo: "Cliente",
    date: "15/09/2024",
    rating: 5,
    text: "Excelente profesional, serio y responsable. Siempre asesorando en todo momento. Ya me resolvieron dos cuestiones legales y sin dudas los volvería a elegir.",
    avatar: "MG",
  },
  {
    name: "Carlos Fernández",
    cargo: "Cliente",
    date: "08/10/2024",
    rating: 5,
    text: "Gracias al Estudio jurídico que me acompañó, me asesoró y me dio un seguimiento personalizado en mi proceso con la ART.",
    avatar: "CF",
  },
  {
    name: "Laura Martínez",
    cargo: "Cliente",
    date: "21/11/2024",
    rating: 5,
    text: "Totalmente agradecida y conforme con el servicio brindado. Es una persona concreta, cordial y atenta en todo. Súper recomendable.",
    avatar: "LM",
  },
];

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzED2uvjf-qanIIjSoBMcmBYoXZFQ_zbjPhJPoyL0lexJzmUCuwr3WmSwm9PQK97UGYl8Rknpy-10_/pub?output=csv";

/** Parser correcto para CSV con campos entre comillas y sin ellas */
function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      // Doble comilla dentro de campo: ""
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else if (ch === "\r") {
      // Ignorar \r (CRLF)
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

function parseCSV(csv: string): Testimonial[] {
  const lines = csv.trim().split("\n").filter((l) => l.trim() !== "");
  if (lines.length < 2) return [];

  return lines
    .slice(1) // saltar encabezados
    .map((line) => {
      const cols = parseCSVLine(line);
      const name = cols[0] ?? "";
      const cargo = cols[1] ?? "";
      const text = cols[2] ?? "";
      const rating = parseInt(cols[3] ?? "5", 10) || 5;
      const date = cols[4] ?? "";

      if (!name || !text) return null;

      const words = name.trim().split(" ");
      const avatar =
        words.length >= 2
          ? `${words[0][0]}${words[1][0]}`.toUpperCase()
          : name.slice(0, 2).toUpperCase();

      return { name, cargo, text, rating, date, avatar };
    })
    .filter(Boolean) as Testimonial[];
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchTestimonials() {
      try {
        const res = await fetch(SHEET_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const csv = await res.text();
        const parsed = parseCSV(csv);
        if (!cancelled) {
          setTestimonials(parsed.length > 0 ? parsed : fallbackTestimonials);
        }
      } catch {
        if (!cancelled) {
          setTestimonials(fallbackTestimonials);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchTestimonials();
    return () => { cancelled = true; };
  }, []);

  return { testimonials, loading };
}
