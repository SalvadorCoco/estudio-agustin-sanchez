export function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#C4B454]/20 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo balanza para membrete.png"
            alt="Logo Estudio Jurídico"
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="tracking-tight text-gray-900">
              Estudio Jurídico Sanchez y Lanzelotta
            </div>
            <div className="text-xs text-gray-500">
              Abogados a tu disposición
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-gray-600 hover:text-[#C4B454] transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("casos")}
            className="text-gray-600 hover:text-[#C4B454] transition-colors"
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-gray-600 hover:text-[#C4B454] transition-colors"
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="px-6 py-2 bg-[#C4B454] hover:bg-[#B3A34D] text-gray-900 rounded-lg transition-colors"
          >
            Contacto
          </button>
        </nav>
      </div>
    </header>
  );
}
