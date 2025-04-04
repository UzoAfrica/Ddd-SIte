import React from "react";
import Image from "next/image";
import tech1 from "../../assets/tech1.jpg"
import tech2 from "../../assets/tech2.jpg"
import tech3 from "../../assets/tech3.jpg"
import tech4 from "../../assets/tech4.png"
import JoinWaitlist from "@/components/JoinWaitlist";


function InstituteHero() {
  return (
      <div className="mx-auto max-w-screen-xl container px-4 md:px-6 py-10 text-center">
       <h1 className="text-[28px] md:text-[48px] font-extrabold text-[#101828] font-neue">
           Welcome to Nigeria’s <span className="text-black font-bold">#1</span>
        </h1>
      <h1 className="text-[28px] md:text-[48px] font-extrabold text-[#101828] font-neue">
           Tech Training Institute
      </h1>

        <p className="text-[#667085] text-lg md:w-[80%] lg:w-[60%] mx-auto mt-4 mb-6 font-helvetica">
             We transform talented individuals into world-class tech stars and help them maximize
             their potential. If you’re looking for a structured, well-guided pathway to accelerate
             your tech journey, you’re in the right place.
        </p>
      
      <JoinWaitlist/>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
        <div className="">
          <Image
            src= {tech4}
            alt="Tech training"
            width={400}
            height={200}
            // className="rounded-lg shadow-md"
          />
          {/* <div className="absolute top-[-10px] left-[-10px] text-yellow-400 text-3xl">
            ✨
          </div> */}
        </div>

        <div className="">
          <Image
            src= {tech2}
            alt="Tech training"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="relative w-full max-w-[280px] h-auto transform rotate-[6deg]">
          <Image
            src= {tech3}
            alt="Tech training"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
          <div className="absolute top-[-10px] right-[-10px] text-green-500 text-3xl">
            🌟
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstituteHero;

