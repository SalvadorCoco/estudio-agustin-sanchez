import { Building2, Users, FileText, Briefcase, Home, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Derecho Civil",
    description: "Contratos, obligaciones y derecho de familia. Asesoramiento integral en todas tus necesidades civiles."
  },
  {
    icon: Briefcase,
    title: "Derecho Comercial",
    description: "Constitución de sociedades, fusiones y adquisiciones. Protegemos tu negocio."
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description: "Defensa de derechos laborales, despidos y negociaciones colectivas."
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description: "Compraventa, alquileres y reclamos de propiedades. Tu patrimonio en buenas manos."
  },
  {
    icon: FileText,
    title: "Derecho Sucesorio",
    description: "Testamentos, herencias y división de bienes. Planifica el futuro de tu familia."
  },
  {
    icon: ShieldCheck,
    title: "Derecho Penal",
    description: "Defensa penal en todas las instancias. Protegemos tus derechos fundamentales."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
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
