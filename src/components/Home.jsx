import React, { useEffect } from "react";
import Banner from "./Banner";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Contact from "./Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Banner />
      <Aboutme />
      <Skills />
      <Contact />
    </>
  );
}
