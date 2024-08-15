import React from "react";
import DecagonLogo from "../../assets/decagonLogo.svg"
import Image from "next/image";
import Button from "./Button";


interface INavbar {
  pageType: "main" | "fullstack" | "frontend";
}

function NavBar({pageType}: INavbar) {
  return (
    <div className="border-b-[1px] border-[#D0D5DD]">
      <div className="mx-auto max-w-screen-xl container md:px-6 px-3 my-[18px] ">
        <div className="flex justify-between items-center">
          <Image className="w-[100px] h-[30px] md:h-[38px] md:w-[177px]" src={DecagonLogo} alt="decagon logo" />
         {pageType === "main" && <Button btnLink="/register" text="Enroll in a Program"/>}
         {pageType === "fullstack" && <Button btnLink="/register" text="Apply Now"/>}
         {pageType === "frontend" && <Button btnLink="/reg-frontend" text="Apply Now"/>}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

