import Team_1 from "../../assets/images/services/team-img-1.png";
import Team_2 from "../../assets/images/services/team-img-2.png";
import Team_3 from "../../assets/images/services/team-img-3.png";
import Team_4 from "../../assets/images/services/team-img-4.png";
import Avatar_1 from "../../assets/images/services/avatar-1.png";
import Avatar_2 from "../../assets/images/services/avatar-1.png";
import Avatar_3 from "../../assets/images/services/avatar-1.png";
import Avatar_4 from "../../assets/images/services/avatar-1.png";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TeamSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F0F4F9]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-1.5 rounded-full border border-[#fca311] text-[#fca311] text-xs font-semibold uppercase mb-6">
            Our Team
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Trusted leaders in real estate development
          </h2>
        </div>

        {/* ✅ Swiper Slider */}
       <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  loop={true}
  speed={800}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 3 },
  }}
>
          {/* Card 1 */}
          <SwiperSlide>
            <div className="bg-white p-3 rounded-lg">
              <img src={Team_1} alt="Sundar Desmukh" className="mb-4" />
              <h3 className="font-bold text-lg">Sundar Desmukh</h3>
              <p className="text-gray-600 text-sm">Lead Architect</p>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="bg-white p-3 rounded-lg">
              <img src={Team_2} alt="Simmie Rose" className="mb-4" />
              <h3 className="font-bold text-lg">Simmie Rose</h3>
              <p className="text-gray-600 text-sm">Project Manager</p>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="bg-white p-3 rounded-lg">
              <img src={Team_3} alt="Summer Meldrum" className="mb-4" />
              <h3 className="font-bold text-lg">Summer Meldrum</h3>
              <p className="text-gray-600 text-sm">Structural Engineer</p>
            </div>
          </SwiperSlide>

          {/* Card 4 */}
          <SwiperSlide>
            <div className="bg-white p-3 rounded-lg">
              <img src={Team_4} alt="John Styrus" className="mb-4" />
              <h3 className="font-bold text-lg">John Styrus</h3>
              <p className="text-gray-600 text-sm">Construction Supervisor</p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Bottom Section */}
        <div className="mt-16 max-w-[900px] mx-auto">
          <div className="flex items-center justify-between p-4 md:px-8 md:py-5 bg-[#D9D9D9] rounded-full gap-4">

            <div className="flex -space-x-3">
              <img src={Avatar_1} className="w-10 h-10 rounded-full border-2 border-[#fca311]" />
              <img src={Avatar_2} className="w-10 h-10 rounded-full border-2 border-[#fca311]" />
              <img src={Avatar_3} className="w-10 h-10 rounded-full border-2 border-[#fca311]" />
              <img src={Avatar_4} className="w-10 h-10 rounded-full border-2 border-[#fca311]" />
            </div>

            <p className="hidden md:block font-medium text-sm">
              Passionate Professionals turning visions into reality.
            </p>

            <a
              href="#"
              className="px-6 py-2 bg-[#fca311] font-bold rounded-full border-2 border-[#fca311] hover:bg-transparent"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;