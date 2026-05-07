
import Contruction1 from "../../assets/images/services/constraction-img-1.png";
import Contruction2 from "../../assets/images/services/constraction-img-2.png";
const ConstructionSection = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-[#F0F4F9] relative z-20">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 md:gap-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="w-full h-[350px] lg:h-[500px]">
                <img
                  src={Contruction1}
                  alt="Construction Management"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                  Construction Management
                </h2>
                <p className="text-[#fca311] font-semibold text-sm md:text-base leading-snug font-sans">
                  Empowering Your Projects From Concept to Completion
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  We integrate advanced web solutions to streamline project
                  planning, enhance operational efficiency, and ensure seamless
                  coordination at every stage of construction. With advanced
                  tools, transparent reporting, and expert supervision, we
                  deliver projects on time, within budget, and with
                  uncompromised quality.
                </p>

                <h4 className="font-bold text-[#0F172A] mt-4 font-sans">
                  Key Highlights:
                </h4>

                <div className="flex flex-col gap-4 font-sans mt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-list-check"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      Project Planning & Scheduling
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-award"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      Quality & Safety Assurance
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-scale-balanced"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      Cost Control & Budgeting
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      On-Site Coordination
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="w-full h-[350px] lg:h-[500px] shadow-md">
                <img
                  src={Contruction2}
                  alt="Architecture & Design"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                  Architecture & Design
                </h2>
                <p className="text-[#fca311] font-semibold text-sm md:text-base leading-snug font-sans">
                  To empower businesses with innovative architectural solutions
                  that blend creativity, functionality, and sustainability.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-sans">
                  Our team transforms ideas into iconic landmarks through
                  advanced 3D visualization, eco-friendly practices, and
                  compliance expertise. We focus on designs that inspire,
                  endure, and reflect modern lifestyles while anticipating
                  future needs. Every project is a balance of aesthetics and
                  practicality, ensuring timeless value.
                </p>

                <h4 className="font-bold text-[#0F172A] mt-4 font-sans">
                  Key Highlights:
                </h4>

                <div className="flex flex-col gap-4 font-sans mt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-landmark"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      Creative & Functional Designs
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-cubes"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      3D Visualization & Modeling
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-recycle"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      Sustainable Building Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 flex justify-center text-[#fca311] text-lg">
                      <i className="fa-solid fa-file-contract"></i>
                    </div>
                    <span className="text-[#0F172A] font-bold text-sm">
                      Permitting & Compliance
                    </span>
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

export default ConstructionSection;
