import React from "react";
import DecagonLogo from "../../assets/decagonLogo.svg";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface INavbar {
  pageType: "main" | "fullstack" | "frontend" | "devops"
}

function NavBar({ pageType }: INavbar) {
  return (
    <div className="border-b-[1px] border-[#D0D5DD] fixed w-full z-50 top-0 bg-white">
      <div className="mx-auto max-w-screen-xl container md:px-6 px-3 my-[18px] ">
        <div className="flex justify-between items-center">
        <Link href="/">
            {" "}
            <Image
              className="w-[100px] h-[30px] md:h-[38px] md:w-[177px]"
              src={DecagonLogo}
              alt="decagon logo"
            />
          </Link>
          {pageType === "main" && (
            <Button btnLink="/#training" text="Enroll in a Program" />
          )}
          {pageType === "fullstack" && (
            <Button btnLink="/register" text="Register Now" />
          )}
          {pageType === "frontend" && (
            <Button btnLink="/reg-frontend" text="Register Now" />
          )}
          {pageType === "devops" && (
            <Button btnLink="/reg-devop" text="Register Now" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
