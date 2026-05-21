import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { trackEvent } from "./analytics";

export function Contact() {
  const handleClickWhatsApp = () => {
    trackEvent("click", "CTA", "contact_whatsapp");
    const phoneNumber = "5493585134637";
    const message = "Hola! Quería hacer una consulta legal:";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(
      url,
      typeof window !== "undefined" && window.innerWidth <= 768
        ? "_self"
        : "_blank",
    );
  };

  return (
    <section id="contacto" className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4 text-sm text-gray-700">
            Contacto
          </div>
          <h2 className="mb-4 text-gray-900">Agenda tu Consulta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estamos para ayudarte. Contactanos para recibir asesoramiento legal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-[#C4B454]" />
            </div>
            <h3 className="mb-2 text-gray-900">Dirección</h3>
            <p className="text-gray-600">
              Alberdi N° 1365 - Río Cuarto, Cba.
              <br />
              Saavedra N° 66 - San Basilio, Cba.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-[#C4B454]" />
            </div>
            <h3 className="mb-2 text-gray-900">Teléfono y WhatsApp</h3>
            <p className="text-gray-600">358-5134637</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-[#C4B454]" />
            </div>
            <h3 className="mb-2 text-gray-900">Email</h3>
            <p className="text-gray-600">
              ab.agustinsanchez@gmail.com
              <br />
              abog.sofialanzelotta@gmail.com
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <h3 className="mb-4 text-gray-900 text-2xl">
              ¿Tenés alguna duda legal?
            </h3>

            <button
              onClick={handleClickWhatsApp}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Hablame por WhatsApp</span>

              <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 pointer-events-none"></div>
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Respuesta inmediata dentro del horario de atención
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#C4B454]" />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Horarios de Atención</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between gap-4">
                      <span>Lunes a Viernes:</span>
                      <span className="text-right">
                        9:00 a 13:00 hs
                        <br />
                        16:00 a 20:00 hs
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 mt-2 pt-2 border-t border-gray-100">
                      <span>Sábados y Domingos:</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="mb-4 text-gray-900">Agenda tu consulta!</h3>
              <p className="text-gray-600 mb-4">
                En nuestra primer consulta evaluamos tu caso y te brindamos una
                orientación inicial sobre los pasos a seguir.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C4B454] rounded-full"></div>
                  Evaluación inicial del caso
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C4B454] rounded-full"></div>
                  Asesoramiento profesional
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C4B454] rounded-full"></div>
                  Plan de acción personalizado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
