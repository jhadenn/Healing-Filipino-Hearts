import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" id="home">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
