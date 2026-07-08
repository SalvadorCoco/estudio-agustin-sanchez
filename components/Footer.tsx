import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.webp"
                alt="Logo Estudio Jurídico"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="tracking-tight">
                  Estudio Jurídico Sanchez y Lanzelotta
                </div>
                <div className="text-xs text-gray-400">
                  Abogados a tu disposición
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Comprometidos con la excelencia legal y la defensa de tus derechos
              en Río Cuarto, Córdoba.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/abogado.agustinsanchez"
                target={
                  typeof window !== "undefined" && window.innerWidth <= 768
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/abogado.agustinsanchez/"
                target={
                  typeof window !== "undefined" && window.innerWidth <= 768
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/agustinsanchez95/"
                target={
                  typeof window !== "undefined" && window.innerWidth <= 768
                    ? "_self"
                    : "_blank"
                }
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Áreas de Práctica</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Amparos de Salud</li>
              <li>Derecho civil y comercial</li>
              <li>Derecho Laboral</li>
              <li>Derecho sucesorio</li>
              <li>Derecho inmobiliario y reales</li>
              <li>Derecho penal</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © 2026 Estudio Jurídico Sanchez y Lanzelotta. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:salvadorcocosanchez@gmail.com"
              className="hover:text-white transition-colors"
            >
              Web desarrollada por Salvador Sanchez
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
