import React from "react";
import Buildingtrust from "../../assets/images/services/building-trust-img.png";
import Expart from "../../assets/images/services/expert-icon.png";
import Innovative from "../../assets/images/services/innovative-icon.png";
import Quality from "../../assets/images/services/quality-icon.png";

const AboutSection = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-white relative z-30 -mt-12 md:-mt-20 rounded-t-[2rem] md:rounded-t-[4rem]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <img
                src={Buildingtrust}
                alt="Construction Planning"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col text-[#0F172A] gap-3">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#fca311] text-[#fca311] text-xs font-semibold tracking-wide uppercase mb-4">
                  About Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-bold">
                  Building trust through quality construction
                </h2>
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-sans">
                We are a dedicated real estate and construction company
                committed to delivering high-quality residential and commercial
                developments. With expertise in planning, design, and
                construction management, we transform ideas into durable,
                functional, and modern spaces.
              </p>

              <div className="flex flex-col gap-8 font-sans mt-4">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 text-[#fca311] text-2xl">
                    <img src={Expart} alt="icon" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Quality Construction
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We follow strict quality standards and modern building
                      practices to ensure every project is strong, safe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 text-[#fca311] text-2xl">
                    <img src={Innovative} alt="icon" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Expert Project Management
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      From planning to completion, our experienced team manages
                      each phase with precision, efficiency, and attention.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-orange-50 text-[#fca311] text-2xl">
                    <img src={Quality} alt="icon" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      Innovative Design Solutions
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      We combine creativity with functionality to deliver modern
                      spaces that meet evolving lifestyle and business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
