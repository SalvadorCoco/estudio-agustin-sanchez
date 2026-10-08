import {
  Building2,
  Users,
  FileText,
  Home,
  HeartPulse,
  Scale,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Amparos de Salud",
    slug: "salud",
    description: "Brindamos asesoramiento frente a obras sociales y prepagas.",
  },
  {
    icon: Building2,
    title: "Derecho Civil y Comercial",
    slug: "civil_comercial",
    description:
      "Brindamos asesoramiento en contratos, responsabilidad civil, limitaciones de capacidad y más.",
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    slug: "laboral",
    description:
      "Brindamos asesoramiento por despidos y frente a ART por accidentes y enfermedades laborales.",
  },
  {
    icon: FileText,
    title: "Derecho Sucesorio",
    slug: "sucesorio",
    description:
      "Brindamos asesoramiento en declaratoria de herederos, adjudicaciones, tractos abreviados y más.",
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario y Reales",
    slug: "inmobiliario",
    description:
      "Brindamos asesoramiento en usucapiones, alquileres, compraventas y más.",
  },
  {
    icon: Scale,
    title: "Derecho Penal",
    slug: "penal",
    description:
      "A cargo de la Dra. Lanzelotta, brinda asesoramiento en defensas penales en todas las instancias.",
  },
];

const PHONE = "5493585134637";

function consultAbout(area: string) {
  const message = `Hola! Quería hacer una consulta sobre ${area}:`;
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  window.open(
    url,
    typeof window !== "undefined" && window.innerWidth <= 768
      ? "_self"
      : "_blank",
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 text-sm text-gray-700 border border-gray-200">
            Servicios
          </div>
          <h2 className="mb-4 text-gray-900">Áreas de Práctica</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ofrecemos servicios legales especializados en diversas áreas del
            derecho, adaptados a tus necesidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              data-track={`servicio_${service.slug}`}
              data-track-goal="consulta_whatsapp"
              onClick={() => consultAbout(service.title)}
              className="group text-left bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 bg-[#C4B454] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#9a8c35] group-hover:gap-2 transition-all">
                Consultar por WhatsApp <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
