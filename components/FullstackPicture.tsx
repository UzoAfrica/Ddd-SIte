import React from 'react'
import Image from 'next/image'
import Fullstack_Mobile from '../assets/fullstack-mobile.png'

function FullstackPicture() {
  return (
    <div className='flex w-full md:gap-6 gap-2 py-[70px] mx-auto max-w-screen-2xl overflow-hidden'>
       <div className=''> <Image src={"https://doubleg-cdn.decagon.institute/fullstack-one.svg"} width={500} height={500} className='rounded-tr-3xl hidden lg:inline  w-[100%] xl:w-[400px] rounded-br-3xl' alt="" /></div>
       <div className=''> 
        <Image className="hidden md:inline" src={"https://doubleg-cdn.decagon.institute/fullstack-two.svg"} width={700} height={700} alt="" />
        <Image className="md:hidden" src={Fullstack_Mobile} width={700} height={700} alt="" />
        </div>
       <div className=''> <Image src={"https://doubleg-cdn.decagon.institute/fullstack-three.svg"} width={500} height={500} className=' w-[100%] xl:w-[400px] hidden lg:inline ' alt="" /></div>
    </div>
  )
}

export default FullstackPicture