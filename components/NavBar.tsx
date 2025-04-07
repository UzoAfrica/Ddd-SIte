import React, { useState } from "react";
import DecagonLogo from "../assets/decagonLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import JoinWaitlist from "@/components/JoinWaitlist";




function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-[#D0D5DD] fixed w-full z-50 top-0 bg-white">
      <div className="mx-auto max-w-screen-xl container md:px-6 px-3 my-[18px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-[100px] h-[30px] md:h-[38px] md:w-[177px]"
              src={DecagonLogo}
              alt="decagon logo"
            />
          </Link>

          <div className="flex items-center gap-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 text-black text-[16px]">
            <Link href="#our-legacy" className="text-black font-medium transition-all duration-300 hover:text-green-600">Our Legacy</Link>
            <Link href="#how-we-work" className="text-black font-medium transition-all duration-300 hover:text-green-600">How We Work</Link>
            <Link href="#alumni" className="text-black font-medium transition-all duration-300 hover:text-green-600">Alumni</Link>
            <Link href="#whats-new" className="text-black font-medium transition-all duration-300 hover:text-green-600">What’s New</Link>
          </div>

          {/* Join Waitlist Button */}
          {/* <div
                  onClick={() => setIsOpen(true)}

            className="relative px-6 py-2 text-black font-medium rounded-full border-2 border-black 
                        bg-white shadow-[5px_5px_0px_#000] transition-transform duration-300 
                        hover:scale-110 hover:shadow-[6px_6px_0px_#000]"
          >
            Join Waitlist
          </div> */}
           {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        id = "waitlist"
        className="px-6 py-2 text-black font-medium rounded-full border-2 border-black bg-white shadow-[5px_5px_0px_#000] transition-transform duration-300 hover:scale-110 hover:shadow-[6px_6px_0px_#000]"
      >
        Join The Waitlist
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <motion.div
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white rounded-lg shadow-xl w-[90%] max-w-lg p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-black">Join the waitlist</h2>
            <p className="text-gray-500 text-sm">
              You’ll be the first to know once there is an update on the next cohort.
            </p>

            <hr className="my-4" />

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-black font-medium">First name</label>
                  <input
                    type="text"
                    placeholder="E.g Tope"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none"
                  />
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-black font-medium">Last name</label>
                  <input
                    type="text"
                    placeholder="E.g Dada"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-black font-medium">E-mail</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-black font-medium">Phone number</label>
                  <input
                    type="tel"
                    placeholder="+234"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#12B76A] text-white py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
