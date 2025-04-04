import React from "react";
import DecagonLogo from "../assets/decagonLogo.svg";
import Image from "next/image";
import Link from "next/link";





function NavBar() {
  return (
    <div className="border-b-[1px] border-[#D0D5DD] fixed w-full z-50 top-0 bg-white">
      <div className="mx-auto max-w-screen-xl container md:px-6 px-3 my-[18px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-[100px] h-[30px] md:h-[38px] md:w-[177px]"
              src={DecagonLogo}
              alt="decagon logo"
            />
          </Link>

          <div className="flex items-center gap-x-6">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 text-black text-[16px]">
            <Link href="#our-legacy" className="text-black font-medium transition-all duration-300 hover:text-green-600">Our Legacy</Link>
            <Link href="#how-we-work" className="text-black font-medium transition-all duration-300 hover:text-green-600">How We Work</Link>
            <Link href="#alumni" className="text-black font-medium transition-all duration-300 hover:text-green-600">Alumni</Link>
            <Link href="#whats-new" className="text-black font-medium transition-all duration-300 hover:text-green-600">What’s New</Link>
          </div>

          {/* Join Waitlist Button */}
          <Link
            href="#waitlist"
            className="relative px-6 py-2 text-black font-medium rounded-full border-2 border-black 
            bg-white shadow-[5px_5px_0px_#000] transition-transform duration-300 
            hover:scale-110 hover:shadow-[6px_6px_0px_#000]"
          >
            Join Waitlist
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




export default NavBar;
