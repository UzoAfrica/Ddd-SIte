import React from "react";
import Young_Graduate from "../assets/p1.svg";
import Mid_Level from "../assets/p2.svg";
import Trainees from "../assets/p3.svg";
import Image from "next/image";
import Professional from "../assets/professional.svg";
import YoungGraduate from "../assets/young-graduate.svg";

interface IProgram {
  pageType: "devops" | "fullstack" | "frontend";
}
function Program({ pageType }: IProgram) {
  return (
    <div className="mx-auto container max-w-screen-xl py-5 lg:py-[100px] md:px-8 px-3">
      <h1 className="text-center mb-[53px] text-2xl md:text-[46px] font-[700]">
        Who is this program for?
      </h1>
      {pageType === "fullstack" && (
        <>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-[#2D7A73] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Young graduates</h1>
              <p className="h-[200px]">
                Young graduates looking to become Software Engineers, or add
                these skills to their list of competencies.
              </p>
              <div className="flex justify-center">
                <Image src={YoungGraduate} className="" alt="Young graduate" />
              </div>
            </div>
            <div className="bg-[#808000] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">
                Junior, Mid-Level, & Senior-Level Professionals{" "}
              </h1>
              <p>
                Junior, Mid-Level, and Senior-Level professionals looking to
                transition into Full Stack Engineering roles, or enhance their
                existing skillsets to become more valuable in thier field.
              </p>
              <div className="flex justify-center">
                <Image
                  src={Mid_Level}
                  className="mt-[63px]"
                  alt="Young graduate"
                />
              </div>
            </div>
            <div className="bg-[#50C878] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Trainees</h1>
              <p>
                Individuals aiming to acquire higly demmanded technical skills,
                to stand out in the job market both locally and internationally.
              </p>
              <div className="flex justify-center">
                <Image
                  src={Trainees}
                  className="mt-[63px]"
                  alt="Young graduate"
                />
              </div>
            </div>
          </div>
          <div className="flex-col lg:flex lg:flex-row justify-center gap-5 mt-[38px]">
            <div className="bg-[#228B22] text-[#FBFAF2] p-8 w-full lg:w-[384px] rounded-[32px]">
              <h1 className="text-2xl mb-3">Entrepreneurs</h1>
              <p className="h-[200px]">
                Business owners looking to develop and manage their
                applications.
              </p>
              <div className="flex justify-center">
                <Image src={Young_Graduate} className="" alt="Young graduate" />
              </div>
            </div>
            <div className="bg-[#2E8B57] text-[#FBFAF2] w-full mt-6 lg:mt-0 lg:w-[384px] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Aspiring Professionals</h1>
              <p className="h-[200px]">
                Existing or Aspiring Product Managers, Software Developers,
                UX/UI Designers, System Architects, and other tech professionals
                seeking to broaden their expertise in Software Engineering.
              </p>
              <div className="flex justify-center">
                <Image src={Professional} alt="Young graduate" />
              </div>
            </div>
          </div>
        </>
      )}
      {pageType === "frontend" && (
        <>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-[#2D7A73] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Young graduates</h1>
              <p className="h-[200px]">
                Young graduates looking to become Frontend-End Web Developers, or and these skills to their list of competencies.
              </p>
              <div className="flex justify-center">
                <Image src={YoungGraduate} className="" alt="Young graduate" />
              </div>
            </div>
            <div className="bg-[#808000] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">
                Junior, Mid-Level, & Senior-Level Professionals{" "}
              </h1>
              <p>
                Junior, Mid-Level, and Senior-Level professionals looking to transition into Fronten-End Development roles, or enhance their existing skillsets to become more valuable in thier field.
              </p>
              <div className="flex justify-center">
                <Image
                  src={Mid_Level}
                  className="mt-[63px]"
                  alt="Young graduate"
                />
              </div>
            </div>
            <div className="bg-[#50C878] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Trainees</h1>
              <p>
               Individuals aiming to acquire higly demmanded technical skills, to stand out in the job market both locally and internationally.
              </p>
              <div className="flex justify-center">
                <Image
                  src={Trainees}
                  className="mt-[63px]"
                  alt="Young graduate"
                />
              </div>
            </div>
          </div>
          <div className="flex-col lg:flex lg:flex-row justify-center gap-5 mt-[38px]">
            <div className="bg-[#228B22] text-[#FBFAF2] p-8 w-full lg:w-[384px] rounded-[32px]">
              <h1 className="text-2xl mb-3">Entrepreneurs</h1>
              <p className="h-[200px]">
                Business owners looking to develop and manage their own applications.
              </p>
              <div className="flex justify-center">
                <Image src={Young_Graduate} className="" alt="Young graduate" />
              </div>
            </div>
            <div className="bg-[#2E8B57] text-[#FBFAF2] w-full mt-6 lg:mt-0 lg:w-[384px] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Aspiring Professionals</h1>
              <p className="h-[200px]">
                Existing or Aspiring - Product Managers, Software Developers, UX/UI Designers, System Architects, and other tech professionals seeking to broaden their expertise in Frontend-End Web Development.
              </p>
              <div className="flex justify-center">
                <Image src={Professional} alt="Young graduate" />
              </div>
            </div>
          </div>
        </>
      )}
      {pageType === "devops" && (
        <>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-[#2D7A73] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Young graduates</h1>
              <p className="h-[200px]">
                Young graduates looking to become DevOps Engineers or add these skills to their list of competencies.
              </p>
              <div className="flex justify-center">
                <Image src={YoungGraduate} className="" alt="Young graduate" />
              </div>
            </div>
            <div className="bg-[#808000] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">
                Junior, Mid-Level, & Senior-Level Professionals{" "}
              </h1>
              <p>
              Junior, Mid-Level, and Senior-Level professionals looking to
              transition into DevOps roles or enhance their existing skillsets to become more valuable in their field.
              </p>
              <div className="flex justify-center">
                <Image
                  src={Mid_Level}
                  className="mt-[63px]"
                  alt="Young graduate"
                />
              </div>
            </div>
            <div className="bg-[#50C878] text-[#FBFAF2] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Trainees</h1>
              <p>
              Individuals aiming to acquire higly demmanded technical skills,
              to stand out in the job market both locally and internationally.
              </p>
              <div className="flex justify-center">
                <Image
                  src={Trainees}
                  className="mt-[63px]"
                  alt="Young graduate"
                />
              </div>
            </div>
          </div>
          <div className="flex-col lg:flex lg:flex-row justify-center gap-5 mt-[38px]">
            <div className="bg-[#228B22] text-[#FBFAF2] p-8 w-full lg:w-[384px] rounded-[32px]">
              <h1 className="text-2xl mb-3">Entrepreneurs</h1>
              <p className="h-[200px]">
              Business owners looking to streamline and manage their software development and depolyment processes.
              </p>
              <div className="flex justify-center">
                <Image src={Young_Graduate} className="" alt="Young graduate" />
              </div>
            </div>
            <div className="bg-[#2E8B57] text-[#FBFAF2] w-full mt-6 lg:mt-0 lg:w-[384px] p-8 rounded-[32px]">
              <h1 className="text-2xl mb-3">Aspiring Professionals</h1>
              <p className="h-[200px]">
                Existing or Aspiring Product Managers, Software Developers, System Administrators, Network Engineers, and other tech professionals seeking to broaden their expertise in the Software Development and Depolyment process using DevOps.
              </p>
              <div className="flex justify-center">
                <Image src={Professional} alt="Young graduate" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Program;
