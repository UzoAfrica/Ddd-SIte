import React from 'react'
import Image from "next/image";
import HeroImage from "../../assets/devops-hero-pic.svg";
import PointArrow from "../../assets/point-arrow.svg";
import Link from 'next/link';

interface IHero{
  pageType: "data-analysis" | "devops";
}

function Hero({pageType}:  IHero) {
  return (
    <div className="mx-auto max-w-screen-xl md:my-[100px] container md:px-6 px-3">
      {pageType  === "data-analysis" && (
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] justify-between">
        <div>
          {" "}
          <h1 className="font-[900] text-[26px] lg:text-5xl mt-4">
            Learn <span className="text-[#34A853]">Data Analysis</span> with
            Python & SQL in 10 Weeks.
          </h1>
          <p className="text-center md:text-left text-sm md:text-base  text-[#667085] lg:w-[83%] mt-4">
            Data Analysis is in the Top 5 most in-demand tech skills right now.
            We will help you gain proficiency in 10 weeks so you can gain a
            competitive edge in the industry.
          </p>
          <div className="mt-5 lg:mt-10 flex gap-6 items-center">
            <Image className='-ml-14' src={PointArrow} alt="Point arrow" />
            <Link href="/register" className="py-3 md:py-4 text-center text-sm md:text-base w-[200px] rounded-lg bg-[#34A853] text-[#fff] font-[600]">Apply Now</Link>
          </div>
        </div>
        <Image className='mt-[51px] w-full lg:mt-0' src={HeroImage} alt="hero__image" />
      </div>
      )}
      {pageType  === "devops" && (
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] justify-between">
        <div>
          {" "}
          <h1 className="font-[900] text-[26px] leading-[126%] lg:text-[48px] w-[93%] mt-6 text-center lg:text-left">
          Chart Your Career in Tech as a <span className="text-[#34A853]">DevOps Engineer</span> in 12 weeks
          </h1>
          <p className="text-center md:text-left text-sm md:text-base  text-[#667085] lg:w-[83%] mt-3">
          DevOps engineering is one of the fastest-growing and highest-paying fields in tech. Apply now to learn in-demand skills, gain hands-on experience and boost your earning potential with us!
          </p>
          <div className="mt-4 lg:mt-10 flex gap-6 items-center">
            <Image className='-ml-14' src={PointArrow} alt="Point arrow" />
            <Link href="/reg-devop" className="py-3 md:py-4 text-center text-sm md:text-base w-[200px] rounded-lg bg-[#34A853] text-[#fff] font-[600]">Apply Now</Link>
          </div>
        </div>
        <Image className='mt-[51px] w-full lg:mt-0' src={HeroImage} alt="hero__image" />
      </div>
      )}
    </div>
  );
}

export default Hero;
