import React from "react";
import Image from "next/image";
import tech8 from "../assets/tech8.jpg"
import tech9 from "../assets/tech9.jpg"
import tech10 from "../assets/tech10.jpg"
import tech11 from "../assets/tech11.jpg"
import legacyPic from "../assets/legacyPic.png"
import legacyPic2 from "../assets/legacyPic2.png"



function Product() {
  return (
    <div id="our-legacy" className="bg-gradient-to-b from-white to-[#EAF8E6] py-16">
      <div className="lg:flex lg:flex-row justify-between lg:gap-30  max-w-screen-xl px-6 lg:mx-auto md:mx-3">
        <div className="lg:w-[50%]">
          <h2 className="font-fuzzybubbles text-lg font-semibold text-gray-700 mb-4">Our Legacy</h2>
          <h1 className="font-neue text-3xl md:text-4xl font-extrabold lg:w-[70%] text-gray-900 mt-2">
            Over <span className="text-green-600">1500</span> Successful Engineers in 5 years
          </h1>
          <p className="font-helvetica mt-4 text-[18px] lg:w-[85%] text-gray-600 leading-relaxed max-w-2xl">
            We have produced over 1500 successful software engineers in just 5 years. Achieved over 80% talent placement after graduation at top companies like flutterwave, Carbon, Terragon, Microsoft, Sterling bank, Vertex, Interswitch among others. The Decagon mission is beyond to producing world-class software engineers who power the global tech industry; It is about quipping Nigeria’s brightest talents with the skills and opportunities to thrive in the global tech ecosystem. At Decagon, we are committed to transforming the tech landscape in Nigeria and beyond.
          </p>
        </div>
        <Image
          src={legacyPic}
          alt="Successful engineer"
          className="mt-10 lg:mt-0"
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 mt-10">
        {/* Two-Column Layout: Header & Description */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> */}
        {/* Header Section */}

        {/* Right Section (Images) */}
        {/* <div className="grid grid-cols-2 gap-4">
            <div className="relative">
          
            </div>
          </div> */}

        {/* </div> */}

        {/* Two-Column Layout: Header & Description */}
        <div className="lg:flex lg:flex-row justify-between lg:gap-30 lg:mx-auto">
          <Image
            src={legacyPic2}
            alt="Alumni community"
          />
          {/* Image & Description Section */}
          <div className="lg:w-[40%] mt-20">
            {/* Left Section (Text) */}
            <div className="lg:w-[50]">
              <h2 className="font-neue text-2xl md:text-3xl font-extrabold text-gray-900">
                Empowering Nigeria’s brightest minds
              </h2>
              <p className="font-helvetica mt-4 text-gray-600 leading-relaxed">
                We equip talented individuals with the skills and mentorship needed to thrive in today’s competitive tech industry. Decagon was founded in 2018 by Chika Nwobi, a tech industry investor and venture builder behind companies like Jobberman, Autocheck, Bamboo, and Gokada. Our mission is to empower you to become a leading tech professional. Our team, comprising experienced instructors, industry experts, and dedicated career mentors passionate about creating a community of innovation and excellence. 
                <b className="block mt-4">Join a vibrant legacy of success with our Alumni Community, where members offer mutual support to foster continuous growth and career advancement.</b>
              </p>
              <button className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
                Join The Movement
              </button>
            </div>
          </div>
        </div>


      {/* Bottom Section (More Images) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Image
                src={tech8}
                alt="Community event"
                className="w-[300px] h-[400px] rounded-lg shadow-md object-cover"
              />
              <Image
                src={tech9}
                alt="Tech conference"
                className="w-[300px] h-[400px] rounded-lg shadow-md object-cover"
              />
              <Image
                src={tech10}
                alt="Mentorship program"
                className="w-[300px] h-[400px] rounded-lg shadow-md object-cover"
              />
              <Image
                src={tech11}
                alt="Training session"
                className="w-[150px] h-[200px] rounded-lg shadow-md object-cover"
              />
            </div>


      </div>
    </div>
  );
}

export default Product;
