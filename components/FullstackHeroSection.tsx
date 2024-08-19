import Link from "next/link";
import React from "react";

function FullstackHeroSection() {
  return (
    <div className="mx-auto max-w-screen-xl container md:px-6 px-3 mt-14 md:mt-[89px]">
      <h1 className="text-center font-[800] mt-2 text-3xl md:text-5xl">
        Become a High Earning
      </h1>
      <h1 className="text-center font-[800] mt-2 text-3xl md:text-5xl">
        Full Stack Engineer
      </h1>
      <h1 className="text-center font-[800] mt-2 text-3xl md:text-5xl">in 18 weeks +</h1>
      <p className="text-center text-base italic md:not-italic md:text-4xl text-[#101828] mt-2 font-[600]">
        Get a Tech Master's in the USA by next year
      </p>
      <p className="text-center text-lg text-[#667085] w-[95%] md:w-[83%] mx-auto mt-7 font-[500]">
        Looking to begin a lucrative career in tech? Full Stack Engineering is
        your door to a world of opportunities. In just 18 weeks, gain the
        expertise to build, deploy, and manage complex applications, positioning
        yourself as a top contender in the tech industry.
      </p>
      <div className="flex justify-center mt-4">
        <Link
          className="py-3 text-sm md:text-base md:py-4 px-8 sm:px-12 rounded-lg bg-[#34A853] text-[#fff] font-[600]"
          href="/register"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}

export default FullstackHeroSection;
