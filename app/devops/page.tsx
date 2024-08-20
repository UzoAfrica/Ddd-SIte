"use client"

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import React from "react";
import Program from "@/components/Program";
import Requirement from "@/components/Requirement";
import NavBar from "@/components/common/NavBar";
import WhyDecagon from "@/components/common/WhyDecagon";
import Hero from "@/components/devops/Hero";
import Learning from "@/components/devops/learning/Learning";
import IndianaTech from "@/components/common/IndianaTech";
import NorthCarolinaSchool from "@/components/common/NorthCarolinaSchool";
import Team from "@/components/common/Team";
import Decadev from "@/components/common/Decadev";
import Facility from "@/components/common/Facility";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";
import WhatsAppPicture from '../../assets/decagon-light.svg'
import Payment from '@/components/Payment';
import DoubleG from '@/components/common/DoubleG';


function Deveops() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+2347080992833"
        accountName="Decagon Institute"
        avatar={WhatsAppPicture}
        notification
        notificationSound
      />
      <NavBar pageType="fullstack" />
      <Hero pageType="devops" />
      <WhyDecagon />
      <Program pageType='devops'/>
      <Learning />
      <Payment pageType="devops"/>
      <Requirement />
      <DoubleG />
      <div className="pt-[120px]">
        <IndianaTech pageType="fullstack" />
      </div>
      <NorthCarolinaSchool />
      <Team />
      <Decadev pageType="fullstack" />
      <Facility pageType="fullstack" />
      <Faq pageType="devops" />
      <Footer />
    </div>
  );
}

export default Deveops;
