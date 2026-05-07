

import React, { useState } from "react";

const RangeSlider = () => {
  const [sqft, setSqft] = useState(1600);
  const [price, setPrice] = useState(45);

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-bold text-[#171E2E] mb-2">
          Square feet
        </label>

        <div className="border border-yellow-400 rounded-xl px-4 py-4 bg-white">
          <input
            type="range"
            min="0"
            max="3200"
            value={sqft}
            onChange={(e:any) => setSqft(e.target.value)}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between text-xs font-semibold text-gray-600 mt-2 relative">
            <span>0</span>
            <span className="absolute left-1/2 -translate-x-1/2 text-[#171E2E] font-bold">
              {sqft} Sq.Ft
            </span>
            <span>3200 Sq.Ft</span>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-[#171E2E] mb-2">
          Price
        </label>

        <div className="border border-yellow-400 rounded-xl px-4 py-4 bg-white">
          <input
            type="range"
            min="30"
            max="60"
            value={price}
            onChange={(e:any) => setPrice(e.target.value)}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between text-xs font-semibold text-gray-600 mt-2 relative">
            <span>30L</span>
            <span className="absolute left-1/2 -translate-x-1/2 text-[#171E2E] font-bold">
              {price}L
            </span>
            <span>60L</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;