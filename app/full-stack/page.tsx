import React from 'react'
import Banner from '@/components/Banner'
import FullstackHeroSection from '@/components/FullstackHeroSection'
import FullstackPicture from '@/components/FullstackPicture'
import Learning from '@/components/Learning'
import Payment from '@/components/Payment'
import Program from '@/components/Program'
import Requirement from '@/components/Requirement'
import NavBar from '@/components/common/NavBar'
import WhyDecagon from '@/components/fullstack/WhyDecagon'

function FullStack() {
  return (
    <div>
        <NavBar pageType="fullstack"/>
        <FullstackHeroSection/>
        <FullstackPicture/>
        <WhyDecagon/>
        <Program/>
        <Learning />
        <Banner/>
        <Payment />
        <Requirement/>
    </div>
  )
}

export default FullStack