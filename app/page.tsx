"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import DoubleG from "@/components/common/DoubleG";
import Product from "@/components/Product";
import WhyChooseUs from "@/components/WhyChooseUs";
import NavBar from "@/components/common/NavBar";
import InstituteHero from "@/components/main/InstituteHero";
import Team from "@/components/common/Team";
import Decadev from "@/components/common/Decadev";
import Facility from "@/components/common/Facility";
import IndianaTech from "@/components/common/IndianaTech";
import NorthCarolinaSchool from "@/components/common/NorthCarolinaSchool";
import Footer from "@/components/common/Footer";
import Training from "@/components/main/Training";
import WhatsAppPicture from "../assets/decagon-light.svg";

export default function Home() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+2347080992833"
        accountName="Decagon Institute"
        avatar={WhatsAppPicture}
        notification
        notificationSound
      />
      <div className="mb-[120px] lg:mb-[50px]">
        {" "}
        <NavBar pageType="main" />
      </div>

      <InstituteHero />
      <Product />
      <DoubleG pageType="main"/>
      <Training />
      <WhyChooseUs />
      <Team />
      <Decadev pageType="main" />
      <Facility pageType="main" />
      <div className="pt-[50px]">
        <IndianaTech pageType="main" />
      </div>
      <NorthCarolinaSchool />
      <div className="mt-10 lg:mt-0">
        <Footer />
      </div>
    </div>
  );
}
