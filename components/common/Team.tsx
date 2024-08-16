import Image from "next/image"
import Cn from "@/assets/avatar/cn.png"
import Fc from "@/assets/avatar/fc.png"
import Ik from "@/assets/avatar/ik.png"
import Hr from "@/assets/avatar/hr.png"
import Heading from "./Heading"


function Team() {
  return (
    <div className=""> 
        <div className="mx-auto container max-w-screen-xl py-6 lg:py-[50px] md:px-8 px-3">
            <Heading title="Meet Our Team"/>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 my-16">
                <div className="mb-8 md:mt-8 lg:mt-0 lg:mb-0">
                    <div className="flex justify-center"> <Image className="rounded-[50%]" src={Cn} width={198} height={198} alt="CN" /></div>
                    <h1 className="text-center text-xl font-[600] my-2">Chika Nwobi</h1>
                    <p className="text-center text-[#34A853]">Founder & CEO</p>
                </div>
                <div className="my-8 lg:my-0">
                    <div className="flex justify-center"> <Image className="rounded-[50%]" src={Fc} width={198} height={198} alt="FC" /></div>
                    <h1 className="text-center text-xl font-[600] my-2">Francis Ogunlaja</h1>
                    <p className="text-center text-[#34A853]">Financial Controller</p>
                </div>
                <div className="my-8 lg:my-0">
                    <div className="flex justify-center"><Image className="rounded-[50%]" src={Ik} width={198} height={198} alt="iK" /></div>
                    <h1 className="text-center text-xl font-[600] my-2">Ikenna Obianwu</h1>
                    <p className="text-center text-[#34A853]">Program Director</p>
                </div>
                <div className="my-8 lg:my-0">
                    <div className="flex justify-center">  <Image className="rounded-[50%]" src={Hr} width={198} height={198} alt="Hr" /></div>
                    <h1 className="text-center text-xl font-[600] my-2">Omowunmi Kasim</h1>
                    <p className="text-center text-[#34A853]">People & Process Manager</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team