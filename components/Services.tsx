import { Building2, Users, FileText, Home, HeartPulse, Scale } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Amparos de Salud",
    description: "Brindamos asesoramiento frente a obras sociales y prepagas."
  },
  {
    icon: Building2,
    title: "Derecho civil y comercial",
    description: "Brindamos asesoramiento en contratos, responsabilidad civil, limitaciones de capacidad y más."
  },
  {
    icon: Users,
    title: "Derecho de familias",
    description: "Brindamos asesoramiento en temas de cuota alimentaria, divorcio, adopciones, reconocimientos, filiación, entre otros."
  },
  {
    icon: FileText,
    title: "Derecho sucesorio",
    description: "Brindamos asesoramiento en declaratoria de herederos, adjudicaciones, tractos abreviados y más."
  },
  {
    icon: Home,
    title: "Derecho inmobiliario y reales",
    description: "Brindamos asesoramiento en usucapiones, alquileres, compraventas y más."
  },
  {
    icon: Scale,
    title: "Derecho penal",
    description: "A cargo de la Dra. Lanzelotta, brinda asesoramiento para defensas penales en todas las instancias."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 text-sm text-gray-700 border border-gray-200">
            Servicios
          </div>
          <h2 className="mb-4 text-gray-900">
            Áreas de Práctica
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ofrecemos servicios legales especializados en diversas áreas del derecho,
            adaptados a tus necesidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#C4B454] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
