import { data } from '@/data'

interface IHeading {
    title: string
}

function Heading({title}: IHeading) {
  return (
       <div className='flex justify-center'>
         <p className='font-[700] text-3xl text-center md:text-[44px] px-6 py-1.5 text-[#1E1E1E]  rounded-[32px]'>{title}</p>
       </div>
  )
}

export default Heading