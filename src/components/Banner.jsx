import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImg from "../assets/MP-banner.jpg"; // ✅ import image correctly

export default function Banner() {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className=" scroll-mt-20 pt-12 md:pt-24" id="home">
      <div className="container pb-0 px-[20px] md:px-12">
        <div className="flex flex-wrap w-full">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            className="md:pr-7 w-full gap-6 flex flex-wrap align-middle md:self-center content-center md:w-1/2 order-2 md:order-1 mt-6 md:mt-0"
          >
            <h1 className="text-h3 md:text-h1 font-semibold">
              <div>
                Hi, I’m <span className="text-primary">Meghna</span>
              </div>
              <div>A Front-End Developer with 5.6 Years of Experience</div>
            </h1>
            <p className="text-button md:text-p">
              I design and build modern, responsive, and user-friendly web
              applications using HTML, CSS, Tailwind, JavaScript, and React.
              Passionate about clean code and pixel-perfect design.
            </p>

            {/* Fixed Contact Button */}
          <button
                className="btn"
                onClick={() =>
                    window.open(
                    "https://mail.google.com/mail/?view=cm&to=priyadarshi.meghna01@gmail.com",
                    "_blank"
                    )
                }
                >
                Contact Me
                </button>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            className="w-full flex justify-center md:justify-end md:w-1/2 order-1 md:order-2 mt-0 md:mt-0"
          >
            <div className="w-full">
              <img
                src={BannerImg}
                alt="Banner"
                className="rounded-tr-[100px] rounded-bl-[100px] md:rounded-tr-[200px] md:rounded-bl-[200px] h-[300px] sm:h-[400px] md:h-[420px] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
