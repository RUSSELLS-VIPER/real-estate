import Box_bg_1 from "../../assets/images/services/box-bg-img-1.png";
import Box_bg_2 from "../../assets/images/services/box-bg-img-2.png";
import Box_bg_3 from "../../assets/images/services/box-bg-img-3.png";
import Box_bg_4 from "../../assets/images/services/box-bg-img-4.png";
import Box_bg_5 from "../../assets/images/services/box-bg-img-5.png";
import Box_bg_6 from "../../assets/images/services/box-bg-img-6.png";


const ServicesCrds = () => {
  return (
    <div>
        <section
      className="py-16 md:py-24 bg-[#0F172A] relative z-30 rounded-t-[2rem] md:rounded-t-[4rem] shadow-sm -mt-6 md:-mt-10"
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex flex-col mb-12 md:mb-16">
          <div className="w-full flex justify-center mb-8">
            <span
              className="inline-block px-5 py-1.5 rounded-full border border-[#fca311] text-[#fca311] text-[10px] sm:text-xs font-semibold tracking-wide uppercase"
            >
              Our Service
            </span>
          </div>
          <div className="w-full text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Quality Services that ensures<br className="hidden md:block" />
              lastings strength
            </h2>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans"
        >
          <div
            className="group relative border border-white/20 rounded-xl overflow-hidden flex flex-col transition duration-500 hover:border-transparent"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img
                src={Box_bg_1}
                alt="Residential"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col p-8 flex-grow">
              <div className="text-[#fca311] text-4xl mb-6">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Residential Construction
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300"
              >
                We specialize in creating safe comfortable and modern homes
                tailored your lifestyle.
              </p>
              <a
                href="#"
                className="text-[#fca311] mt-auto w-fit group-hover:translate-x-2 transition-transform duration-300"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="group relative border border-white/20 rounded-xl overflow-hidden flex flex-col transition duration-500 hover:border-transparent"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img
                src={Box_bg_2}
                alt="Residential"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col p-8 flex-grow">
              <div className="text-[#fca311] text-4xl mb-6">
                <i className="fa-solid fa-industry"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Industrial Construction
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300"
              >
                We build high-performance industrial spaces designed for
                efficiency, and your operations.
              </p>
              <a
                href="#"
                className="text-[#fca311] mt-auto w-fit group-hover:translate-x-2 transition-transform duration-300"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="group relative border border-white/20 rounded-xl overflow-hidden flex flex-col transition duration-500 hover:border-transparent"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img
                src={Box_bg_3}
                alt="Residential"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col p-8 flex-grow">
              <div className="text-[#fca311] text-4xl mb-6">
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Project Management
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300"
              >
                We expertly plan coordinate and oversee projects to ensure they
                are completed on time.
              </p>
              <a
                href="#"
                className="text-[#fca311] mt-auto w-fit group-hover:translate-x-2 transition-transform duration-300"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="group relative border border-white/20 rounded-xl overflow-hidden flex flex-col transition duration-500 hover:border-transparent"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img
                src={Box_bg_4}
                alt="Residential"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col p-8 flex-grow">
              <div className="text-[#fca311] text-4xl mb-6">
                <i className="fa-solid fa-city"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Structural Engineering
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300"
              >
                Our team designs safe, efficient, and durable frameworks for a
                wide range of structures.
              </p>
              <a
                href="#"
                className="text-[#fca311] mt-auto w-fit group-hover:translate-x-2 transition-transform duration-300"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="group relative border border-white/20 rounded-xl overflow-hidden flex flex-col transition duration-500 hover:border-transparent"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img
                src={Box_bg_5}
                alt="Residential"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col p-8 flex-grow">
              <div className="text-[#fca311] text-4xl mb-6">
                <i className="fa-solid fa-cubes"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Building Renovation
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300"
              >
                Count on us for high-quality construction materials delivered
                right when you need them.
              </p>
              <a
                href="#"
                className="text-[#fca311] mt-auto w-fit group-hover:translate-x-2 transition-transform duration-300"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div
            className="group relative border border-white/20 rounded-xl overflow-hidden flex flex-col transition duration-500 hover:border-transparent"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            >
              <img
                src={Box_bg_6}
                alt="Residential"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col p-8 flex-grow">
              <div className="text-[#fca311] text-4xl mb-6">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-white font-bold text-xl mb-4">
                Safety Managements
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors duration-300"
              >
                We prioritize safety at every stage through proven protocols and
                regulatory compliance.
              </p>
              <a
                href="#"
                className="text-[#fca311] mt-auto w-fit group-hover:translate-x-2 transition-transform duration-300"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ServicesCrds