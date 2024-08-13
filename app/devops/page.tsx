import React from "react";
import Program from "@/components/Program";
import Requirement from "@/components/Requirement";
import NavBar from "@/components/common/NavBar";
import WhyDecagon from "@/components/common/WhyDecagon";
import DecagonDoubleG from "@/components/devops/DecagonDoubleG";
import Hero from "@/components/devops/Hero";
import Learning from "@/components/devops/learning/Learning";
import IndianaTech from "@/components/common/IndianaTech";
import NorthCarolinaSchool from "@/components/common/NorthCarolinaSchool";
import Team from "@/components/common/Team";
import Decadev from "@/components/common/Decadev";
import Facility from "@/components/common/Facility";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";

function Deveops() {
  return (
    <div>
      <NavBar pageType="fullstack" />
      <Hero pageType="devops"/>
      <WhyDecagon />
      <Program />
      <Learning />
      <Requirement />
      <DecagonDoubleG/>
      <div className="pt-[120px]">
        <IndianaTech pageType="fullstack"/>
      </div>
      <NorthCarolinaSchool />
      <Team />
      <Decadev pageType="fullstack"/>
      <Facility pageType="fullstack"/>
      <Faq/>
      <Footer />
    </div>
  );
}

export default Deveops;
