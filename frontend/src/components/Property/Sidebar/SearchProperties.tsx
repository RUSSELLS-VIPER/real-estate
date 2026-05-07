import { MoveRight, } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SearchProperties = () => {
  return (
    <div>
      <div className="flex justify-center">
        <NavLink
         to="/search"
          className="group flex items-center justify-center gap-4 px-4 py-2 sm:pr-2 pr-2 sm:gap-3 sm:px-4 sm:py-2 rounded-2xl transition-all duration-500 ease-in-out bg-[#0F172A] text-white hover:bg-white hover:text-[#0F172A] border-2 border-white hover:border-[#0F172A]"
        >
          <span className="text-sm font-medium whitespace-nowrap">
            Search Properties
          </span>

          <div className="flex items-center justify-center w-7 h-7 rounded-xl transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#0F172A]">
          <MoveRight  className=" text-sm transition-transform duration-300 ease-in-out text-slate-900 -rotate-45 group-hover:text-amber-400 group-hover:rotate-0"/>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchProperties;
