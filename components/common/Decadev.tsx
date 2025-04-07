import Image from "next/image";
import Terragon from "@/assets/payoneer.png";
import Payoneer from "@/assets/terragon.webp";
import UKTN from "@/assets/UKTN.png";
import Carbon from "@/assets/carbon.svg";
import Flutterwave from "@/assets/flutterwave.svg";
import Microsoft from "@/assets/microsoft.svg";
import Interswitch from "@/assets/interswitch.svg";
import Sterlingbank from "@/assets/sterlingbank.svg";
import { DecadevsProfile } from "@/data";
import Heading from "./Heading";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



interface IDecadev {
  pageType: "main" | "fullstack";
}

function Decadev({ pageType }: IDecadev) {
  return (
    <div id="alumni" className="mx-auto container max-w-screen-xl py-[50px] md:px-8 px-3">
    
      {pageType === "main" && (
        <>
            <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-neue text-3xl lg:text-4xl font-bold text-black">
          Meet some of our Decagon Alumni
        </h1>
        {/* <h2 className="text-2xl font-semibold text-green-600">
          {"</"}<span className="text-black">Decadevs</span>{"/>"}
        </h2> */}
      </div>

      {/* Swiper Carousel */}
      <div className="font-helvetica max-w-6xl mx-auto mt-12">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3} // Display 3 testimonials per slide
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 }, // 3 slides on large screens
            768: { slidesPerView: 2 }, // 2 slides on tablets
            640: { slidesPerView: 1 }, // 1 slide on mobile
             380: { slidesPerView: 1 }, // 1 slide on mobile
          }}

          className="w-full"
        >
          {DecadevsProfile.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="relative bg-white shadow-lg rounded-xl border p-6 flex flex-col justify-between h-[400px]">
                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm italic">{person.description}</p>

                {/* Quote Icon */}
                <div className="absolute bottom-24 left-6 text-gray-300 text-[150px] leading-none">
                    “
                </div>


                {/* Alumni Info */}
                <div className="flex items-center mt-6 border-t pt-4 bg-[#F8FAE6] rounded-b-xl">
                  <Image
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                    width={40}
                    height={40}
                    src={person.img}
                    alt={person.name}
                  />
                  <div className="ml-3">
                    <h3 className="text-black font-semibold">{person.name}</h3>
                    <p className="text-xs text-gray-600">{person.title} @{person.company}</p>
                  </div>
                  {/* <Image
                    className="ml-auto w-5 h-5"
                    width={20}
                    height={20}
                    src={person.flag}
                    alt="Country flag"
                  /> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>


        </>
      )}
      {pageType === "main" && (
  <div className="mt-[100px] lg:mt-[150px] container mx-auto px-4 lg:px-16">
    <h1 className="font-fuzzybubbles text-center text-xl md:text-2xl font-bold mt-10 md:mt-[100px] ">
      Places our talents currently work
    </h1>

    <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6 items-center">
      <Image
        className="w-[130px] md:w-[150px] shadow-sm px-4 py-4"
        width={150}
        height={100}
        src={Payoneer}
        alt="Payoneer"
      />
      <Image
        className="w-[130px] md:w-[150px] shadow-sm px-4 py-4"
        width={150}
        height={100}
        src={Interswitch}
        alt="Interswitch"
      />
      <Image
        className="w-[140px] md:w-[160px] shadow-sm px-4 py-4"
        width={160}
        height={100}
        src={Microsoft}
        alt="Microsoft"
      />
      <Image
        className="w-[100px] md:w-[120px] shadow-sm px-4 py-4"
        width={120}
        height={100}
        src={Carbon}
        alt="Carbon"
      />
      <Image
        className="w-[140px] md:w-[160px] shadow-sm px-4 py-4"
        width={160}
        height={100}
        src={Flutterwave}
        alt="Flutterwave"
      />
      <Image
        className="w-[130px] md:w-[150px] shadow-sm px-4 py-4"
        width={150}
        height={100}
        src={Terragon}
        alt="Terragon"
      />
      <Image
        className="w-[150px] md:w-[170px] shadow-sm px-4 py-4"
        width={170}
        height={100}
        src={UKTN}
        alt="UKTN"
      />
    </div>
  </div>
)}

       {pageType === "fullstack" && (
        <>
          <h1 className="text-center text-2xl w-[95%] md:text-5xl font-bold mt-20 md:mt-[100px] mx-auto">
            Where some of our <span className="text-[#34A853]">graduates </span>
            work
          </h1>
          <div className="flex flex-wrap justify-center gap-3 md:gap-10 mt-6 items-center">
            <Image
              className="w-[150px] md:w-[170px] shadow-sm px-6 py-6"
              width={150}
              height={100}
              src={Carbon}
              alt="Carbon"
            />
            <Image
              className="w-[150px] md:w-[170px] shadow-sm px-6 py-6"
              width={170}
              height={100}
              src={Microsoft}
              alt="Microsoft"
            />
            <Image
              className="w-[170px] md:w-[200px] shadow-sm px-6 py-6"
              width={200}
              height={100}
              src={Flutterwave}
              alt="Flutterwave"
            />
            <Image
              className="w-[150px] md:w-[170px] shadow-sm px-6 py-6"
              width={150}
              height={100}
              src={Interswitch}
              alt="Interswitch"
            />
            <Image
              className="w-[110px] md:w-[110px] shadow-sm px-6 py-3"
              width={100}
              height={100}
              src={Sterlingbank}
              alt="Sterlingbank"
            />
            <Image
              className="w-[170px] md:w-[170px] shadow-sm px-6 py-6"
              width={170}
              height={100}
              src={Terragon}
              alt="Terragon"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Decadev;
