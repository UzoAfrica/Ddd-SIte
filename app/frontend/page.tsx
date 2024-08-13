import Banner from "@/components/Banner";
import Learning from "@/components/Learning";
import Payment from "@/components/Payment";
import Program from "@/components/Program";
import NavBar from "@/components/common/NavBar";
import WhyDecagon from "@/components/common/WhyDecagon";
import React from "react";
import GetStarted from "@/components/GetStarted";
import DoubleG from "@/components/common/DoubleG";
import IndianaTech from "@/components/common/IndianaTech";
import NorthCarolinaSchool from "@/components/common/NorthCarolinaSchool";
import Team from "@/components/common/Team";
import Decadev from "@/components/common/Decadev";
import Facility from "@/components/common/Facility";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";
import Requirement from "@/components/Requirement";
import FrontendHero from "@/components/frontend/FrontendHero";

function Frontend() {
  return (
    <div>
      <NavBar pageType="fullstack" />
      <FrontendHero />
      <WhyDecagon />
      <Program />
      <Learning pageType="frontend" />
      <Banner />
      <Payment pageType="frontend" />
      <Requirement />
      <GetStarted pageType="main" />
      <DoubleG />
      <div className="pt-[120px]">
        <IndianaTech pageType="fullstack" />
      </div>
      <NorthCarolinaSchool />
      <Team />
      <Decadev pageType="fullstack" />
      <Facility pageType="fullstack" />
      <Faq />
      <Footer />
    </div>
  );
}

export default Frontend;
