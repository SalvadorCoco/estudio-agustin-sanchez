import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Gracias por contactarnos. En breve nos comunicaremos con usted.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-4 text-sm text-gray-700">
            Contacto
          </div>
          <h2 className="mb-4 text-gray-900">
            Agenda tu Consulta
          </h2>
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
            <p className="text-gray-600">Alberdi N° 1365 - Río Cuarto, Cba.<br />Saavedra N° 66 - San Basilio, Cba.</p>
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
            <p className="text-gray-600">ab.agustinsanchez@gmail.com<br />abog.sofialanzelotta@gmail.com</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="mb-6 text-gray-900">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4B454] focus:border-transparent"
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Teléfono/WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4B454] focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Brindanos detalles de tu caso/consulta"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C4B454] focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#C4B454] hover:bg-[#B3A34D] text-gray-900 rounded-lg transition-colors"
              >
                Enviar Consulta
              </button>
            </form>
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
                      <span className="text-right">9:00 a 13:00 hs<br />16:00 a 20:00 hs</span>
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
                En nuestra primer consulta evaluamos tu caso y te brindamos
                una orientación inicial sobre los pasos a seguir.
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
