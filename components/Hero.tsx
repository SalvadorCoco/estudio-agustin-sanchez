import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1635845080335-dcfe06a0fcf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI3ODQ4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Estudio Jurídico"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-sm text-white">
            Más de 5 años de experiencia
          </div>
          <h1 className="mb-6 text-white">
            Defendemos tus derechos con excelencia y compromiso
          </h1>
          <p className="text-white/90 mb-8 text-lg">
            Somos un estudio jurídico especializado en brindar soluciones legales efectivas.
            Nuestro compromiso es proteger tus intereses con profesionalismo y dedicación.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-[#C4B454] text-gray-900 hover:bg-[#B3A34D] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Consulta Gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="px-6 py-3 border border-white text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => {
                const element = document.getElementById("servicios");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Nuestros Servicios
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl text-white mb-1">100+</div>
              <div className="text-white/70">Casos exitosos</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-1">98%</div>
              <div className="text-white/70">Tasa de éxito</div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
