"use client";

import { IoMdCheckmark } from "react-icons/io";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Heading from "../common/Heading";
import Link from "next/link";

function Training() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla py-[50px] mx-auto max-w-screen-xl md:px-8 mt-8 lg:mt-[100px] px-3">
      <Heading title="Our Training Programs " />
      <p className="text-center my-3 text-[#5C6881] font-[500]">
        Our programs are highly intensive, designed to accelerate your
        proficiency levels within a few weeks.
      </p>
      <div
        className="embla__viewport h-full mt-10 hidden lg:block"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          <div className="embla__slide border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-fullstack pl-6 pt-[42px] h-[170px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">
                Full-Stack Software Engineering
              </h1>
              <p className="text-white text-sm font-[700]">
                (Learn both Front-end and Back-end Development)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦550k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <Link
                  href="/full-stack"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="embla__slide border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-image-frontend h-[170px] pl-6 pt-[42px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">
                Frontend Development
              </h1>
              <p className="text-white text-sm font-[700]">
                (Learn both Front-end)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦495k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <Link
                  href="/frontend"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="embla__slide border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-data-analysis h-[170px] pl-6 pt-[42px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">Data Analysis</h1>
              <p className="text-white text-sm font-[700]">
                (with Python & SQL)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦395k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <a
                  href="https://data-analysis.decagon.institute/"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="embla__slide border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-image-devops h-[170px] pl-6 pt-[42px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">
                DevOps Engineering
              </h1>
              <p className="text-white text-sm font-[700]">
                (Learn both Front-end and Back-end Development)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦400k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <Link
                  href="/devops"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-3 flex justify-center gap-3">
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="w-20 bg-black px-2 py-1 text-sm text-white"
          onClick={scrollNext}
        >
          Next
        </button>
      </div> */}
      <div className="embla__dots gap-2 mt-6  hidden lg:flex">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
        <div className="grid md:grid-cols-2 gap-6 lg:hidden">
          <div className="border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-fullstack pl-6 pt-[42px] h-[170px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">
                Full-Stack Software Engineering
              </h1>
              <p className="text-white text-sm font-[700]">
                (Learn both Front-end and Back-end Development)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦550k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <Link
                  href="/full-stack"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </Link>
              </div>
            </div>
          </div>
           <div className="border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-image-frontend h-[170px] pl-6 pt-[42px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">
                Frontend Development
              </h1>
              <p className="text-white text-sm font-[700]">
                (Learn both Front-end)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦495k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <Link
                  href="/frontend"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className="border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-data-analysis h-[170px] pl-6 pt-[42px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">Data Analysis</h1>
              <p className="text-white text-sm font-[700]">
                (with Python & SQL)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦395k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <a
                  href="https://data-analysis.decagon.institute/"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </a>
              </div>
            </div>
          </div>
          <div className="border-[1px]  border-[rgba(0, 0, 0, 0.08)] custom-shadow rounded-b-md">
            <div className="bg-image-devops h-[170px] pl-6 pt-[42px] pb-[45px]">
              <h1 className="text-white font-[700] text-2xl">
                DevOps Engineering
              </h1>
              <p className="text-white text-sm font-[700]">
                (Learn both Front-end and Back-end Development)
              </p>
            </div>
            <div className="px-6">
              <h1 className="text-center font-[500] mt-5">
                Starting at{" "}
                <span className="text-[#34A853] text-2xl font-[700]">
                  {" "}
                  ₦400k
                </span>
              </h1>
              <h1 className=" pt-[42px] text-lg text-[#757575] ">
                <span className="font-[700] text-black">Enroll date:</span> 10th
                September 2024
              </h1>
              <h1 className=" pt-3 text-lg text-[#757575] ">
                <span className="font-[700] text-black">Duration:</span> 18
                Weeks
              </h1>
              <h1 className=" pt-2 text-lg">
                <span className="font-[700]">Mode of Delivery:</span>
              </h1>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]"> Fully Online </span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <IoMdCheckmark />
                <span className="text-sm text-[#757575]">
                  {" "}
                  Hybrid (Online & 2 days per week in Facility){" "}
                </span>
              </div>
              <h1 className=" pt-2 text-lg text-[#757575] ">
                <span className="font-[700] text-black text-base">
                  Time commitment:
                </span>{" "}
                At least 10 hours daily
              </h1>
              <div className="flex justify-center">
                <Link
                  href="/devops"
                  className="bg-[#34A853] px-4 text-white font-[400] my-[55px] py-1 rounded-[20px]"
                >
                  View more & Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Training;
