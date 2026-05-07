

const FilterCheckbox = () => {
  return (
    <div>
      <div className="mb-6">
              <label className="block text-sm font-bold text-[#171E2E] mb-3"
                >BHK</label>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                  />
                  4 BHK
                </label>
                {/* <!-- className="w-5 h-5 rounded border-2 border-gray-300 text-[#171E2E] focus:ring-0 checked:bg-[#171E2E]" --> */}
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                  />
                  3 BHK
                </label>
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                    checked
                  />
                  2 BHK
                </label>
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                  />
                  1 BHK
                </label>
              </div>
            </div>

              <div className="mb-8">
              <label className="block text-sm font-bold text-[#171E2E] mb-3"
                >Apartment</label>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                  />
                  Studio
                </label>
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                  />
                  Penthouse
                </label>
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                    checked
                  />
                  Duplex
                </label>
                <label
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="bg-black accent-[#171E2E] w-5 h-5 rounded border-2"
                  />
                  Lofts
                </label>
              </div>
            </div>



    </div>
  )
}

export default FilterCheckbox