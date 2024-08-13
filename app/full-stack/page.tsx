import React from "react";
import Banner from "@/components/Banner";
import FullstackHeroSection from "@/components/FullstackHeroSection";
import FullstackPicture from "@/components/FullstackPicture";
import Learning from "@/components/Learning";
import Payment from "@/components/Payment";
import Program from "@/components/Program";
import Requirement from "@/components/Requirement";
import NavBar from "@/components/common/NavBar";
import WhyDecagon from "@/components/common/WhyDecagon";
import GetStarted from "@/components/GetStarted";
import DoubleG from "@/components/common/DoubleG";
import IndianaTech from "@/components/common/IndianaTech";
import NorthCarolinaSchool from "@/components/common/NorthCarolinaSchool";
import Team from "@/components/common/Team";
import Decadev from "@/components/common/Decadev";
import Facility from "@/components/common/Facility";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";

function FullStack() {
  return (
    <div>
      <NavBar pageType="fullstack" />
      <FullstackHeroSection />
      <FullstackPicture />
      <WhyDecagon />
      <Program />
      <Learning pageType="fullstack"/>
      <Banner />
      <Payment pageType="fullstack"/>
      <Requirement />
      <GetStarted pageType="main" />
      <DoubleG />
      <div className="pt-[120px]">
        <IndianaTech pageType="fullstack" />
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

export default FullStack;
