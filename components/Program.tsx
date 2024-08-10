import React from "react";
import Young_Graduate from "../assets/p1.svg";
import Mid_Level from "../assets/p2.svg";
import Trainees from "../assets/p3.svg";
import Image from "next/image";
import Professional from "../assets/professional.svg";
import YoungGraduate from "../assets/young-graduate.svg";
function Program() {
  return (
    <div className="mx-auto container max-w-screen-xl py-5 lg:py-[100px] md:px-8 px-3">
      <h1 className="text-center mb-[53px] text-2xl md:text-[46px] font-[700]">
        Who is this program for?
      </h1>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="bg-[#2D7A73] text-[#FBFAF2] p-8 rounded-[32px]">
          <h1 className="text-2xl mb-3">Young graduates</h1>
          <p className="h-[200px]">
            Young graduates looking to become Data Analysts or add Data Analysis
            to their list of skillsets.
          </p>
         <div className="flex justify-center">
            <Image src={YoungGraduate} className="" alt="Young graduate" />
         </div>
        </div>
        <div className="bg-[#808000] text-[#FBFAF2] p-8 rounded-[32px]">
          <h1 className="text-2xl mb-3">Junior, Mid-Level, & Senior-Level </h1>
          <p>
            Professionals looking to become Data Analysts or add Data Analysis
            to their list of skillsets, to become more valuable in their field.
          </p>
          <div className="flex justify-center">
            <Image src={Mid_Level} className="mt-[63px]" alt="Young graduate" />
          </div>
        </div>
        <div className="bg-[#50C878] text-[#FBFAF2] p-8 rounded-[32px]">
          <h1 className="text-2xl mb-3">Trainees</h1>
          <p>
            People looking to acquire a highly demanded technical skill, to be
            valuable in the job market both locally and abroad
          </p>
          <div className="flex justify-center">
            <Image src={Trainees} className="mt-[63px]" alt="Young graduate" />
          </div>
        </div>
      </div>
      <div className="flex-col lg:flex lg:flex-row justify-center gap-5 mt-[38px]">
        <div className="bg-[#228B22] text-[#FBFAF2] p-8 w-full lg:w-[384px] rounded-[32px]">
          <h1 className="text-2xl mb-3">Entrepreneurs</h1>
          <p className="h-[200px]">
            Business owners looking to be able to analyze big data to understand
            their business better.
          </p>
          <div className="flex justify-center">
            <Image src={Young_Graduate} className="" alt="Young graduate" />
          </div>
        </div>
        <div className="bg-[#2E8B57] text-[#FBFAF2] w-full mt-6 lg:mt-0 lg:w-[384px] p-8 rounded-[32px]">
          <h1 className="text-2xl mb-3">Aspiring Professionals</h1>
          <p className="h-[200px]">
            Existing or Aspiring - Product Managers, Business Analysts, Business
            Intelligence Professionals, Finance Analysts, and other types of
            analysts, looking to expand their knowledge base and competencies
            for their work.
          </p>
          <div className="flex justify-center">
            <Image src={Professional} alt="Young graduate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
