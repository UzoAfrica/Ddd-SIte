import Link from "next/link";
import React from "react";

interface Ibutton {
  btnLink: string;
  text: string;
}

function Button({ btnLink, text }: Ibutton) {
  return (
    <div className="">
      <Link
        className="py-3 text-sm md:text-base md:py-4 px-4 sm:px-6 rounded-lg bg-[#34A853] text-[#fff] font-[600]"
        href={btnLink}
      >
        {text}
      </Link>
    </div>
  );
}

export default Button;
