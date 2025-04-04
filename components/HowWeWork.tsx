import React from "react";

function HowWeWork() {
  return (
    
    <div id="how-we-work" className="bg-gradient-to-b from-green-800 to-green-500 py-16 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg font-medium">How we work</h4>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Be equipped for the future
        </h2>
        <p className="mt-4 text-gray-200">
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
                <p className="text-sm font-medium">Olukunle Isaac</p>
                <p className="text-xs text-gray-500">Assigned mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-10">
        <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-100">
          Join The Waitlist
        </button>
      </div>
    </div>
  );
}

export default HowWeWork;
