import Image from "next/image"
import Terragon from "@/assets/terragon.webp"
import Carbon from "@/assets/carbon.svg"
import Flutterwave from "@/assets/flutterwave.svg"
import Microsoft from "@/assets/microsoft.svg"
import Interswitch from "@/assets/interswitch.svg"
import Sterlingbank from "@/assets/sterlingbank.svg"
import { DecadevsProfile } from "@/data"

function Decadev() {
  return (
    <div className="doubleg_container py-0 md:pt-20">
        <h1 className="text-center text-2xl lg:text-5xl font-bold  md:w-[60%] mx-auto">Meet some of our Decagon Alumni (<span className="text-[#bf0a30]">Decadevs</span>)</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[54px] mt-[55px] max-w-screen-lg mx-auto">
           
           {DecadevsProfile.map((person) => (
                 <div key={person.id} className="flex justify-center relative flex-col items-center shadow-md rounded-2xl py-[33px]">
                    <div className="absolute top-1 mt-4">
                        <div className="flex justify-center">
                            <Image
                                className="w-[100px] mb-[21px] h-[100px] border-gray-100 border-4 p-1 object-cover rounded-[50%]" 
                                width={100} height={100}
                                src={person.img} alt="" 
                                />
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold text-black">{person.name}</h1>
                            <p className="text-[#71717A]">{person.title}</p>
                            <p className="text-[#71717A]">{person.company}</p>
                            <p className="text-[#71717A]">{person.location}</p>
                        </div>
                    </div>
                    <div className="mt-[150px] flex justify-center">
                        <p className="text-center pt-20 w-[87%] text-sm text-[#71717A]">{person.description}</p>
                    </div>
             </div>
           ))}
           
        </div>
        <h1 className="text-center text-2xl w-[95%] md:text-5xl font-bold mt-20 md:mt-[250px] mx-auto">Where some of our  <span className="text-[#bf0a30]">graduates </span>work</h1>
        <div className="flex flex-wrap justify-center gap-3 md:gap-10 mt-6 items-center">
            <Image  className="w-[150px] md:w-[170px] shadow-sm px-6 py-6" width={150} height={100} src={Carbon} alt="Carbon" />
            <Image className="w-[150px] md:w-[170px] shadow-sm px-6 py-6" width={170} height={100} src={Microsoft} alt="Microsoft" />
            <Image className="w-[170px] md:w-[200px] shadow-sm px-6 py-6" width={200} height={100} src={Flutterwave} alt="Flutterwave" />
            <Image  className="w-[150px] md:w-[170px] shadow-sm px-6 py-6" width={150} height={100} src={Interswitch} alt="Interswitch" />
            <Image  className="w-[110px] md:w-[110px] shadow-sm px-6 py-3" width={100} height={100} src={Sterlingbank} alt="Sterlingbank" />
            <Image  className="w-[170px] md:w-[170px] shadow-sm px-6 py-6" width={170} height={100} src={Terragon} alt="Terragon" />
        </div>

    </div>
  )
}

export default Decadev
