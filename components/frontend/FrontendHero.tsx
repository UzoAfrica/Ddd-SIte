import Image from "next/image";
import Link from "next/link";
import React from "react";
import Frontend_One from '../../assets/front-one.svg'
import Frontend_Two from '../../assets/front-two.svg'
import Frontend_Three from '../../assets/front-three.svg'
import Frontend_Four from '../../assets/front-four.svg'
import Frontend_Hero from '../../assets/frontend_hero.svg'
import Frontend_Mobile from '../../assets/frontend-mobile.png'

function FrontendHero() {
  return (
    <div className="mx-auto container max-w-screen-xl md:px-8  py-5 lg:py-[50px] px-3">
      <div className="relative pt-24 pb-10">
        <h1 className="text-center text-3xl md:text-6xl font-[800] py-1">
          Become a Competent
        </h1>
        <h1 className="text-center text-3xl md:text-6xl font-[800] py-1">
          {" "}
          Front-end Web Developer{" "}
        </h1>
        <h1 className="text-center text-3xl md:text-6xl font-[800] py-1">
          in just 12 weeks
        </h1>
        <p className="text-center mt-6 text-[#667085] text-lg text-[500]">Expand your career and earning prospects and make the switch to tech today with us</p>
        <div className="flex justify-center mt-4">
        <Link
          className="py-3 text-sm md:text-base md:py-4 px-4 sm:px-12 rounded-lg bg-[#34A853] text-[#fff] font-[600]"
          href="/reg-frontend"
        >
          Register Now
        </Link>
      </div>
        <Image className="absolute md:left-[10%] -top-0 md:top-10"  src={Frontend_Two} alt="Image" />
        <Image className="absolute bottom-[20%] hidden md:inline  left-[7%]" src={Frontend_One} alt="Image" />
        <Image className="absolute md:right-[10%] hidden md:inline md:bottom-[23%]"  src={Frontend_Three} alt="Image" />
        <Image className="absolute right-[20%] top-2"  src={Frontend_Four} alt="Image" />
      </div>
      <div className="max-w-screen-lg mx-auto pb-10">
        <Image className="hidden md:block" src={Frontend_Hero} alt="Image" />
        <Image className="md:hidden" src={Frontend_Mobile} alt="Image" />

      </div>
    </div>
  );
}

export default FrontendHero;
