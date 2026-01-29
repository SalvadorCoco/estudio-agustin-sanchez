import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "María González",
    date: "15/09/2024",
    rating: 5,
    text: "Excelente profesional, serio y responsable. Siempre asesorando en todo momento. Ya me resolvieron dos cuestiones legales y sin dudas los volvería a elegir.",
    avatar: "MG"
  },
  {
    name: "Carlos Fernández",
    date: "08/10/2024",
    rating: 5,
    text: "Gracias al Estudio jurídico que me acompañó, me asesoró y me dio un seguimiento personalizado en mi proceso con la ART. Pude sacarme todas las dudas y logré cumplir con mi objetivo.",
    avatar: "CF"
  },
  {
    name: "Laura Martínez",
    date: "21/11/2024",
    rating: 5,
    text: "Totalmente agradecida y conforme con el servicio brindado. Es una persona concreta, cordial y atenta en todo. Y aparte me brindó contención y protección durante el caso! Super recomendable.",
    avatar: "LM"
  },
  {
    name: "Roberto Silva",
    date: "03/08/2024",
    rating: 5,
    text: "Profesional de excelencia. Me ayudó con un tema laboral muy complejo y logró resultados que superaron mis expectativas. Muy agradecido por su dedicación.",
    avatar: "RS"
  },
  {
    name: "Ana Rodríguez",
    date: "12/12/2024",
    rating: 5,
    text: "Resolvió mi caso de herencia de manera eficiente y clara. Siempre disponible para responder mis dudas. Lo recomiendo ampliamente.",
    avatar: "AR"
  }
];

export function SuccessCases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Determinar cuántas cards mostrar según el ancho de pantalla
  const getVisibleTestimonials = () => {
    // En móvil: 1, en tablet: 2, en desktop: 3
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
    
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else if (isTablet) {
      const next = (currentIndex + 1) % testimonials.length;
      return [testimonials[currentIndex], testimonials[next]];
    } else {
      const next1 = (currentIndex + 1) % testimonials.length;
      const next2 = (currentIndex + 2) % testimonials.length;
      return [testimonials[currentIndex], testimonials[next1], testimonials[next2]];
    }
  };

  return (
    <section id="casos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 text-sm text-gray-700 border border-gray-200">
            Testimonios
          </div>
          <h2 className="mb-4 text-gray-900">
            Esto Opinan Quiénes Nos Conocen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative mb-12">
          {/* Testimonios visibles en desktop */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#C4B454] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-gray-900">{testimonial.name}</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C4B454] text-[#C4B454]" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Testimonios visibles en tablet */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#C4B454] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-gray-900">{testimonial.name}</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C4B454] text-[#C4B454]" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Testimonios visibles en móvil */}
          <div className="md:hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#C4B454] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-gray-900">{testimonial.name}</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500">{testimonial.date}</div>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C4B454] text-[#C4B454]" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center gap-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#C4B454] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Casos exitosos</div>
          </div>
          <div>
            <div className="text-4xl text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Clientes satisfechos</div>
          </div>
          <div>
            <div className="text-4xl text-gray-900 mb-2">20+</div>
            <div className="text-gray-600">Años de experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
