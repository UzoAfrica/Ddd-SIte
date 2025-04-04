import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DecagonLogo from "../../assets/decagonLogo.svg";

const JoinWaitlistModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="bg-[#34A853] text-white px-4 py-2 rounded">
        Join Waitlist
      </button>

      {isOpen && (
        <div id = "waitlist" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <h2 className="text-lg font-bold text-center mb-4">Join the waitlist!</h2>
            <p className="text-sm text-center mb-4">You’ll be the first to know once there is an update on the next cohort</p>
            <form>
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="E.g example@gmail.com"
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-[#34A853] text-white py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const RegisterNav = () => {
  return (
    <nav className="fixed top-0 w-full h-20 bg-white py-2 font-inter z-[999]">
      <div className="border-b-[1px] border-[#D0D5DD]">
        <div className="mx-auto max-w-screen-xl container md:px-6 px-3 my-[18px] ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                className="w-[100px] h-[30px] md:h-[38px] md:w-[177px]"
                src={DecagonLogo}
                alt="decagon logo"
              />
            </Link>
            <JoinWaitlistModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RegisterNav;
