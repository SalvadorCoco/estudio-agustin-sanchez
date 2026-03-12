import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTestimonials } from "../src/hooks/useTestimonials";

export function SuccessCases() {
  const { testimonials, loading } = useTestimonials();
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right" | null>(null);
  const isAnimating = useRef(false);

  // Ancho reactivo
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleCount = windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3;
  const totalPages = Math.ceil(testimonials.length / visibleCount);
  const canNavigate = totalPages > 1;

  // Testimonios de la página actual (sin repetir)
  const pageTestimonials = testimonials.slice(
    currentPage * visibleCount,
    currentPage * visibleCount + visibleCount
  );

  const navigate = (dir: "next" | "prev") => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setSlideDir(dir === "next" ? "left" : "right");
    setCurrentPage((prev) =>
      dir === "next" ? (prev + 1) % totalPages : (prev - 1 + totalPages) % totalPages
    );
    setTimeout(() => {
      isAnimating.current = false;
    }, 350);
  };

  const goToPage = (page: number) => {
    if (page === currentPage || isAnimating.current) return;
    setSlideDir(page > currentPage ? "left" : "right");
    setCurrentPage(page);
  };

  // Clase de animación según dirección
  const animClass = slideDir === "left" ? "slide-left" : slideDir === "right" ? "slide-right" : "";

  const colClass =
    pageTestimonials.length === 1
      ? "grid-cols-1 max-w-sm mx-auto"
      : pageTestimonials.length === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-[#C4B454] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-gray-900 font-semibold text-base">{testimonial.name}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
            </svg>
          </div>
          {testimonial.cargo && (
            <div className="text-xs text-[#C4B454] font-medium mb-0.5">{testimonial.cargo}</div>
          )}
          <div className="text-xs text-gray-500">{testimonial.date}</div>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(Math.min(testimonial.rating, 5))].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#C4B454] text-[#C4B454]" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1">{testimonial.text}</p>
    </div>
  );

  return (
    <section id="casos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 text-sm text-gray-700 border border-gray-200">
            Testimonios
          </div>
          <h2 className="mb-4 text-gray-900">Esto Opinan Quiénes Nos Conocen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="w-8 h-8 border-2 border-[#C4B454] border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Carousel */}
        {!loading && testimonials.length > 0 && (
          <div className="relative mb-8">
            {/* overflow-hidden solo en el área de cards, no en las flechas */}
            <div className="overflow-hidden">
              <div
                key={currentPage}
                className={`grid gap-6 ${colClass} ${animClass}`}
              >
                {pageTestimonials.map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Flechas */}
            {canNavigate && (
              <>
                <button
                  onClick={() => navigate("prev")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}
          </div>
        )}

        {/* Dots — uno por PÁGINA */}
        {!loading && canNavigate && (
          <div className="flex justify-center gap-2 mb-16">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentPage ? "bg-[#C4B454] w-6" : "bg-gray-300 w-2"
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Stats */}
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
