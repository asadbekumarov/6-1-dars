import React from "react";
import Hero from "../../components/hero/Hero";
import Onas from "../../components/onas/Onas";
import Nashi from "../../components/nashi/Nashi";
import Clss from "../../components/clss/Class";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Onas />
      <Nashi />
      <Clss />
      <Contact />
      <Footer />
    </div>
  );
}
