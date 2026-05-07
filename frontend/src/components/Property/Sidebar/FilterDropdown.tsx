import { ChevronDown } from "lucide-react";


const FilterDropdown = () => {
  return (
    <div>
      <div className="mb-5 border border-gray-100 rounded-xl px-4 py-3 bg-[#F9FBFC]">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Country
        </label>
        <div className="relative">
          <select className="w-full appearance-none p-2 pl-4 bg-[#202E5C] text-white text-sm font-bold rounded-xl outline-none cursor-pointer">
            <option>INDIA</option>
            <option>CHINA</option>
            <option>RUSSIA</option>
          </select>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-[10px] pointer-events-none text-white p-4">
           <ChevronDown />
          </span>
        </div>
      </div>

      <div className="mb-5 border border-gray-100 rounded-xl px-4 py-3 bg-[#F9FBFC]">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          City
        </label>
        <div className="relative">
          <select className="w-full appearance-none p-2 pl-4 bg-[#202E5C] text-white text-sm font-bold rounded-xl outline-none cursor-pointer">
            <option>Barasat</option>
            <option>Barrackpore</option>
            <option>Baruipur</option>
          </select>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-[10px] pointer-events-none text-white p-4">
            <ChevronDown />
          </span>
        </div>
      </div>

      <div className="mb-8 border border-gray-100 rounded-xl px-4 py-3 bg-[#F9FBFC]">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Category
        </label>
        <div className="relative">
          <select className="w-full appearance-none p-2 pl-4 bg-[#202E5C] text-white text-sm font-bold rounded-xl outline-none cursor-pointer">
            <option>All</option>
            <option>Duplex House</option>
            <option>Bunglow</option>
            <option>Apartments</option>
          </select>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-[10px] pointer-events-none text-white p-4">
             <ChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
