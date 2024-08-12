
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { NyCourses, NyData } from "@/data";

function NorthCarolinaSchool() {
  return (
    <div className="mx-auto max-w-screen-xl lg:my-[100px] container md:px-6 px-3">
      <div className="flex flex-col-reverse md:px-4 lg:flex lg:flex-row gap-20 justify-center">
      <div className="lg:w-[45%]">
          <Image
            width={100}
            height={100}
            src="https://doubleg-cdn.decagon.institute/uncw_school_ng0ug1.svg"
            className="h-[696px] lg:h-[100%] w-[100%] rounded-2xl object-cover"
            alt="uncw school"
          />
        </div>
        <div className="lg:pr-16 lg:w-[55%]">
          <h1 className="font-bold mt-10 text-2xl lg:text-[32px] leading-[140%] lg:pr-3 mb-6 lg:mb-4">
            {" "}
            {/* {NyTitle[0]} */} University of North Carolina
          </h1>
          <div className="">
            <p className="mb-6 tracking-wide">{NyData[0]}</p>
            <p className="mb-6 tracking-wide">{NyData[1]}</p>
            <p className="italic font-[600] text-[#002868]"> 
            {/* {NyTitle[1]} */} M.Sc. programs available to Tech Masters include:
            </p>
          <div className="mb-6">
            {NyCourses.map((course) => (
              <div key={course.id} className="flex gap-4 items-center bg-[#f9fafb] py-2 my-2 lg:w-[75%] xl:w-full border-[1px] border-[#d0d5dd]">
                <div className="text-[#94a3b8] ml-3"><FaCheck/></div>
                <span>{course.title}</span>
              </div>
            ))}
          </div>
            <p className="mb-6 tracking-wide"> {NyData[2]}</p>
            <p className="mb-6 tracking-wide">{NyData[3]}</p>
          </div>
         
          <p className="tracking-wide">{NyData[4]}</p>
        </div>
        
      </div>
    </div>
  )
}

export default NorthCarolinaSchool