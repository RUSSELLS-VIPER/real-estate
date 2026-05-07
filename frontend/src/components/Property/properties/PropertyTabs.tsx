import React from 'react'
import { NavLink } from 'react-router-dom'

const PropertyTabs = () => {
  return (
    <div>
       <div
            className="bg-[#F0F4F9] py-3 rounded-2xl flex justify-center mb-8 gap-4"
          >
            <NavLink
             to="/sell"
              className="px-8 py-2.5 bg-[#202E5C] text-white text-sm font-bold rounded-xl border-2 border-[#202E5C] hover:bg-white hover:text-[#202E5C] hover:shadow-md transition-all duration-300"
            >
              For Sell
            </NavLink>
            <NavLink
              to="/rent"
              className="px-8 py-2.5 bg-white text-gray-600 text-sm font-bold rounded-xl border-2 border-gray-200 hover:border-[#202E5C] hover:text-[#202E5C] hover:shadow-md transition-all duration-300"
            >
              For Rent
            </NavLink>
          </div>
    </div>
  )
}

export default PropertyTabs