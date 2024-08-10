import React from 'react'
import StudentPic from '../assets/fullstack-one.svg'
import StudentPicOne from '../assets/fullstack-two.svg'
import StudentPicTwo from '../assets/fullstack-three.svg'
import Image from 'next/image'

function FullstackPicture() {
  return (
    <div className='flex w-full gap-6 py-[70px] mx-auto max-w-screen-2xl overflow-hidden'>
       <div className=''> <Image src={StudentPic} className='rounded-tr-3xl w-[100%] xl:w-[400px] rounded-br-3xl' alt="" /></div>
       <div className=''> <Image src={StudentPicOne} width={700} height={700} alt="" /></div>
       <div className=''> <Image src={StudentPicTwo} className='xl:w-[400px]' alt="" /></div>
    </div>
  )
}

export default FullstackPicture