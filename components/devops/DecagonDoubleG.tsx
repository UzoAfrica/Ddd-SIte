import React from 'react'
import DecagonLogo from "../../assets/decagonLogo.svg"
import Image from 'next/image'

function DecagonDoubleG() {
  return (
    <div>
         <div className='bg-image py-[100px] '>
          <h1 className="text-center text-2xl lg:text-[46px] font-[700]">
            Our Double-G Bundle Service
          </h1>
          <div className="flex justify-center items-center gap-1 lg:mt-2">
            <span className="text-center lg:text-2xl font-[700]"> DoubleG by</span>
            <Image className="w-[90px] h-[30px] md:h-[38px] md:w-[120px]" src={DecagonLogo} alt="decagon logo" />
          </div>
          <p className="text-center text-[#838383] font-[400] mt-6 lg:w-[67%] mx-auto">
            With our Double-G (Double Gateway) bundle service, when you enroll
            for any of our Training Programs, you also get access to a
            complimentary (free) service of guidance and coaching on admission
            processing to study a master's degree program in any of our partner
            schools abroad.
          </p>
          <p className="text-center text-[#838383] font-[400] mt-8 lg:w-[67%] mx-auto">
            Enroll for our Data Analysis with Python & SQL program and get
            access to free guidance & coaching on school applications, securing
            M-Power student loan, and student visa applications & interviews.
          </p>
          <div className=" mt-8 flex justify-center">
            <a
              target="_blank"
              href="https://doubleg.decagon.institute/"
              className="bg-[#34a853] text-[#fff] px-14 py-4 rounded-md"
            >
              Learn More
            </a>
          </div>
        </div>
    </div>
  )
}

export default DecagonDoubleG