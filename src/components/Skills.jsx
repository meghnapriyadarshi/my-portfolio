import { Code, Palette, Layers, Wrench } from "lucide-react"

export default function Skills() {
  return (
    <section className="bg-black text-white py-12 md:py-24 scroll-mt-16" id="skills">
      <div className=" container x-auto  px-[20px] md:px-12">
        <h2 className="text-h4 md:text-h2 font-semibold text-primary mb-5 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Front-End */}
          <div data-aos="fade-up" className="bg-gray-900 p-6 rounded-2xl shadow-lg  transition">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-primary w-6 h-6" />
              <h5 className="text-h5 font-semibold text-primary">
                Core Front-End
              </h5>
            </div>
            <ul className="space-y-2 text-text">
              <li>HTML5, CSS3, JavaScript (ES6+), jQuery</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Media Queries, Responsive Design</li>
            </ul>
          </div>

          {/* UI/UX & Tools */}
          <div data-aos="fade-up" className="bg-gray-900 p-6 rounded-2xl shadow-lg  transition">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="text-primary w-6 h-6" />
              <h5 className="text-h5 font-semibold text-primary">
                UI/UX & Tools
              </h5>
            </div>
            <ul className="space-y-2 text-text">
              <li>Figma, Photoshop</li>
              <li>Elementor, Divi (WordPress Builders)</li>
            </ul>
          </div>

          {/* Frameworks & Libraries */}
          <div data-aos="fade-up" className="bg-gray-900 p-6 rounded-2xl shadow-lg  transition">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-primary w-6 h-6" />
              <h5 className="text-h5 text-primary">
                Frameworks & Libraries
              </h5>
            </div>
            <ul className="space-y-2 text-text">
              <li>React.js</li>
              <li>ACF & WordPress Theme Customization</li>
            </ul>
          </div>

          {/* Other */}
          <div data-aos="fade-up" className="bg-gray-900 p-6 rounded-2xl shadow-lg transition md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-primary w-6 h-6" />
              <h5 className="text-h5 font-semibold text-primary">Other</h5>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 text-text">
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Cross-Browser Compatibility</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
