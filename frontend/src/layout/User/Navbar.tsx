import { useState } from "react";
import Logo from "../../assets/images/services/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Heart,
  Menu,
  User,
  X,
} from "lucide-react";
const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<boolean>(false);

  const npropertiesItem = [
    { name: "Apartments", path: "/apartments" },
    { name: "Villas", path: "/villas" },
    { name: "Commercial Spaces", path: "/spaces" },
    { name: "Land & Plots", path: "/" },
  ];

  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50  pt-4 md:pt-6 pb-2">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6">
          <header className="relative z-40 w-full  pb-2">
            <div className="max-w-[1320px] mx-auto px-4 md:px-6">
              <nav className="flex items-center justify-between w-full h-16">
                {/* Logo */}
                <div className="flex-1 flex justify-start">
                  <NavLink to="/" className="inline-block">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="w-[74px] h-[92px] object-contain"
                      loading="lazy"
                    />
                  </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-none items-center gap-6 backdrop-blur-sm border-2 border-white/50 rounded-full px-6 py-1">
                  <NavLink
                    className="nav-link text-[#0F172A] text-sm font-semibold hover:text-white transition-colors"
                    to="/"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    className="nav-link text-[#0F172A] text-sm font-semibold hover:text-white transition-colors"
                    to="/about"
                  >
                    About US
                  </NavLink>

                  {/* Dropdown */}
                  <div className="relative group cursor-pointer">
                    <div className="flex items-center px-5 py-2.5 text-sm text-white transition">
                      <NavLink  to="/property" className="nav-link text-[#0F172A] group-hover:text-white text-sm font-semibold">
                        Properties
                      </NavLink>
                      <span className="ml-1.5  text-[#0F172A] group-hover:text-white inline-block transition-transform duration-300 group-hover:-rotate-180">
                        
                          {mobileDropdown ? (
                            <ChevronUp size={15} />
                          ) : (
                            <ChevronDown size={15}/>
                          )}
                        
                      </span>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-gray-50 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <ul className="py-2 font-sans">
                        {npropertiesItem.map((item) => (
                          <li key={item.name}>
                            <NavLink
                              to={item.path}
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition"
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <NavLink
                    className="nav-link text-[#0F172A] text-sm font-semibold hover:text-white transition-colors"
                    to="/service"
                  >
                    Services
                  </NavLink>

                  <NavLink
                    className="nav-link text-[#0F172A] text-sm font-semibold hover:text-white transition-colors"
                    to="/blog"
                  >
                    Blogs
                  </NavLink>
                </div>

                {/* Right Side (Desktop) */}

                <div className="hidden lg:flex flex-1 items-center justify-end gap-3">
                   <button
                    aria-label="Favorite"
                    className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-white"
                  >
                    <Heart
                      size={20}
                      className="text-amber-500 group-hover:text-red-500 transition"
                    />
                  </button>
                 
                  <button
                    aria-label="Favorite"
                    className="group inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[#0F172A] hover:bg-white"
                  >
                     
                      <User size={20}className=" text-sm transition-colors duration-300 ease-in-out text-amber-500 group-hover:text-[#0F172A]" />
                    
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="text-sm font-medium whitespace-nowrap group flex items-center gap-4 px-4 py-2 sm:pr-2 pr-2 sm:gap-3 sm:px-4 sm:py-2 rounded-2xl transition-all duration-500 ease-in-out bg-[#0F172A] text-white hover:bg-white hover:text-[#0F172A] border border-transparent hover:border-[#0F172A]"
                  >
                    Contact Us
                    <div className="flex items-center justify-center w-7 h-7 rounded-xl transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#0F172A]">
                      
                        <ArrowUpRight size={20} className=" text-sm transition-transform duration-300 ease-in-out text-slate-900 -rotate-45 group-hover:text-amber-400 group-hover:rotate-0"/>
                      
                    </div>
                  </button>
                </div>

                {/* Mobile Button */}
                <button
                  className="lg:hidden text-white  ml-auto"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <X className="font-bold text-3xl" /> : <Menu  className="font-bold text-3xl" />}
                </button>
              </nav>
            </div>

            {/* Overlay */}
            {mobileOpen && (
              <div
                className="fixed inset-0 bg-black/60 z-40"
                onClick={() => setMobileOpen(false)}
              />
            )}

           
            {/* Mobile Menu */}
            <div
              className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#111827] shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ${
                mobileOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <span className="text-white font-bold tracking-wider">
                  MENU
                </span>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-white transition p-1  leading-none"
                >
                  <i className="fa-solid fa-xmark">
                    <X className="font-bold text-4xl" />
                  </i>
                </button>
              </div>

              {/* Nav */}
              <nav className="flex flex-col px-6 py-6 space-y-6 font-sans">
                {/* Home */}
                <div>
                  <NavLink
                    to="/"
                    className="nav-link text-white text-lg font-medium hover:text-yellow-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </NavLink>
                </div>

                {/* About */}
                <div>
                  <NavLink
                    to="/about"
                    className="nav-link text-white text-lg font-medium hover:text-yellow-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    About US
                  </NavLink>
                </div>

                {/* Properties Dropdown */}
                <div className="flex flex-col group">
                  <button
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    className="text-white hover:text-yellow-400 text-lg font-semibold flex justify-between items-center w-full focus:outline-none transition"
                  >
                    <span className="nav-link">Properties</span>
                    <span className="inline-block transition-transform duration-300 text-sm">
                    
                        {mobileDropdown ? <ChevronUp /> : <ChevronDown />}
                     
                    </span>
                  </button>

                  {mobileDropdown && (
                    <div className="flex flex-col pl-4 mt-3 space-y-4">
                      <NavLink
                        to="/properties/apartments"
                        className="text-gray-300 hover:text-yellow-400 transition block"
                        onClick={() => setMobileOpen(false)}
                      >
                        Apartments
                      </NavLink>

                      <NavLink
                        to="/properties/villas"
                        className="text-gray-300 hover:text-yellow-400 transition block"
                        onClick={() => setMobileOpen(false)}
                      >
                        Villas
                      </NavLink>

                      <NavLink
                        to="/properties/commercial"
                        className="text-gray-300 hover:text-yellow-400 transition block"
                        onClick={() => setMobileOpen(false)}
                      >
                        Commercial Spaces
                      </NavLink>

                      <NavLink
                        to="/properties/plots"
                        className="text-gray-300 hover:text-yellow-400 transition block pb-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        Land & Plots
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* Services */}
                <div>
                  <NavLink
                    to="/services"
                    className="nav-link text-white text-lg font-medium hover:text-yellow-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Services
                  </NavLink>
                </div>

                {/* Blogs */}
                <div>
                  <NavLink
                    to="/blogs"
                    className="nav-link text-white text-lg font-medium hover:text-yellow-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Blogs
                  </NavLink>
                </div>

                <hr className="border-gray-800 my-4" />

                {/* Icons */}
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex gap-4">
                    <button className="group inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-white transition-all duration-300 ease-in-out hover:border-red-500 hover:bg-white">
                    <Heart size={20}     className=" text-sm transition-colors duration-300 ease-in-out text-amber-500 group-hover:text-red-500"/>
                       
                     
                    </button>

                    <button className="group inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-white transition-all duration-300 ease-in-out hover:border-[#0F172A] hover:bg-white">
                      <User size={20}  className=" text-sm transition-colors duration-300 ease-in-out text-amber-500 group-hover:text-[#0F172A]"/>
                        
                     
                    </button>
                  </div>

                  {/* Contact Button */}
                  <NavLink
                    to="/contact"
                    className="group flex items-center justify-center gap-4 px-4 py-2 rounded-2xl transition-all duration-500 ease-in-out bg-[#0F172A] text-white hover:bg-white hover:text-[#0F172A] border-2 border-white hover:border-[#0F172A]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-sm font-medium whitespace-nowrap">
                      Contact Us
                    </span>

                    <div className="flex items-center justify-center w-7 h-7 rounded-xl transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#0F172A]">
                     <ArrowUpRight size={20}  className=" text-sm transition-transform duration-300 ease-in-out text-slate-900 -rotate-45 group-hover:text-amber-400 group-hover:rotate-0"/>
                        
                      
                    </div>
                  </NavLink>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
