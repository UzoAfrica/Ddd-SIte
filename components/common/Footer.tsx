import React from "react";
import DecagonLogo from "../../assets/decagonLogo.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-8 border-t border-gray-300 w-full flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Top Section: Logo & Email */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          
          {/* Logo and Address */}
          <div className="flex flex-col items-start space-y-3">
            <Link href="/">
              <Image src={DecagonLogo} alt="Decagon Logo" width={150} />
            </Link>
            <p className="text-gray-600 text-sm">
              <strong>Address:</strong> Orchid Rd, Lekki Penninsula II, Lagos 106104, Nigeria
            </p>
          </div>

          {/* Email Section */}
          <div className="flex w-full max-w-md">
            <input
              type="text"
              value="recruit@decagonhq.com"
              readOnly
              className="px-4 py-3 flex-1 outline-none bg-white text-gray-700 border border-gray-400 rounded-l-full"
            />
            <button className="bg-green-500 text-white px-6 py-3 rounded-r-full">
              Mail Us Now
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright and Social Links */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© Decagon Institute 2025</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-black">E-mail ✉️</a>
            <a href="#" className="text-gray-600 hover:text-black">Instagram 📸</a>
            <a href="#" className="text-gray-600 hover:text-black">X (Twitter) ❌</a>
            <a href="#" className="text-gray-600 hover:text-black">LinkedIn 🔗</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


