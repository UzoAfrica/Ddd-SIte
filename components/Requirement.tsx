import { PROGRAMS } from "@/data";
import Image from "next/image";
import React from "react";

function Requirement() {
  return (
    <div className="mx-auto container max-w-screen-xl py-8 lg:py-[100px] lg:px-8 px-3">
      <h1 className="text-center mb-[53px] text-2xl md:text-[40px] lg:w-[50%] lg:leading-[54px] mx-auto font-[700]">
         What is needed to participate in the program?
      </h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {PROGRAMS.map((program) => {
            return (
                <div key={program.id} className="p-4 lg:p-8 border-[1px] border-[rgba(0, 0, 0, 0.08)] rounded-[18px]">
                    <Image className="w-full" src={program.img} alt={program.title} />
                    <h1 className="text-[#0C0E0F] text-xl font-[700] mt-6">{program.title}</h1>
                    <p>{program.content}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default Requirement;
