import React from "react";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Experience from "./Components/experience/Experience";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import Testimonials from "./Components/testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <h1>hello</h1>
    </div>
  );
};

export default App;
