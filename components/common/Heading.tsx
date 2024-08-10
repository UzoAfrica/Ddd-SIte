import { data } from '@/data'
import React from 'react'

interface IHeading {
    title: string
}

function Heading({title}: IHeading) {
  return (
       <div className='flex justify-center'>
         <p className='font-[700] text-lg bg-[#34A853] px-6 py-1.5 text-white  rounded-[32px]'>{title}</p>
         <div className='grid grid-cols-3'>
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        
                    </div>
                )
            })}
         </div>
       </div>
  )
}

export default Heading