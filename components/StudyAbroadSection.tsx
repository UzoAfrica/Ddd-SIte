import Image from "next/image";
import { useState } from "react";
import tech12 from "../assets/tech12.jpg"

export default function StudyAbroadSection() {
  const [selectedSchool, setSelectedSchool] = useState(0);
  const schools =
    [
      { name: "Harvard", flag: "/us-flag.png", img: "/../assets/tech11.jpg" },
      { name: "Oxford", flag: "/uk-flag.png", img: "/oxford.png" },
      { name: "Cape Town", flag: "/sa-flag.png", img: "/capetown.png" },
    ];

  return (
    <div id="whats-new" className="bg-gradient-to-r from-green-700 to-green-600 text-white p-10 flex flex-col lg:flex-row items-center justify-between rounded-xl shadow-lg max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="max-w-lg">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full flex items-center justify-center">
            🌱
          </div>
        </div>
        <h1 className="text-4xl font-extrabold mt-3 relative">
          What's new?
          <span className="absolute left-0 top-full text-green-900 opacity-30 text-4xl font-extrabold">
            What's new?
          </span>
        </h1>
        <p className="text-lg mt-4 opacity-90">
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
          width={300}
          height={300}
          className="relative rounded-xl shadow-lg z-10"
        />

        {/* Select School Dropdown */}
        <div className="absolute bottom-4 right-4 bg-white text-black rounded-xl shadow-lg p-3 w-60">
          <div className="flex items-center justify-between font-semibold">
            {/* Select School <ChevronDownIcon className="w-5 h-5 text-gray-500" /> */}
          </div>
          <div className="mt-2 space-y-2">
            {schools.map((school, index) => (
              <div
                key={index}
                className={`flex items-center p-2 rounded-lg cursor-pointer ${selectedSchool === index ? "bg-gray-200" : ""
                  }`}
                onClick={() => setSelectedSchool(index)}
              >
                <Image
                  src={school.img}
                  width={30}
                  height={30}
                  className="rounded-full"
                  alt={school.name}
                />
                <span className="ml-3 flex-1">{school.name}</span>
                {/* {selectedSchool === index && (
                //   <CheckIcon className="w-5 h-5 text-green-500" />
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
