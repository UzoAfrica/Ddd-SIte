import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


export const question = [
  {
    id: 1,
    title: "Training Duration",
    info: (
      <>
        <div>
          <div className="flex gap-2 items-center"> <span> Part 1</span> <FaLongArrowAltRight />   5 weeks </div>
          <div className="flex gap-2 items-center"><span> Part 2</span> <FaLongArrowAltRight />   5 weeks </div>
          <div className="flex gap-2 items-center"><span> Total</span> <FaLongArrowAltRight />   10 weeks </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Modes of Delivery",
    info: (
      <>
      <div>
          <div className="flex gap-2 -ml-4 items-center text-sm font-[700]"> <span>Option 1</span> <FaLongArrowAltRight />  Fully Online </div>
          <div className="flex gap-2 -ml-4 items-center text-[13px] font-[700]"><span> Option 2 </span> <FaLongArrowAltRight /> <span>Hybrid (Online + 2 days a week in our Facility. Mondays & Thursdays)</span>  </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Program Start Date",
    info: (
      <>
        <div>
          <div className="flex gap-2 items-center"> <span> Part 1</span> <FaLongArrowAltRight />  Tue 27th August 2024  </div>
          <div className="flex gap-2 items-center"><span> Part 2</span> <FaLongArrowAltRight />    Thur 3rd October 2024 </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Pricing instalment plans",
    info: (
      <>
        <div>
          <div className="flex gap-2 items-center"><span>Part 1 (5 weeks) </span></div>
          <div className="flex gap-2 items-center"><GoDotFill /><span>Fully Online  <span className="text-red-400 font-bold">395k</span> </span></div>
          <div className="flex gap-2 items-center"><GoDotFill /><span>Hybrid  <span className="text-red-400 font-bold">495k</span> </span></div>
        </div>
        <div className="mt-4">
          <div className="flex gap-2 items-center"><span>Part 2 (5 weeks) </span></div>
          <div className="flex gap-2 items-center"><GoDotFill /><span>Fully Online <span className="text-red-400 font-bold">395k</span> </span></div>
          <div className="flex gap-2 items-center"><GoDotFill /><span>Hybrid  <span className="text-red-400 font-bold">495k</span> </span></div>
        </div>
        <p className="text-sm italic mt-2">
          Payment for each program part must be made before the start date of each. 
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Pricing",
    info: (
      <>
        <div>
          <p>Save money when you pay for Parts 1 & 2 together (at once) </p>
          <div className="flex gap-2 mt-2"> <div className="mt-1">< GoDotFill /> </div> <div className="w-[80%]"> Parts 1 & 2 together - Fully Online. <span className="text-red-400 font-bold">Pay 690k</span>  (Instead of 790k. Save 100k) </div></div>
          <div className="flex gap-2 mt-2"> <div className="mt-1">< GoDotFill /> </div> <div className="w-[80%]"> Parts 1 & 2 together - Hybrid. <span className="text-red-400 font-bold">Pay 790k </span> (Instead of 990k. Save 200k) </div></div>
        </div>
        <div>
          <div className="font-bold mt-3"> Note</div>
          <p className="text-sm">
            * If you are unable to pay for Part 2 before its commencement date on Thur 3rd October 2024, you can pay and join Part 2 of the next training cohort, which will be in December 2024/January 2025.
          </p>
          <p className="text-sm mt-3">
            *  Certificate of completion is awarded after completing Program Parts 1 & 2 successfully with good performance during the training
          </p>
        </div>
      </>
    ),
  },
];