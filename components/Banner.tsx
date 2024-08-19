
interface IBanner {
  pageType: "fullstack" | "parent" | "frontend";
}
function Banner({pageType}: IBanner) {
  return (
   <div className="bg-[#F7F8F8] py-[47px] mb-[56px]">
         <div className="mx-auto max-w-screen-xl container md:px-6 px-3">
          {pageType === "fullstack"  && (
              <p className="text-center font-[600]">Certificate of completion is awarded after completing Program Parts 1, 2, & 3 successfully with good performance during the training.</p>
          )}
          {pageType === "frontend"  && (
              <p className="text-center font-[600]">Certificate of completion is awarded after completing Program Parts 1 & 2 successfully with good performance during the training.</p>
          )}
        </div>
   </div>
  )
}

export default Banner  