import { GraduationCap, Award, Users, Target, FileText } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formación Académica",
    description: "Abogado egresado de la Universidad de Buenos Aires. Especialización en Derecho Civil y Comercial."
  },
  {
    icon: Award,
    title: "Reconocimientos",
    description: "Múltiples distinciones por excelencia profesional y contribución al desarrollo jurídico."
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Equipo multidisciplinario de profesionales comprometidos con cada caso."
  },
  {
    icon: Target,
    title: "Resultados Comprobados",
    description: "98% de casos resueltos favorablemente para nuestros clientes."
  }
];

export function About() {
  const handleDownloadCV = () => {
    // Aquí se puede enlazar a un PDF del CV
    alert("El CV se descargará próximamente. Por favor, contacta al estudio para más información.");
  };

  return (
    <section id="sobre" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 text-sm text-gray-700 border border-gray-200">
              Sobre Nosotros
            </div>
            <h2 className="mb-4 text-gray-900">
              Dr. Agustin Sanchez
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Con más de 20 años de trayectoria en el ejercicio del derecho, el Dr. Agustin Sanchez 
              ha construido una sólida reputación basada en la excelencia, la ética profesional y 
              el compromiso con sus clientes en Río Cuarto, Córdoba.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro estudio se caracteriza por un enfoque personalizado, donde cada caso recibe 
              la atención y dedicación que merece. Creemos en la importancia de entender las 
              necesidades únicas de cada cliente para ofrecer soluciones legales efectivas.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-[#C4B454] rounded-full"></div>
                <span className="text-sm text-gray-700">Matriculado desde 2004</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-[#C4B454] rounded-full"></div>
                <span className="text-sm text-gray-700">Colegio de Abogados</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-200 mb-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg3OTE3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Agustin Sanchez"
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                onClick={handleDownloadCV}
                className="w-full px-6 py-3 bg-[#C4B454] hover:bg-[#B3A34D] text-gray-900 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Ver Curriculum Vitae
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4 text-gray-900">Nuestra Oficina</h3>
            <p className="text-gray-600 mb-6">
              Ubicados en el corazón de Río Cuarto, Córdoba, nuestro estudio cuenta con instalaciones 
              modernas y espacios diseñados para brindar privacidad y comodidad durante las consultas.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1714150458873-715e134901a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXclMjBvZmZpY2V8ZW58MXx8fHwxNzYyNzI0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
