"use client"

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Banner from "@/components/Banner";
import Learning from "@/components/Learning";
import Payment from "@/components/Payment";
import Program from "@/components/Program";
import NavBar from "@/components/NavBar";
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
import WhatsAppPicture from '../../assets/decagonLogo.svg'

function Frontend() {
  return (
    <div>

       <FloatingWhatsApp
        phoneNumber="+2347080992833"
        accountName="Decagon Institute"
        avatar={WhatsAppPicture}
        notification
        notificationSound
      />
      <div className='mb-[70px] lg:mb-[50px]'>
      {/* <NavBar pageType="frontend" /> */}
      </div>
      <FrontendHero />
      <WhyDecagon />
      <Program pageType="frontend" />
      <Learning pageType="frontend" />
      <Banner pageType='frontend' />
      <Payment pageType="frontend" />
      <Requirement />
      <GetStarted pageType="frontend" />
      <DoubleG pageType='frontend' />
      <div className="pt-[120px]">
        <IndianaTech pageType="fullstack" />
      </div>
      <NorthCarolinaSchool />
      <Team />
      <Decadev pageType="fullstack" />
      <Facility pageType="fullstack" />
      <Faq pageType="frontend" />
      <Footer />
    </div>
  );
}

export default Frontend;
