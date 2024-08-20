import React from "react";
import PartOne from "../../../assets/l1.svg";
import PartTwo from "../../../assets/l2.svg";
import PartThree from "../../../assets/course-icon.svg";
import Image from "next/image";
import DecagonLogo from "../../../assets/decagonLogo.svg";
import ProgramImg from "../../../assets/program-img.svg";
import Faq from "./faq";
import ProgramPart from "@/components/ProgramPart";

const firstCourse = [
  "Introduction to DevOps and Basic Linux",
  "Version Control with Git and GitHub",
  "Introduction to Cloud Computing and AWS",
  "Basic Networking and CI/CD Introduction",
];

const secondCourse = [
  "Infrastructure as Code (IaC)",
  "Configuration Management ",
  "Monitoring and Logging",
  "Containerization with Docker",
];


const thirdCourse = [
  "Orchestration with Kubernetes",
  "Advanced AWS Services",
  "Security in DevOps",
  "Final Project",
  "Certificate of Completion ",
  "Complimentary Application Guidance for a Tech Masters abroad",
];

function Learning() {
  return (
    <div className="bg-image">
      <div className="mx-auto container max-w-screen-xl py-5 lg:py-[100px] md:px-8 px-3">
        <h1 className="text-center mb-[53px] text-2xl md:text-[46px] font-[700]">
          What you will learn?
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          <ProgramPart
            img={PartOne}
            firstCourse={firstCourse}
            title="Program Part 1"
            subtitle="(first 4 weeks)"
          />
          <ProgramPart
            img={PartTwo}
            firstCourse={secondCourse}
            title="Program Part 2"
            subtitle="(second 4 weeks)"
          />
          <ProgramPart
            img={PartThree}
            firstCourse={thirdCourse}
            title="Program Part 2"
            subtitle="(second 4 weeks)"
          />
        </div>
        {/* <div className="grid lg:grid-cols-2 gap-10  lg:mt-[100px]">
          <div>
            <Image src={ProgramImg} alt="program image" />
          </div>
          <div>
            <h1 className="text-2xl md:text-[32px] text-center md:text-left font-[700]">
              Program Overview
            </h1>
            <p className="text-[#838383] mt-2 text-center md:text-left">
              Pricing, Duration, Mode of Delivery, Start Date
            </p>
            <div>
              <Faq />
            </div>
          </div>
        </div> */}
        {/* <p className="text-center lg:mt-[100px] lg:text-lg text-[#838383]">
          Note: If you are unable to pay for Part 2 before its commencement date
          on <span className="font-[700]">Thur 3rd October 2024</span>, you can
          pay and join Part 2 of the next training cohort, which will be in{" "}
          <span className="font-[700]">December 2024/January 2025</span>.
          Certificate of completion is awarded after completing Program Parts 1
          & 2 successfully with good performance during the training.
        </p> */}
      </div>
    </div>
  );
}

export default Learning;
