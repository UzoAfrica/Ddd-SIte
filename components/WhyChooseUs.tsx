import React from 'react'
import Heading from './common/Heading'
import { data } from '@/data'
import Image from 'next/image'

function WhyChooseUs() {
  return (
    <div className="mx-auto max-w-screen-xl container my-14 md:px-6 px-3">
        <Heading title="Why you choose us?"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[31px] mt-[32px]">
            {data.map((item) => {
                return (
                    <div key={item.id} className='bg-[#F6F6F9] px-6 pt-7 h-[363px] rounded-[10px]'>
                        <Image src={item.icon} alt={item.title} />
                        <p className="font-[700] mt-8 text-[24px]">{item.title}</p>
                        <p className="text-[#1E1E1E] mt-1.5">{item.content}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default WhyChooseUs