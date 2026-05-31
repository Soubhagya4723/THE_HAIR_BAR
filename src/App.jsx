import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Stylists from "./pages/Stylists";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stylists" element={<Stylists />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ContactSection />
    </>
  );
}

export default App;
