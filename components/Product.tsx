import React from "react";
import ProductPicture from '../assets/poductPic.svg'
import Image from "next/image";

function Product() {
  return (
    <div className="bg-image mt-[47px] py-[56px]">
      <div className="mx-auto max-w-screen-xl container md:px-6 px-3">
        <div className="flex-col xl:flex xl:flex-row gap-[62px] justify-between">
          <div className="flex-1">
            <h1 className="text-2xl md:text-[32px] font-[800] text-[#101828]  lg:w-[80%] leading-[120%]">
              We have produced over <span className="text-[#34A853]"> 1000</span> successful software engineers in just 5
              years.
            </h1>
            <p className="mt-6">
              Decagon was founded in 2018 by Chika Nwobi a tech industry
              investor and venture builder who has built and backed companies
              like Jobberman, Autocheck, Bamboo and Gokada. 
            </p>
            <p className="my-6">
              We help high-potential talent launch their careers in tech through
              our intensive training programs.
            </p>
            <p> 
              Decagon has over 1000 alumni working with top companies like JP
              Morgan, Interswitch, Microsoft, Flutterwave, etc. 
            </p>
            <p className="my-6">
             Join a vibrant legacy of success with our Alumni Community, where
              members offer mutual support to foster continuous growth and
              career advancement.
            </p>
          </div>
          <div className="">
            <Image src={"https://doubleg-cdn.decagon.institute/poductPic.svg"} className="w-[100%] mt-10 lg:mt-0 lg:w-full"  width={500} height={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