//   export default function Footer() {
//   return (
//     <div className="pt-10 bg-[#1D2939] text-white">
//       <div className="mx-auto container max-w-screen-xl px-8">
//         <div className="md:mx-auto w-[135px] md:mt-4 pb-5">
//           <Link href="/"><Image src={DeacgonLightLogo} alt="data analyisi" width={135} /></Link>
//         </div>
//         <div className="pt-6 pb-4 md:pt-[74px] md:pb-[60px] border-t md:border-none">
//           <div className="flex flex-col md:flex md:flex-row justify-between">
//             <div className="flex gap-1 flex-col-reverse xl:flex xl:flex-row items-center xl:gap-20">
//               <div className="text-sm md:text-base -ml-16 xl:ml-0">
//                 &copy; {new Date().getFullYear().toString()} Decagon Institute.
//                 All rights reserved
//               </div>
//               {/* <p className="mt-4 text-sm font-[200]">Orchid Rd, Lekki Penninsula II, Lagos 106104, Lagos, Nigeria.</p> */}
//               <p className="text-sm md:text-base">Contact us: recruit@decagonhq.com or 07080992833</p>
//             </div>
//             <div className="flex gap-3 mt-6 md:mt-0">
//               <div>
//                 <a
//                   href="https://www.instagram.com/decagon_institute?igsh=MWo4OWl1NmpkcTVpMw%3D%3D"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <svg
//                     width="24"
//                     height="25"
//                     viewBox="0 0 24 25"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       opacity="0.1"
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M0 12.1982C0 5.57083 5.37258 0.198242 12 0.198242C18.6274 0.198242 24 5.57083 24 12.1982C24 18.8257 18.6274 24.1982 12 24.1982C5.37258 24.1982 0 18.8257 0 12.1982Z"
//                       fill="white"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M12.0007 5.79834C10.2625 5.79834 10.0444 5.80594 9.36174 5.83701C8.6804 5.86821 8.21533 5.97608 7.80839 6.13434C7.38745 6.29781 7.03038 6.51648 6.67464 6.87235C6.31864 7.22809 6.09997 7.58516 5.93597 8.00596C5.7773 8.41303 5.6693 8.87824 5.63863 9.55931C5.6081 10.242 5.6001 10.4603 5.6001 12.1984C5.6001 13.9366 5.60783 14.154 5.63876 14.8367C5.6701 15.518 5.77797 15.9831 5.9361 16.39C6.0997 16.811 6.31837 17.1681 6.67424 17.5238C7.02985 17.8798 7.38692 18.099 7.80759 18.2625C8.21479 18.4207 8.68 18.5286 9.3612 18.5598C10.0439 18.5909 10.2619 18.5985 11.9999 18.5985C13.7382 18.5985 13.9557 18.5909 14.6383 18.5598C15.3197 18.5286 15.7853 18.4207 16.1925 18.2625C16.6133 18.099 16.9698 17.8798 17.3254 17.5238C17.6814 17.1681 17.9001 16.811 18.0641 16.3902C18.2214 15.9831 18.3294 15.5179 18.3614 14.8368C18.3921 14.1542 18.4001 13.9366 18.4001 12.1984C18.4001 10.4603 18.3921 10.2421 18.3614 9.55945C18.3294 8.8781 18.2214 8.41303 18.0641 8.0061C17.9001 7.58516 17.6814 7.22809 17.3254 6.87235C16.9694 6.51635 16.6134 6.29768 16.1921 6.13434C15.7841 5.97608 15.3187 5.86821 14.6374 5.83701C13.9547 5.80594 13.7374 5.79834 11.9987 5.79834H12.0007ZM11.4265 6.95167C11.5969 6.9514 11.7871 6.95167 12.0007 6.95167C13.7095 6.95167 13.912 6.9578 14.5868 6.98847C15.2108 7.017 15.5495 7.12127 15.7751 7.20887C16.0738 7.32487 16.2867 7.46354 16.5106 7.68754C16.7346 7.91154 16.8733 8.12488 16.9895 8.42355C17.0771 8.64889 17.1815 8.98756 17.2099 9.61156C17.2406 10.2862 17.2473 10.4889 17.2473 12.1969C17.2473 13.9049 17.2406 14.1076 17.2099 14.7823C17.1814 15.4063 17.0771 15.745 16.9895 15.9703C16.8735 16.269 16.7346 16.4816 16.5106 16.7055C16.2866 16.9295 16.0739 17.0682 15.7751 17.1842C15.5498 17.2722 15.2108 17.3762 14.5868 17.4047C13.9122 17.4354 13.7095 17.442 12.0007 17.442C10.2917 17.442 10.0892 17.4354 9.41451 17.4047C8.7905 17.3759 8.45183 17.2716 8.2261 17.184C7.92743 17.068 7.71409 16.9294 7.49009 16.7054C7.26609 16.4814 7.12742 16.2686 7.01115 15.9698C6.92355 15.7444 6.81915 15.4058 6.79075 14.7817C6.76008 14.1071 6.75395 13.9044 6.75395 12.1953C6.75395 10.4862 6.76008 10.2846 6.79075 9.60996C6.81928 8.98595 6.92355 8.64728 7.01115 8.42168C7.12715 8.12301 7.26609 7.90968 7.49009 7.68567C7.71409 7.46167 7.92743 7.323 8.2261 7.20674C8.4517 7.11874 8.7905 7.01473 9.41451 6.98607C10.0049 6.9594 10.2337 6.9514 11.4265 6.95007V6.95167ZM15.417 8.01435C14.993 8.01435 14.649 8.35795 14.649 8.78209C14.649 9.20609 14.993 9.5501 15.417 9.5501C15.841 9.5501 16.185 9.20609 16.185 8.78209C16.185 8.35808 15.841 8.01435 15.417 8.01435ZM12.0007 8.91169C10.1856 8.91169 8.71401 10.3833 8.71401 12.1984C8.71401 14.0135 10.1856 15.4844 12.0007 15.4844C13.8158 15.4844 15.2869 14.0135 15.2869 12.1984C15.2869 10.3833 13.8158 8.91169 12.0007 8.91169ZM12.0007 10.065C13.1788 10.065 14.134 11.0201 14.134 12.1984C14.134 13.3765 13.1788 14.3317 12.0007 14.3317C10.8224 14.3317 9.86733 13.3765 9.86733 12.1984C9.86733 11.0201 10.8224 10.065 12.0007 10.065Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href="https://twitter.com/DecagonIns"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="25"
//                     viewBox="0 0 24 25"
//                     fill="none"
//                   >
//                     <path
//                       opacity="0.1"
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M0 12.1982C0 5.57083 5.37258 0.198242 12 0.198242C18.6274 0.198242 24 5.57083 24 12.1982C24 18.8257 18.6274 24.1982 12 24.1982C5.37258 24.1982 0 18.8257 0 12.1982Z"
//                       fill="white"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M11.6406 9.95219L11.6658 10.3674L11.2461 10.3166C9.71843 10.1217 8.38383 9.46069 7.25067 8.3506L6.69668 7.79979L6.55399 8.20654C6.25181 9.11326 6.44487 10.0708 7.0744 10.7148C7.41015 11.0708 7.33461 11.1216 6.75544 10.9098C6.55399 10.842 6.37772 10.7911 6.36093 10.8165C6.30218 10.8759 6.50363 11.647 6.66311 11.9521C6.88134 12.3758 7.32621 12.791 7.81305 13.0367L8.22434 13.2316L7.73751 13.2401C7.26746 13.2401 7.25067 13.2486 7.30103 13.4265C7.46891 13.9773 8.13201 14.5621 8.87066 14.8163L9.39108 14.9942L8.93781 15.2654C8.26631 15.6552 7.4773 15.8755 6.68829 15.8925C6.31057 15.901 6 15.9348 6 15.9603C6 16.045 7.02404 16.5196 7.61999 16.706C9.40786 17.2568 11.5315 17.0195 13.1263 16.0789C14.2595 15.4095 15.3926 14.079 15.9214 12.791C16.2068 12.1046 16.4922 10.8504 16.4922 10.2488C16.4922 9.85897 16.5174 9.80813 16.9874 9.34206C17.2644 9.07089 17.5246 8.7743 17.575 8.68956C17.6589 8.52855 17.6505 8.52855 17.2224 8.67261C16.509 8.92683 16.4083 8.89294 16.7608 8.5116C17.021 8.24044 17.3316 7.74894 17.3316 7.60488C17.3316 7.57946 17.2057 7.62183 17.063 7.6981C16.9119 7.78284 16.5761 7.90995 16.3243 7.98621L15.8711 8.13027L15.4598 7.85063C15.2331 7.6981 14.9142 7.52862 14.7463 7.47777C14.3182 7.35914 13.6635 7.37609 13.2774 7.51167C12.2282 7.893 11.5651 8.87599 11.6406 9.95219Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href="https://www.youtube.com/channel/UCCXDCRPka5mGokpPUn2FFpQ"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="25"
//                     viewBox="0 0 24 25"
//                     fill="none"
//                   >
//                     <path
//                       opacity="0.1"
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M0 12.1982C0 5.57083 5.37258 0.198242 12 0.198242C18.6274 0.198242 24 5.57083 24 12.1982C24 18.8257 18.6274 24.1982 12 24.1982C5.37258 24.1982 0 18.8257 0 12.1982Z"
//                       fill="white"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M17.0009 8.073C17.5517 8.22414 17.9854 8.66945 18.1326 9.23495C18.4001 10.2599 18.4001 12.3983 18.4001 12.3983C18.4001 12.3983 18.4001 14.5367 18.1326 15.5617C17.9854 16.1272 17.5517 16.5725 17.0009 16.7237C16.0028 16.9983 12.0001 16.9983 12.0001 16.9983C12.0001 16.9983 7.99741 16.9983 6.99923 16.7237C6.44846 16.5725 6.01472 16.1272 5.86752 15.5617C5.6001 14.5367 5.6001 12.3983 5.6001 12.3983C5.6001 12.3983 5.6001 10.2599 5.86752 9.23495C6.01472 8.66945 6.44846 8.22414 6.99923 8.073C7.99741 7.79834 12.0001 7.79834 12.0001 7.79834C12.0001 7.79834 16.0028 7.79834 17.0009 8.073ZM10.8001 10.5983V14.5983L14.0001 12.5984L10.8001 10.5983Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
