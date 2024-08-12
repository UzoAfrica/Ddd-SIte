import React from 'react'
import Image from 'next/image'

function FullstackPicture() {
  return (
    <div className='flex w-full gap-6 py-[70px] mx-auto max-w-screen-2xl overflow-hidden'>
       <div className=''> <Image src={"https://doubleg-cdn.decagon.institute/fullstack-one.svg"} width={500} height={500} className='rounded-tr-3xl w-[100%] xl:w-[400px] rounded-br-3xl' alt="" /></div>
       <div className=''> <Image src={"https://doubleg-cdn.decagon.institute/fullstack-two.svg"} width={700} height={700} alt="" /></div>
       <div className=''> <Image src={"https://doubleg-cdn.decagon.institute/fullstack-three.svg"} width={500} height={500} className=' w-[100%] xl:w-[400px] ' alt="" /></div>
    </div>
  )
}

export default FullstackPicture