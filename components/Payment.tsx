import { CheckIcon } from "./CheckIcon";
interface IPayment {
  pageType: "fullstack" | "frontend" | "devops";
}

function Payment({ pageType }: IPayment) {
  return (
    <div className="mx-auto max-w-screen-xl container md:px-6 px-3">
      <h1 className="text-center text-2xl mt-10 md:text-[44px] w-10/12 leading-10 mx-auto font-[500]">
        Pricing, Duration, Mode of Delivery, Start Date
      </h1>
      <div className="grid lg:grid-cols-[50%_50%] gap-4 lg:gap-6 lg:mx-10 h-full mt-16">
        <div className="border-[1px] w-full border-[#34A853] rounded-xl px-6">
          <h1 className="lg:text-xl font-[500] border-b-[1px] border-[rgba(0,0,0,0.30)] pt-10 pb-5">
            Training Duration
          </h1>
          {/* <p className="text-3xl text-[#bf0a30] font-semibold pb-0">1.5M Naira <span className="block -mt-2">(NGN 1,500,000)</span> </p> */}
          {/* <p className="text-lg font-[600] pb-10 mt-6 border-b-[1px] border-[rgba(0,0,0,0.30)]">(Discounted price valid till 5th July 2024. The original price is 1.95M)</p> */}
          {pageType === "fullstack" && (
            <>
              <div className="flex gap-4 mt-10">
                <CheckIcon />
                <p className="mt-1  font-semibold">Part 1: 6 weeks</p>
              </div>
              <div className="flex gap-4 my-2 ">
                <CheckIcon />
                <p className="mt-1 font-semibold">Part 2: 6 weeks</p>
              </div>
            </>
          )}

          {pageType === "frontend" && (
            <>
              <div className="flex gap-4 mt-10">
                <CheckIcon />
                <p className="mt-1  font-semibold">Part 1: 6 weeks</p>
              </div>
              <div className="flex gap-4 my-2 ">
                <CheckIcon />
                <p className="mt-1 font-semibold">Part 2: 6 weeks</p>
              </div>
            </>
          )}

          {pageType === "devops" && (
            <>
              <div className="flex gap-4 mt-10">
                <CheckIcon />
                <p className="mt-1  font-semibold">Part 1: 4 weeks</p>
              </div>
              <div className="flex gap-4 my-2 ">
                <CheckIcon />
                <p className="mt-1 font-semibold">Part 2: 4 weeks</p>
              </div>
            </>
          )}

          {pageType === "fullstack" && (
            <>
              <div className="flex gap-4 my-2 ">
                <CheckIcon />
                <p className="mt-1 font-semibold">Part 3: 6 weeks</p>
              </div>
              <div className="flex gap-4 my-2 border-b-[1px] border-[rgba(0,0,0,0.30)] pb-[34px]">
                <CheckIcon />
                <p className="mt-1 font-semibold">Total: 18 weeks</p>
              </div>
            </>
          )}
          {pageType === "frontend" && (
            <div className="flex gap-4 my-2 border-b-[1px] border-[rgba(0,0,0,0.30)] pb-[34px]">
              <CheckIcon />
              <p className="mt-1 font-semibold">Total: 12 weeks</p>
            </div>
          )}
          {pageType === "devops" && (
            <>
              <div className="flex gap-4 my-2 ">
                <CheckIcon />
                <p className="mt-1 font-semibold">Part 3: 4 weeks</p>
              </div>
              <div className="flex gap-4 my-2 border-b-[1px] border-[rgba(0,0,0,0.30)] pb-[34px]">
                <CheckIcon />
                <p className="mt-1 font-semibold">Total: 12 weeks</p>
              </div>
            </>
          )}
          <h1 className="text-xl font-[600] pt-3">Mode of Delivery</h1>
          <div className="flex gap-4 mt-5">
            <CheckIcon />
            <p className="mt-1  font-semibold">Option 1: Fully Online</p>
          </div>
          <div className="flex gap-4 mt-4 border-b-[1px] border-[rgba(0,0,0,0.30)] pb-[34px]">
            <div>
              {" "}
              <CheckIcon />
            </div>
            <p className="mt-1  font-semibold">
              Option 2: Hybrid (Online + 2 days a week in our Facility. Mondays
              & Thursdays
            </p>
          </div>
          <h1 className="text-xl font-[600] pt-7">Program Start Date</h1>
          {pageType === "frontend" && (
            <>
              <div className="flex gap-4 mt-3">
                <CheckIcon />
                <p className="mt-1  font-semibold">
                  Part 1: Tue 10th September 2024
                </p>
              </div>
              <div className="flex gap-4 mt-3">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-1  font-semibold">
                  Part 2: Thur 22nd October 2024
                </p>
              </div>
            </>
          )}
          {pageType === "fullstack" && (
            <>
              <div className="flex gap-4 mt-3">
                <CheckIcon />
                <p className="mt-1  font-semibold">
                  Part 1: Tue 10th September 2024
                </p>
              </div>
              <div className="flex gap-4 mt-3">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-1  font-semibold">
                  Part 2: Thur 22nd October 2024
                </p>
              </div>
              <div className="flex gap-4 mt-3 mb-16">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-1  font-semibold">
                  Part 3: Mon 3rd December 2024
                </p>
              </div>
            </>
          )}
          {pageType === "devops" && (
            <>
              <div className="flex gap-4 mt-3">
                <CheckIcon />
                <p className="mt-1  font-semibold">
                  Part 1: Tue 10th September 2024
                </p>
              </div>
              <div className="flex gap-4 mt-3">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-1  font-semibold">
                  Part 2: Thur 10th October 2024
                </p>
              </div>
              <div className="flex gap-4 mt-3 mb-16">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-1  font-semibold">
                  Part 3: Thur 7th November 2024
                </p>
              </div>
            </>
          )}
        </div>
        <div className="bg-[#101828] text-white rounded-xl px-4 md:px-6 w-full pb-[62px]">
          <h1 className="text-xl font-[500]  border-b-[1px] border-[#D0D5DD] pt-10 pb-5">
            Pricing (in Naira)
          </h1>
          {pageType === "fullstack" && (
            <>
              <h1 className="mt-4">Part 1 (6 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N550k
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N600k</p>
              </div>
            </>
          )}
          {pageType === "frontend" && (
            <>
              <h1 className="mt-4">Part 1 (6 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N495k
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N595k</p>
              </div>
            </>
          )}
          {pageType === "devops" && (
            <>
              <h1 className="mt-4">Part 1 (4 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N400k
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N500k</p>
              </div>
            </>
          )}
          {pageType === "fullstack" && (
            <>
              <h1 className="mt-4">Part 2 (6 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N550k
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N600k</p>
              </div>
              <h1 className="mt-4">Part 3 (6 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N550k
                </p>
              </div>
              <div className="flex gap-4 my-3 border-b-[1px] border-[#D0D5DD] pb-[27px]">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N600k</p>
              </div>
            </>
          )}

          {pageType === "devops" && (
            <>
              <h1 className="mt-4">Part 2 (4 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N400k
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N500k</p>
              </div>
              <h1 className="mt-4">Part 3 (4 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N400k
                </p>
              </div>
              <div className="flex gap-4 my-3 border-b-[1px] border-[#D0D5DD] pb-[27px]">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N500k</p>
              </div>
            </>
          )}
          {pageType === "frontend" && (
            <>
              <h1 className="mt-4">Part 2 (6 weeks)</h1>
              <div className="flex gap-4 mt-4">
                <div>
                  {" "}
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">
                  Fully Online: N495k
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base">Hybrid: N595k</p>
              </div>
            </>
          )}
          <h1 className="text-lg">
            Payment for each program part must be made before the start date of
            each.
          </h1>

          {pageType === "fullstack" && (
            <>
              <p className="italic mt-3">
                Save Money When You Pay for Parts 1, 2, & 3 Together.
              </p>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base w-[70%]">
                  Parts 1, 2, & 3 together - Fully Online: Pay N1.5M (Instead of
                  1.65M. Save 150k)
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base w-[70%]">
                  Parts 1, 2, & 3 together - Hybrid: Pay N1.6M (Instead of 1.8M.
                  Save 200k)
                </p>
              </div>
              <h1>Note:</h1>
              <p>
                {" "}
                * If you are unable to pay for Part 2 before its commencement
                date on Thurs 22nd October 2024, you can pay and join Part 2 of
                the next training cohort, which will be in December 2024/January
                2025.
              </p>
              <p className="mt-3">
                Certificate of completion is awarded after completing all
                Program parts successfully with good performance during the
                training.
              </p>
            </>
          )}
          {pageType === "devops" && (
            <>
              <p className="italic mt-3">
                Save Money When You Pay for Parts 1, 2, & 3 Together.
              </p>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base w-[70%]">
                  Parts 1, 2, & 3 together - Fully Online: Pay N1.1M (Instead of
                  1.2M. Save 100k)
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base w-[70%]">
                  Parts 1, 2, & 3 together - Hybrid: Pay N1.2M (Instead of 1.5M.
                  Save 300k)
                </p>
              </div>
              <h1>Note:</h1>
              <p>
                {" "}
                * If you are unable to pay for Part 2 before its commencement
                date on Thur 10th October 2024, you can pay and join Part 2 of
                the next training cohort, which will be in December 2024/January
                2025.
              </p>
              <p className="mt-3">
                Certificate of completion is awarded after completing all
                Program parts successfully with good performance during the
                training.
              </p>
            </>
          )}
          {pageType === "frontend" && (
            <>
              <p className="italic mt-3">
                Save money when you pay for Parts 1 & 2 together (at once).
              </p>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base w-[70%]">
                  Parts 1 & 2 together - Fully Online. Pay N890K (Instead of
                  990k. Save 100k)
                </p>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <CheckIcon />
                </div>
                <p className="mt-.5 text-[13px] md:text-base w-[70%]">
                  Parts 1 & 2 together - Hybrid. Pay N990K (Instead of 1.19M.
                  Save 200k)
                </p>
              </div>
              <h1>Note:</h1>
              <p>
                {" "}
                * If you are unable to pay for Part 2 before its commencement
                date on Thurs 22nd October 2024, you can pay and join Part 2 of
                the next training cohort, which will be in December 2024/January
                2025.
              </p>
              <p className="mt-3">
                Certificate of completion is awarded after completing Program
                Parts 1 & 2 successfully with good performance during the
                training.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
