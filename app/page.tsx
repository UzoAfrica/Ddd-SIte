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

export default function Home() {
  return (
   <div>
      <NavBar pageType="main"/>
      <InstituteHero />
      <Product/>
      <DoubleG/>
      <Training />
      <WhyChooseUs/>
      <Team />
      <Decadev pageType="main"/>
      <Facility pageType="main"/>
      <div className="pt-[50px]">
        <IndianaTech  pageType="main"/>
      </div>
      <NorthCarolinaSchool />
     <div className="mt-10 lg:mt-0">
      <Footer />
     </div>
   </div>
  );
}
