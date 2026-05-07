import React from 'react'

const pagination = () => {
  return (
    <div>
         <div
            className="flex justify-center items-center gap-1 sm:gap-2 mt-auto w-full flex-wrap"
          >
            <button
              className="px-3 sm:px-4 text-xs sm:text-sm font-medium text-[#14213D] hover:text-[#FCAA31] transition mr-1 sm:mr-2"
            >
              Prev.
            </button>
            {/* <!-- When Active --> */}
            {/* <!-- <button
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-[#14213D] text-white text-xs sm:text-sm font-medium shadow-sm transition"
              >
                1
              </button> --> */}
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 border-[#14213D] text-gray-600 hover:bg-[#14213D] hover:text-white text-xs sm:text-sm font-medium transition"
            >
              1
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 border-[#14213D] text-gray-600 hover:bg-[#14213D] hover:text-white text-xs sm:text-sm font-medium transition"
            >
              2
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 border-[#14213D] text-gray-600 hover:bg-[#14213D] hover:text-white text-xs sm:text-sm font-medium transition"
            >
              3
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 border-[#14213D] text-gray-600 hover:bg-[#14213D] hover:text-white text-xs sm:text-sm font-medium transition"
            >
              4
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 border-[#14213D] text-gray-600 hover:bg-[#14213D] hover:text-white text-xs sm:text-sm font-medium transition"
            >
              5
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border-2 border-[#14213D] text-gray-600 hover:bg-[#14213D] hover:text-white text-xs sm:text-sm font-medium transition"
            >
              6
            </button>

            <button
              className="px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-medium text-[#14213D] hover:text-[#FCAA31] transition ml-1 sm:ml-2"
            >
              Next
            </button>
          </div>
    </div>
  )
}

export default pagination