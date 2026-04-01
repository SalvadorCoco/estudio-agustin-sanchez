import { Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatsAppButton } from "./components/WhatsAppButton";

// Lazy loading below-the-fold components
const Services = lazy(() =>
  import("./components/Services").then((m) => ({ default: m.Services })),
);
const SuccessCases = lazy(() =>
  import("./components/SuccessCases").then((m) => ({
    default: m.SuccessCases,
  })),
);
const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer })),
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div className="h-40 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#C4B454] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Services />
          <SuccessCases />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}
