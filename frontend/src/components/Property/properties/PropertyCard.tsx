import { NavLink } from "react-router-dom";
import type { Property } from "../../../type/type/property/property";
import { Heart, MapPin } from "lucide-react";

type Props = {
  data: Property;
};
const PropertyCard = ({ data }: Props) => {
  return (
    <div className="bg-[#F0F4F9] rounded-2xl overflow-hidden transition duration-300 flex flex-col">
      
      <div className="relative h-48 w-full">
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center text-yellow-400 text-lg leading-none hover:bg-gray-50 transition">
         <Heart  className="text-sm"/> 
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        
        <div className="flex justify-between items-center mb-1.5">
          <h3 className="font-bold text-gray-900 text-[16px]">
            {data.title}
          </h3>
          <span className="text-[13px] font-bold text-gray-600">
            {data.bhk}
          </span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-[12px] text-gray-500 gap-1">
            <MapPin  className=" text-[#0F172A] text-sm" />
            {data.location}
          </div>
          <div className="text-[11px] text-gray-500 font-medium">
            Starting From
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-[12px] text-gray-500">
            Status -
            <span className="text-gray-900 font-medium">
              {data.status}
            </span>
          </div>
          <div className="font-bold text-[22px] text-gray-900">
            {data.price}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[12px] text-gray-500">
            Sq.FT -
            <span className="text-gray-900 font-bold">
              {data.sqft}
            </span>
          </div>

          <NavLink
            to="/get"
            className="bg-[#171e2e] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-yellow-400 hover:text-[#171E2E] transform hover:-translate-x-2 shadow hover:shadow-md transition-all duration-200"
          >
            Get Quote
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default PropertyCard;