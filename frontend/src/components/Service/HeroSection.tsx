import Servicebanner from "../../assets/images/services/service-banner-bg.png";

const HeroSection = () => {
  return (
    <div className="text-white antialiased">
      
     
      <div
        className="relative w-full h-[50vh] min-h-[450px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Servicebanner})`,
          backgroundColor: "#a3b1c6",
        }}
      >
       
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-24">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Our Services
          </h1>
          <div
          className="flex items-center text-xs sm:text-sm md:text-base font-medium mt-2 font-sans"
        >

          <p className="text-xl sm:text-2xl text-white drop-shadow-sm">
            Explore the powerful features designed to simplify your real estate journey
          </p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;