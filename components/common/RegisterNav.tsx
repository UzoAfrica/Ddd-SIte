import Image from "next/image";
import Link from "next/link";
import DecagonLogo from "../../assets/decagonLogo.svg"

// fixed top-0 w-[100%] px-[200px] h-24 bg-[#F6FEF9] py-6 font-inter z-[999]"

const RegisterNav = () => {
  return (
    <nav className="fixed top-0 w-full h-20 bg-white py-2 font-inter z-[999]">
    <div className="border-b-[1px] border-[#D0D5DD]">
      <div className="mx-auto max-w-screen-xl container md:px-6 px-3 my-[18px] ">
        <div className="flex justify-between items-center">
        <Link href="/">  <Image className="w-[100px] h-[30px] md:h-[38px] md:w-[177px]" src={DecagonLogo} alt="decagon logo" /></Link>
          <div className="">
            <a
              className="py-3 text-sm md:text-base md:py-4 px-10 sm:px-16 rounded-lg bg-[#34A853] text-[#fff] font-[600]"
              href=""
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
};

export default RegisterNav;
