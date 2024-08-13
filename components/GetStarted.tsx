import Link from "next/link";
import { RiSendPlaneLine } from "react-icons/ri";

interface IGetStarted {
  pageType: "main" | "parent";
}

function GetStarted( { pageType }: IGetStarted) {
  return (
    <div className="get_started_background bg-center  text-white flex flex-col justify-center items-center py-32">
        <div>
            <h1 className="text-2xl md:text-5xl text-center font-bold ">Apply Now</h1>
            <p className="text-center px-4 mt-4 mx-auto md:px-2">If you would like to make inquiries, you can <span className="text-[#fec84b] font-semibold">Submit an enquiry </span> here and our team will be in touch with you.</p>
            {pageType === "main"  && (
              <div className="flex justify-center items-center mt-8 bg-[#34A853] rounded-lg py-3 gap-2 w-[160px] mx-auto">
                  <Link
                      href="/register"
                      className="text-sm ">Apply Now</Link>
                  <RiSendPlaneLine size={20} />
            </div>
            )}
            {pageType === "parent"  && (
              <div className="flex justify-center items-center mt-8 bg-[#c00] rounded-lg py-3 gap-2 w-[160px] mx-auto">
                  <Link
                       href="/parentRegister"
                      className="text-sm ">Enroll</Link>
                  <RiSendPlaneLine size={20} />
            </div>
            )}
        </div>
    </div>
  )
}

export default GetStarted