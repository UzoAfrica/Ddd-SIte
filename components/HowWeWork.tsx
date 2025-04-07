import React, { useState } from "react";
import { motion } from "framer-motion";

function HowWeWork() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div id="how-we-work" className="bg-gradient-to-b from-green-800 to-green-500 py-16 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h4 className="font-fuzzybubbles text-lg font-medium">How we work</h4>
        <h2 className="font-neue text-3xl md:text-4xl font-extrabold mt-2">
          Be equipped for the future
        </h2>
        <p className="font-helvetica mt-4 text-gray-200">
          At Decagon, our training program is designed to equip you with
          both fundamental and advanced skills to excel in the tech industry.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Card 1 - Structured Curriculum */}
        <div className="bg-white rounded-xl p-6 shadow-lg text-gray-800">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>Step 01</span>
          </div>
          <h3 className="text-xl font-bold mt-2">Structured Curriculum</h3>
          <p className="text-sm mt-2">
            A step-by-step learning path covering core programming to advanced software engineering practices.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center justify-between border p-2 rounded-md">
              How to get started <span className="text-green-600">✔</span>
            </li>
            <li className="flex items-center justify-between border p-2 rounded-md">
              Introduction to AI
            </li>
            <li className="flex items-center justify-between border p-2 rounded-md">
              Prompt learning
            </li>
            <li className="flex items-center justify-between border p-2 rounded-md">
              Assessment
            </li>
          </ul>
        </div>

        {/* Card 2 - Hands-on Projects */}
        <div className="bg-white rounded-xl p-6 shadow-lg text-gray-800">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>Step 02</span>
          </div>
          <h3 className="text-xl font-bold mt-2">Hands-on Projects</h3>
          <p className="text-sm mt-2">
            Real-world assignments that build your portfolio and practical experience.
          </p>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Wunmi Sodimu</p>
                <p className="text-xs text-gray-500">wunmisodimu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Mentorship & Support */}
        <div className="bg-white rounded-xl p-6 shadow-lg text-gray-800">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>Step 03</span>
          </div>
          <h3 className="text-xl font-bold mt-2">Mentorship & Support</h3>
          <p className="text-sm mt-2">
            Access to experienced tutors, industry mentors, and a robust alumni network.
          </p>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Ibezim Uzoma</p>
                <p className="text-xs text-gray-500">Assigned mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Button*/}
             <button
                onClick={() => setIsOpen(true)}
                id = "waitlist"
                className="mt-8 px-6 py-2 text-black font-medium rounded-full border-2 border-black bg-white shadow-[5px_5px_0px_#000] transition-transform duration-300 hover:scale-110 hover:shadow-[6px_6px_0px_#000]"
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
      


    // </div>
  );
}

export default HowWeWork;
