import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText, MapPin } from "lucide-react";

const lawyers = [
  {
    name: "Abog. Agustín Sánchez",
    location: "Río Cuarto, Córdoba",
    photo: "/agustin sanchez abogado rio cuarto estudio juridico.png",
    description:
      "Abogado egresado en la Universidad Nacional de Río Cuarto",
    detail:
      "Diplomado en Compliance, Ética Corporativa y Dirección de Procesos de Integridad (en curso). Avocado a los Amparos de Salud, además de otras ramas del derecho.",
    badges: ["M.P 2-1806", "M.F T° 509 F° 846"],
    cvAction: true,
  },
  {
    name: "Abog. Sofía Lanzelotta",
    location: "Río Cuarto, Córdoba",
    photo: "/sofia lanzelotta abogada rio cuarto estudio juridico.png",
    description:
      "Abogada egresada en la Universidad Nacional de Río Cuarto",
    detail:
      "Gestora del Automotor y de Créditos Prendarios. Avocada al Derecho Penal, además de otras ramas del derecho.",
    badges: ["M.P 2-2319", "M.F T° 511 F° 840"],
    cvAction: false,
  },
  {
    name: "Abog. Gustavo Sánchez",
    location: "Río Cuarto, Córdoba",
    photo: "/gustavo sanchez abogado san basilio estudio juridico.png",
    description:
      "Abogado egresado en la Universidad Empresarial Siglo XXI",
    detail:
      "Corredor Inmobiliario y Perito Tasador. Avocado al Derecho Inmobiliario, además de otras ramas del derecho.",
    badges: ["M.P 2-2261", "C.P.I 045993"],
    cvAction: false,
  },
];

export function About() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + lawyers.length) % lawyers.length);
  const next = () => setCurrent((c) => (c + 1) % lawyers.length);

  const lawyer = lawyers[current];

  const handleDownloadCV = () => {
    alert("El CV se descargará próximamente. Por favor, contacta al estudio para más información.");
  };

  return (
    <section id="sobre" className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 text-sm text-gray-700 border border-gray-200">
            Sobre Nosotros
          </div>
          <h2 className="text-gray-900 mb-2">Nuestro Equipo</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Profesionales comprometidos con la excelencia jurídica y el servicio personalizado.
          </p>
        </div>

        {/* Carousel */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8">

          {/* Text side */}
          <div className="order-2 md:order-1">
            <div className="mb-1 flex items-center gap-2 text-[#C4B454] text-sm font-medium">
              <MapPin className="w-4 h-4" />
              {lawyer.location}
            </div>
            <h2 className="mb-4 text-gray-900 text-3xl font-bold">{lawyer.name}</h2>
            <p className="text-gray-600 mb-4 text-base leading-relaxed">{lawyer.description}</p>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">{lawyer.detail}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {lawyer.badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200"
                >
                  <div className="w-2 h-2 bg-[#C4B454] rounded-full" />
                  <span className="text-sm text-gray-700">{badge}</span>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {lawyers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[#C4B454]" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Ver abogado ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              <span className="text-sm text-gray-400 ml-2">
                {current + 1} / {lawyers.length}
              </span>
            </div>
          </div>

          {/* Photo side */}
          <div className="order-1 md:order-2">
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 mb-4">
                <img
                  src={lawyer.photo}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Office */}
        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4 text-gray-900">Nuestras oficinas</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ubicados en la ciudad de Río Cuarto y en la localidad de San Basilio. Espacios diseñados para brindar privacidad y confianza durante las consultas.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src="/ofirioiv.jpeg"
                    alt="Oficina Río Cuarto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-900 font-medium">Río Cuarto, Córdoba</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src="/sanbasilio.jpeg"
                    alt="Oficina San Basilio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-900 font-medium">San Basilio, Córdoba</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
