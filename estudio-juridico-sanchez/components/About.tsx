import { useState } from "react";
import { GraduationCap, Award, Users, Target, ChevronLeft, ChevronRight, FileText, MapPin } from "lucide-react";

const lawyers = [
  {
    name: "Dr. Agustín Sánchez",
    role: "Socio Fundador",
    location: "Río Cuarto, Córdoba",
    photo: "/agustin sanchez abogado rio cuarto estudio juridico.png",
    description:
      "Con más de 20 años de trayectoria en el ejercicio del derecho, el Dr. Agustín Sánchez ha construido una sólida reputación basada en la excelencia, la ética profesional y el compromiso con sus clientes en Río Cuarto, Córdoba.",
    detail:
      "Nuestro estudio se caracteriza por un enfoque personalizado, donde cada caso recibe la atención y dedicación que merece. Creemos en la importancia de entender las necesidades únicas de cada cliente para ofrecer soluciones legales efectivas.",
    badges: ["Matriculado desde 2004", "Colegio de Abogados"],
    cvAction: true,
  },
  {
    name: "Dr. Gustavo Sánchez",
    role: "Socio",
    location: "San Basilio, Córdoba",
    photo: "/gustavo sanchez abogado san basilio estudio juridico.png",
    description:
      "El Dr. Gustavo Sánchez aporta al estudio una sólida formación en derecho civil y penal, con especial dedicación a los casos de la región de San Basilio y alrededores.",
    detail:
      "Su cercanía con los clientes y su profundo conocimiento del territorio cordobés le permiten ofrecer asesoramiento legal adaptado a cada realidad local, con resultados concretos y efectivos.",
    badges: ["Derecho Civil", "Derecho Penal"],
    cvAction: false,
  },
  {
    name: "Dra. Sofía Lanzelotta",
    role: "Asociada",
    location: "Río Cuarto, Córdoba",
    photo: "/sofia lanzelotta abogada rio cuarto estudio juridico.png",
    description:
      "La Dra. Sofía Lanzelotta se especializa en derecho de familia y sucesiones, aportando una perspectiva fresca y rigurosa en cada caso que representa.",
    detail:
      "Comprometida con la defensa de los derechos de sus clientes, combina la solidez jurídica con un trato humano y empático que distingue al Estudio Jurídico Sánchez.",
    badges: ["Derecho de Familia", "Sucesiones"],
    cvAction: false,
  },
];

const credentials = [
  {
    icon: GraduationCap,
    title: "Formación Académica",
    description:
      "Abogados egresados de las principales universidades del país. Especializaciones en múltiples ramas del derecho.",
  },
  {
    icon: Award,
    title: "Reconocimientos",
    description:
      "Múltiples distinciones por excelencia profesional y contribución al desarrollo jurídico regional.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description:
      "Equipo multidisciplinario de profesionales comprometidos con cada caso.",
  },
  {
    icon: Target,
    title: "Resultados Comprobados",
    description:
      "98% de casos resueltos favorablemente para nuestros clientes.",
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
    <section id="sobre" className="py-20 px-4 bg-gray-50">
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
            <h2 className="mb-1 text-gray-900 text-3xl font-bold">{lawyer.name}</h2>
            <p className="text-[#C4B454] font-semibold mb-4 text-sm uppercase tracking-wide">{lawyer.role}</p>
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
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? "bg-[#C4B454]" : "bg-gray-300 hover:bg-gray-400"
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
              {lawyer.cvAction && (
                <button
                  onClick={handleDownloadCV}
                  className="w-full px-6 py-3 bg-[#C4B454] hover:bg-[#B3A34D] text-gray-900 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Ver Curriculum Vitae
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <credential.icon className="w-5 h-5 text-gray-900" />
              </div>
              <h3 className="mb-2 text-gray-900">{credential.title}</h3>
              <p className="text-sm text-gray-600">{credential.description}</p>
            </div>
          ))}
        </div>

        {/* Office */}
        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4 text-gray-900">Nuestra Oficina</h3>
            <p className="text-gray-600 mb-6">
              Ubicados en el corazón de Río Cuarto, Córdoba, nuestro estudio cuenta con instalaciones
              modernas y espacios diseñados para brindar privacidad y comodidad durante las consultas.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1714150458873-715e134901a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXclMjBvZmZpY2V8ZW58MXx8fHwxNzYyNzI0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oficina del Estudio Jurídico"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
