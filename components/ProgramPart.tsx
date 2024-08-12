import Image from "next/image";
import React from "react";

function ProgramPart({ img, firstCourse, title, subtitle}: any) {
  return (
    <div className="bg-white px-10 pt-12 pb-[68px] rounded-[22px] border-[1px] custom-shadow border-[rgba(0, 0, 0, 0.08)]">
      <Image src={img} alt="part one" />
      <h1 className="mt-8 text-2xl font-[600]">{title}</h1>
      <p className="text-[#828282] text-sm">{subtitle}</p>
      <div className="mt-3">
        {firstCourse.map((course: any) => {
          return (
            <div className="flex items-center gap-2">
              <p className="h-1.5 w-1.5 bg-black rounded-lg"></p>
              <p className="">{course}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgramPart;
