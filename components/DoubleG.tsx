import Image from "next/image";
import React from "react";
import Heading from "./common/Heading";
import DoubleGLogo from "../assets/doubleg_black.svg";
import DecagonLogo from "../assets/decagonLogo.svg";

function DoubleG() {
  return (
    <div className="mx-auto max-w-screen-xl container md:px-6 px-3 mt-[89px]">
      <Heading title="Our Double-G Bundle Service" />
      <div className="flex justify-center items-center mt-6">
          <Image src={DoubleGLogo} alt="doubleg-logo" />
          <p className="font-[700] text-[40px] ml-1">by</p>
          <Image
            className="w-[100px] -ml-1 h-[30px] md:h-[38px] md:w-[177px]"
            src={DecagonLogo}
            alt="decagon logo"
          />
      </div>
      <p className=" text-center w-[75%] mx-auto font-[600]">
         With our Double-G (Double Gateway) bundle service, when you enroll for any of our Training Programs, you also get access to a complimentary (free) service of guidance and coaching on admission processing to study a master's degree program in any of our partner schools abroad.
      </p>

      <p className=" text-center w-[72%] my-7 text-[#5C6881] mx-auto font-[700]">
      You get access to free guidance & coaching on school applications, securing M-Power student loan, and student
      visa applications & interviews.
      </p>
      <div className="grid grid-cols-2 gap-14 max-w-[1100px] mx-auto">
        <div className="bg-[#F2F4F7] p-6 rounded-[32px]">
          <div className="bg-[#101828] text-white font-bold px-2.5 py-2 rounded-[32px] inline-block text-lg">
            Gateway 1
          </div>
          <div className="text-[#34A853] font-bold text-2xl my-6">
            Software Engineering Training
          </div>
          <div className="text-[#5C6881] mb-6 text-sm md:text-base">
            Become a competent software engineer through Decagon&apos;s elite
            Software Engineering training program.
          </div>
          <Image
            width={100}
            height={100}
            src={"https://doubleg-cdn.decagon.institute/mentor.svg"}
            alt="training"
            className="rounded-3xl w-full"
          />
        </div>
        <div className="bg-[#F2F4F7] p-6 rounded-[32px]">
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
    </div>
  );
}

export default DoubleG;
