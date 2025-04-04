import React from "react";
import Image from "next/image";
import tech1 from "../../assets/tech1.jpg"
import tech2 from "../../assets/tech2.jpg"
import tech3 from "../../assets/tech3.jpg"
import tech4 from "../../assets/tech4.png"


function InstituteHero() {
  return (
    <div className="mx-auto max-w-screen-xl container px-4 md:px-6 py-10 text-center">
      {/* Heading */}
      <h1 className="text-[28px] md:text-[48px] font-extrabold text-[#101828]">
        Welcome to Nigeria’s <span className="text-black font-bold">#1</span>
      </h1>
      <h1 className="text-[28px] md:text-[48px] font-extrabold text-[#101828]">
        Tech Training Institute
      </h1>

      {/* Description */}
      <p className="text-[#667085] text-lg md:w-[80%] lg:w-[60%] mx-auto mt-4">
        We transform talented individuals into world-class tech stars and help them maximize
        their potential. If you’re looking for a structured, well-guided pathway to accelerate
        your tech journey, you’re in the right place.
      </p>

      {/* CTA Button */}
      
      <div  className="flex justify-center mt-6 ">
        <button className="bg-[#12B76A] text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold border border-black transition-transform duration-300 hover:scale-110 hover:shadow-[6px_6px_0px_#000]">
          Join The Waitlist
        </button>
      </div>

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

