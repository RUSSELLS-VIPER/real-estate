import broker1 from "../../../assets/images/Properties/chandana.png"
import broker2 from "../../../assets/images/Properties/akshay.png"
import broker3 from "../../../assets/images/Properties/ankita.png"
import { MoveRight } from "lucide-react"

const BrokerList = () => {
  return (
    <div>
        <div className="bg-[#F0F4F9] rounded-3xl p-6 text-center">
            <h3 className="font-bold text-gray-800 mb-5 text-lg">Broker List</h3>
            <div className="flex justify-center items-center flex-row gap-8 mb-6">
              <div className="flex flex-col items-center">
                <img
                  src={broker1}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover mb-2"
                  alt="Chandana"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-800"
                  >Chandana</span>
                
                <span className="text-[10px] font-bold text-orange-400"
                  >15+ Years Of<br />Experience</span>
                
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={broker2}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover mb-2"
                  alt="Akshay"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-800">Akshay</span>
                <span className="text-[10px] font-bold text-orange-400"
                  >10+ Years Of<br />Experience</span>
                
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={broker3}
                  className="w-14 h-14 rounded-full border-2 border-white shadow-sm object-cover mb-2"
                  alt="Ankita"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-gray-800">Ankita</span>
                <span className="text-[10px] font-bold text-orange-400"
                  >17+ Years Of<br />Experience</span>
                
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="group flex items-center justify-center gap-4 px-4 py-2 sm:pr-2 pr-2 sm:gap-3 sm:px-4 sm:py-2 rounded-2xl transition-all duration-500 ease-in-out bg-[#0F172A] text-white hover:bg-white hover:text-[#0F172A] border-2 border-white hover:border-[#0F172A]"
              >
                <span className="text-sm font-medium whitespace-nowrap"
                  >View All</span>
                

                <div
                  className="flex items-center justify-center w-7 h-7 rounded-xl transition-colors duration-300 ease-in-out bg-white group-hover:bg-[#0F172A]"
                >
                  
                    <MoveRight  className=" text-sm transition-transform duration-300 ease-in-out text-slate-900 -rotate-45 group-hover:text-amber-400 group-hover:rotate-0"/>
                </div>
              </a>
            </div>
          </div>
    </div>
  )
}

export default BrokerList