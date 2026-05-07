
import { NavLink } from "react-router-dom";
import Ftr from "../../assets/images/services/ftr-1.png"
import Logo from "../../assets/images/services/logo.png"
import { ArrowUp, House, HousePlus, Mail, Phone, Settings, SquarePen, UsersRound } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#12192b] pt-16 pb-6 relative overflow-hidden group font-sans mt-auto border-t border-white/10">
        <img
          src={Ftr}
          alt="Building Cityscape"
          className="absolute bottom-0 left-0 w-full h-[250px] object-cover object-bottom opacity-90 transform translate-y-2/3 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none"
          loading="lazy"
        />

        <div className="max-w-[1320px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-2">
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="w-32 mb-4">
                  <NavLink to={"/"} className="inline-block">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="w-[74px] h-[92px] object-contain"
                      loading="lazy"
                    />
                  </NavLink>
                </div>

                <h2 className="text-3xl text-white mb-4">
                  <span className="italic font-medium">Smart Moves</span>
                  <span className="font-bold">Start With Us</span>
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 pr-4">
                  Redefining real estate through institutional-grade advisory
                  and world-className inventory.
                </p>

                <div className="flex gap-3 mb-10">
                  <a
                    href="https://www.instagram.com/"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center  border border-white transition-colors duration-300 hover:border-[#fca311] hover:bg-[#12192b]"
                  >
                    <i
                      className="fa-brands fa-instagram text-[#fca311]"
                     
                    ></i>
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition border border-white transition-colors duration-300 hover:border-[#fca311] hover:bg-[#12192b]"
                  >
                    <i
                      className="fa-brands fa-facebook-f text-[#fca311]"
                    
                     
                    ></i>
                  </a>
                  <a
                    href="https://x.com/"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition border border-white transition-colors duration-300 hover:border-[#fca311] hover:bg-[#12192b]"
                  >
                    <i
                      className="fa-brands fa-twitter text-[#fca311]"
                      
                    ></i>
                  </a>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-white text-sm mb-3">
                  Receive monthly market reports and exclusive listing updates.
                </p>
                <form method="get">
                  <div className="flex bg-white rounded-lg overflow-hidden w-full max-w-[350px]">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 text-sm text-gray-800 outline-none bg-white"
                      required
                    />

                    <input
                      type="submit"
                      className="bg-[#fca311] hover:bg-[#e5930f] text-black font-bold text-sm px-6 py-3 transition"
                      value="Join"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="footer-heading text-white font-bold tracking-wide mb-6">
                  NAVIGATION
                </div>

                <ul className="space-y-4">
                  <li>
                    <NavLink
                      to={"/"}
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        
                        
                        <House size={15} className=" text-[#fca311]"/>
                      </span>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/about"}
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <UsersRound size={15}  className="text-[#fca311]"/> 
                        
                        
                      </span>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/property"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                       
                         <HousePlus size={15} className=" text-[#fca311]"/>
                         
                        
                      </span>
                      Property List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        
                       <Settings  size={15}  className=" text-[#fca311]"/> 
                       
                        
                      </span>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        
                       <SquarePen  size={15}  className= "text-[#fca311]" />  
                        
                        
                      </span>
                      Blogs
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="footer-heading text-white font-bold tracking-wide mb-6">
                  CONTACTS
                </div>
                <ul className="space-y-4">
                  <li>
                    <NavLink
                     to="mail"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white text-[#fca311] flex items-center justify-center text-[10px] shadow-sm">
                       <Mail size={15} />
                      </span>
                      Imperial@mail.com
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                     to="tel"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-white text-[#fca311] flex items-center justify-center text-[10px] shadow-sm">
                       <Phone size={15} />
                      </span>
                      +28352032032-940
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="footer-heading text-white font-bold tracking-wide mb-6">
                  EXPERTISE
                </div>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition block"
                    >
                      Luxury Residential
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition block"
                    >
                      Commercial Assets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition block"
                    >
                      Market Analysis
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <div className="footer-heading text-white font-bold tracking-wide mb-6">
                  OFFICES
                </div>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition block"
                    >
                      Kolkata
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition block"
                    >
                      Mumbai
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#fca311] text-sm transition block"
                    >
                      Bangalore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-white text-xs md:text-sm pt-8 pb-4 relative z-20">
            <span className="mb-4 md:mb-0 text-white">
              &copy; 2026 <a href="index.html"> INFINITY HORIZON </a> ALL RIGHT
              RESERVED
            </span>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-semibold tracking-wider uppercase text-[10px] sm:text-xs">
              <a href="#" className="hover:text-[#fca311] transition">
                OFFERS
              </a>
              <a href="#" className="hover:text-[#fca311] transition">
                TERMS OF SERVICE
              </a>
              <a href="#" className="hover:text-[#fca311] transition">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:text-[#fca311] transition">
                COOKIE SETTINGS
              </a>
            </div>
          </div>

          <button
            onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-4 md:right-6 bottom-11 w-12 h-12 rounded-full bg-white/95 text-[#fca311] flex items-center justify-center shadow-lg hover:bg-[#fca311] hover:text-white transition duration-300 text-xl z-30 leading-none"
          >
            <ArrowUp size={25} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
