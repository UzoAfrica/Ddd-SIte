import React from "react";
import Image from "next/image";
import tech4 from "../assets/tech4.jpg"
import tech5 from "../assets/tech5.jpg"
import tech6 from "../assets/tech6.jpg"
import tech7 from "../assets/tech7.jpg"
import tech8 from "../assets/tech8.jpg"
import tech9 from "../assets/tech9.jpg"
import tech10 from "../assets/tech10.jpg"
import tech11 from "../assets/tech11.jpg"


function Product() {
  return (
    <div className="bg-gradient-to-b from-white to-[#EAF8E6] py-16">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12">
        {/* Two-Column Layout: Header & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-700">Our Legacy</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Over <span className="text-green-600">1500</span> Successful Engineers in 5 years
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We have produced over 1500 successful software engineers in just 5 years. 
            Our community has built careers at leading global tech companies. 
            Through our rigorous training programs, we empower Nigeria's brightest minds 
            and transform the tech landscape.
          </p>
        </div>
             {/* Right Section (Images) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Image
                src={tech4}
                alt="Successful engineer"
                width={300}
                height={200}
                className="left-[40px] rounded-lg shadow-lg"
              />
              <Image
                src={tech5}
                alt="Tech training"
                width={150}
                height={80}
                className="absolute bottom-[-30px] left-[-40px] rounded-lg shadow-lg"
              />
            </div>
          </div>
       
          </div>

         {/* Two-Column Layout: Header & Description */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
              <Image
                 src={tech6}
                alt="Alumni community"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <Image
                 src={tech7}
                alt="Tech workshop"
                width={150}
                height={80}
                className="absolute bottom-[-30px] right-[180px] rounded-lg shadow-lg"
              />
            </div>
             {/* Image & Description Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section (Text) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Empowering Nigeria’s brightest minds
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are committed to equipping the next generation of leaders with the skills 
              and networks they need to thrive in today’s competitive tech industry. 
              Our alumni work at top firms, continuously driving innovation and excellence.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
              Join The Movement
            </button>
          </div>
          </div>
            </div>

        {/* Bottom Section (More Images) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
             src={tech8}
            alt="Community event"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
          <Image
             src={tech9}
            alt="Tech conference"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
          <Image
             src={tech10}
            alt="Mentorship program"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
          <Image
             src={tech11}
            alt="Training session"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
