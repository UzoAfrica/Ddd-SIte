import React from "react";
import Button from "../common/Button";
import Image from "next/image";

function InstituteHero() {
  return (
    <div className="mx-auto max-w-screen-xl container md:px-6 px-3">
      <h1 className="text-center font-[800] mt-[144px] text-[48px]">
        Welcome to Nigeria’s #1
      </h1>
      <div className="flex justify-center">
        <h1 className="text-center  font-[800] rounded-[32px] px-4 text-white mx-auto bg-[#12B76A] text-[48px]">
          Software Engineering
        </h1>
      </div>
      <h1 className="text-center font-[800] text-[48px]">training institute</h1>
      <p className="text-[#667085] text-center w-[60%] mx-auto">
        We transform talented individuals into world-class software engineers
        and help them maximize  their potential.
      </p>
      <p className="text-black text-center font-bold w-[55%] mx-auto">
        If you are looking for a structured & well-guided pathway for
        accelerating your tech journey, you are in the right place
      </p>
      <div className="flex justify-center mt-8 mb-10">
        <Button btnLink="/register" text="Enroll in a Program"/>
      </div>
      <div className="flex justify-center">
        <Image src={"https://doubleg-cdn.decagon.institute/coverPicture.svg"} width={1000} height={1000} alt="" />
      </div>
    </div>
  );
}

export default InstituteHero;
