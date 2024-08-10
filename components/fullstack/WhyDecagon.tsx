import React from "react";
import { COURSES } from "../../data";
import Image from "next/image";

function  WhyDecagon() {
  return (
    <div className="bg-image">
      <div className="mx-auto container max-w-screen-xl py-8 md:py-[100px] md:px-8 px-3">
        <div>
          <h1 className="text-center mb-[53px] text-2xl md:text-[46px] font-[700]">
            Why choose <span className="text-[#34A853]">Decagon?</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {COURSES.slice(0, 3).map((course) => {
              return (
                <div
                  className={`w-full xl:w-[400px] p-8 rounded-[18px] bg-[#fff]`}
                  key={course.id}
                >
                  <Image src={course.icon} alt={course.title} />
                  <h1 className="text-[#0C0E0F] text-xl font-[700] mt-6">{course.title}</h1>
                  <p className="mt-3 text-[#0C0E0F]">{course.content}</p>
                </div>
              );
            })}
          </div>
          <div className="flex-col lg:flex md:flex-row justify-center gap-4 mt-6">
            {COURSES.slice(3, 5).map((course) => {
              return (
                <div
                  className={`w-full lg:w-[400px] p-8 my-5 lg:my-0 rounded-[18px] bg-[#fff]`}
                  key={course.id}
                >
                  <Image src={course.icon} alt={course.title} />
                  <h1  className="text-[#0C0E0F] text-xl font-[700] mt-6">{course.title}</h1>
                  <p className="mt-3 text-[#0C0E0F]">{course.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyDecagon;
