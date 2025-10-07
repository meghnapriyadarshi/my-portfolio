import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="bg-black text-white pt-0 pb-12 md:pb-24 "
      id="contact"
    >
      <div className="container max-w-7xl px-[20px] md:px-12  mx-auto text-center">
        {/* Heading */}
        <h2 className="text-h4 md:text-h2 font-semibold text-primary mb-5">Get in Touch</h2>
        <p className="text-text mb-8 text-button md:text-p">
          I’m always open to discussing new projects, collaborations, or job
          opportunities. Let’s connect and create something amazing together!
        </p>

        {/* Contact Cards — using Flex instead of Grid */}
        <div className="flex flex-row md:flex-row justify-center  gap-6">
          {/* Email */}
          <a data-aos="fade-right"
            onClick={() =>
                    window.open(
                    "https://mail.google.com/mail/?view=cm&to=priyadarshi.meghna01@gmail.com",
                    "_blank"
                    )
                }
            className=" cursor-pointer w-auto text-[0] md:text-p flex items-center gap-4 bg-gray-900 p-6 rounded-2xl shadow-lg  md:w-1/2 transition"
          >
            <Mail className="text-primary w-6 h-6" />
            <span className="text-gray-300 text-[0] hidden md:block md:text-p">
              priyadarshi.meghna01@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a data-aos="fade-left"
            href="https://www.linkedin.com/in/meghana-priydarshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-auto bg-gray-900 p-6 rounded-2xl shadow-lg  md:w-1/2 transition text-[0] md:text-p"
          >
            <Linkedin className="text-primary w-6 h-6" />
            <span className="text-gray-300 text-[0] hidden md:block md:text-p">
              https://www.linkedin.com/in/meghana-priydarshi/
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
