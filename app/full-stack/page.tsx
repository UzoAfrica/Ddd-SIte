"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Banner from "@/components/Banner";
import FullstackHeroSection from "@/components/FullstackHeroSection";
import FullstackPicture from "@/components/FullstackPicture";
import Learning from "@/components/Learning";
import Payment from "@/components/Payment";
import Program from "@/components/Program";
import Requirement from "@/components/Requirement";
import NavBar from "@/components/NavBar";
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
import WhatsAppPicture from "../../assets/decagon-light.svg";

function FullStack() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+2347080992833"
        accountName="Decagon Institute"
        avatar={WhatsAppPicture}
        notification
        notificationSound
      />

      <div className="mb-[120px] lg:mb-[140px]">
        <NavBar pageType="fullstack" />
      </div>
      <FullstackHeroSection />
      <FullstackPicture />
      <WhyDecagon />
      <Program pageType="fullstack" />
      <Learning pageType="fullstack" />
      <Banner pageType="fullstack" />
      <Payment pageType="fullstack" />
      <Requirement />
      <GetStarted pageType="main" />
      <DoubleG pageType="fullstack"/>
      <div className="pt-[120px]">
        <IndianaTech pageType="fullstack" />
      </div>
      <NorthCarolinaSchool />
      <Team />
      <Decadev pageType="fullstack" />
      <Facility pageType="fullstack" />
      <Faq pageType="fullstack" />
      <Footer />
    </div>
  );
}

export default FullStack;
