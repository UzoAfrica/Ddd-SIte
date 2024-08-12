import React from "react";
import FacilityImage from "../../assets/f1.png";
import FacilityImage2 from "../../assets/f2.png";
import FacilityImage3 from "../../assets/f3.png";
import FacilityImage4 from "../../assets/f4.png";
import Image from "next/image";

function Facility() {
  return (
    <div className="mx-auto max-w-screen-xl lg:my-[50px] container md:px-6 px-3">
      <h1 className="text-center text-2xl lg:text-[40px] font-[700]">
        Explore Our State-of-the-Art Facility
      </h1>
      <p className="text-[#475467] text-center lg:w-[87%] mt-6 mx-auto">
        Need a structured environment for learning? Our Lagos facility offers a
        physical space for immersive hybrid learning with access to internet,
        reliable power supply, and face-to-face collaboration.
      </p>
      <p className="text-[#475467] text-center mt-6">
        Visit us at Orchid Road, Lekki peninsula, Lagos 106104,Lagos (Opposite
        Orchid hotel)
      </p>
      <div className="grid md:grid-cols-[40%_60%] gap-6 mt-6">
        <div>
          <Image
            className="w-[100%]"
            src={FacilityImage}
            alt="Facility Space"
          />
        </div>
        <div className="flex flex-col gap-[42px]"> 
          <div>
            <Image
              className="w-[100%]"
              src={FacilityImage2}
              alt="Facility Space"
            />
          </div>
          <div className="flex-col md:flex md:flex-row gap-6">
            <Image
              className="w-[100%]"
              src={FacilityImage3}
              alt="Facility Space"
            />
            <div className="mt-4 w-full md:mt-0">
            <Image
              className="w-[100%]"
              src={FacilityImage4}
              alt="Facility Space"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
