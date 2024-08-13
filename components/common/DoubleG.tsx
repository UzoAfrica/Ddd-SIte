import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import DoubleGLogo from "../../assets/doubleg_black.svg";
import DecagonLogo from "../../assets/decagonLogo.svg";
// import Button from "./Button";

function DoubleG() {
  return (
    <div className="mx-auto max-w-screen-xl container md:px-6 px-3 mt-[89px]">
      <Heading title="Our Double-G Bundle Service" />
      <div className="flex justify-center items-center mt-6">
          <Image src={DoubleGLogo} alt="doubleg-logo" />
          <p className="font-[700] text-[28px] md:text-[32px] mr-2 md:mr-1 ml-1">by</p>
          <Image
            className=""
            src={DecagonLogo}
            alt="decagon logo"
          />
      </div>
      <p className=" text-center md:w-[75%] mt-3 mx-auto font-[600]">
         With our Double-G (Double Gateway) bundle service, when you enroll for any of our Training Programs, you also get access to a complimentary (free) service of guidance and coaching on admission processing to study a master's degree program in any of our partner schools abroad.
      </p>

      <p className=" text-center md:w-[72%] my-7 text-[#5C6881] mx-auto font-[700]">
      You get access to free guidance & coaching on school applications, securing M-Power student loan, and student
      visa applications & interviews.
      </p>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 max-w-[1100px] mx-auto">
        <div className="bg-[#F2F4F7] px-3 pt-5 md:px-6 md:pt-6 rounded-[32px]">
          <div className="bg-[#101828] text-white font-bold px-2.5 py-2 rounded-[32px] inline-block text-lg">
            Gateway 1
          </div>
          <div className="text-[#34A853] font-bold text-2xl my-6">
            Intensive Tech Training
          </div>
          <div className="text-[#5C6881] mb-6 text-sm md:text-base">
            Become a competent software engineer through Decagon&apos;s elite
            Software Engineering training program.
          </div>
          <Image
            width={100}
            height={100}
            src="https://doubleg-cdn.decagon.institute/mentor.svg"
            alt="training"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="bg-[#F2F4F7] px-3 pt-5 md:px-6 md:pt-6 rounded-[32px]">
          <div className="bg-[#34A853] text-white font-bold px-2.5 py-2 rounded-[32px] inline-block text-lg">
            Gateway 2
          </div>
          <div className="font-bold text-2xl my-6">Study Abroad</div>
          <div className="text-[#5C6881] mb-6 text-sm md:text-base">
            Receive free guidance & coaching on tech-master&apos;s applications
            to our partner American universities, M-Power education loan
            applications, and American student visa applications & interviews,
            to enable you resume for your Master&apos;s degree program in
            America by next year (2025).
          </div>
          <Image
            width={100}
            height={100}
            src="https://doubleg-cdn.decagon.institute/abroad_wb0aeb.svg"
            alt="abroad"
            className="rounded-3xl w-full"
          />
        </div>
      </div>
        <div className="flex justify-center mt-8">
            <a href="https://doubleg.decagon.institute/" className="py-3 text-sm md:text-base md:py-4 px-10 sm:px-14 rounded-lg bg-[#34A853] text-[#fff] font-[600]">Learn More</a>
        </div>
    </div>
  );
}

export default DoubleG;
