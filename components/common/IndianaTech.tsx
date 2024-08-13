import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { IndianaCourses, IndianaData } from "@/data";
import Heading from "./Heading";

interface IPartner {
    pageType: "main" | "fullstack";
  }

function IndianaTech({pageType}: IPartner) {
  return (
    <div className="mx-auto max-w-screen-xl container md:px-6 px-3">
        {pageType === "main" && (
            <>
                <Heading title="Our Partner Schools in America" />
            </>
        )}
        {pageType === "fullstack" && (
           <h1 className="text-center text-2xl md:text-5xl font-[600]">Our Partner <span className="text-[#34A853]">Schools</span> in America</h1>
        )}
        <div className="flex mt-10 lg:mt-20 md:px-4 flex-col lg:grid grid-cols-[55%_44%] gap-[40px] justify-center">
        <div className="lg:pr-16">
            <h1 className="font-bold text-2xl lg:text-[30px] leading-[140%] lg:pr-3 mb-6 lg:mb-4">
                {/* {IndianaTitle[0]} */}   Indiana Tech
            </h1>
            <div>
                <p className="mb-6 tracking-wide">{IndianaData[0]}</p>
                <p className="mb-6 tracking-wide">
                    {IndianaData[1]}   
                </p>
            </div>
            <p className="italic font-bold">
                {/* {IndianaTitle[1]} */}  Available courses for Tech Masters include:
            </p>
            <div className="mb-6">
                {IndianaCourses.map((course) => (
                <div key={course.id} className="flex gap-4 items-center bg-[#f9fafb] py-2 my-2 lg:w-[70%] border-[1px] border-[#d0d5dd]">
                    <div className="text-[#94a3b8] ml-3"><FaCheck/></div>
                    <span>{course.title}</span>
                </div>
                ))}
            </div>
            <p className="tracking-wide">
                {IndianaData[2]} <br /> <br />
                {IndianaData[3]} <br /> <br />
                {IndianaData[4]}
            </p>
            </div>
            <div>
                <Image
                    width={100}
                    height={100}
                    src="https://doubleg-cdn.decagon.institute/indiana_school_ity7u1.svg"
                    className="h-[100%] w-[100%] mt-5"
                    alt="indiana picture"
                />
            </div>
      </div>
    </div>
  )
}

export default IndianaTech
