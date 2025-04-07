import Image from "next/image";
import { useState } from "react";
import tech12 from "../assets/tech12.jpg"

export default function StudyAbroadSection() {
  return (
    <div id="whats-new" className="bg-gradient-to-r from-green-700 to-green-600 text-white p-10 flex flex-col lg:flex-row items-center justify-between rounded-xl shadow-lg max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="max-w-lg">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full flex items-center justify-center">
            🌱
          </div>
        </div>
        <h1 className="font-neue text-4xl font-extrabold mt-3 relative">
          What's new?
        </h1>
        <p className="font-helvetica text-lg mt-4 opacity-90">
          Decagon has partnered with its newly launched subsidiary, Zeem
          Global, to provide study-abroad opportunities for our alumni. Through
          this initiative, Decagon graduates interested in pursuing a master’s
          degree in tech can explore options in the U.S., U.K., and Canada.
        </p>
        <a href="https://www.zeem.co" target="_blank" rel="noopener noreferrer">
          <button className="mt-5 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg border border-black hover:bg-gray-200 transition">
            Learn More On Zeem
          </button>
        </a>
      </div>

      {/* Right Content */}
      <div className="relative mt-6 lg:mt-0">
        {/* Image with Yellow Border */}
        <div className="absolute -top-3 -left-3 bg-yellow-500 w-full h-full rounded-xl z-0"></div>
        <Image
          src={tech12}
          alt="Graduate"
          className="relative w-[260px] h-[300px] rounded-xl shadow-lg z-10"
        />
      </div>
    </div>
  );
}
