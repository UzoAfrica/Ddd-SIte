import DoubleG from "@/components/common/DoubleG";
import Product from "@/components/Product";
import WhyChooseUs from "@/components/WhyChooseUs";
import NavBar from "@/components/common/NavBar";
import InstituteHero from "@/components/main/InstituteHero";

export default function Home() {
  return (
   <div>
      <NavBar pageType="main"/>
      <InstituteHero />
      <Product/>
      <DoubleG/>
      <WhyChooseUs/>
   </div>
  );
}
