import Portfolio from "./Portfolio";
import AboutMe from "./components/AboutMe";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <Hero />
      {/* ABOUT ME */}
      <AboutMe />
      {/* SKILLS */}
      <Skills />
      {/* PORTFOLIO */}
      <Portfolio />
      {/* CONTACT US */}
      <ContactUs />
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
