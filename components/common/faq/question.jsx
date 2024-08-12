import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <article className="py-4 lg:py-5 my-2 bg-[#F8F8F8] lg:rounded-[18px] px-4 lg:px-8">
        <header className="flex justify-between">
          <h4 className="w-[90%] md:w-full text-base md:text-lg text-secondary-text font-bold mb-0">
            {title}
          </h4>
          <button className="" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? (
              <AiOutlineMinus size={'20px'} />
            ) : (
              <AiOutlinePlus size={'20px'} />
            )}
          </button>
        </header>
        {showInfo && (
          <p className="text-sm md:text-base leading-[22px] mb-0 pt-[18px] lg:pt-[29px]">
            {info}
          </p>
        )}
      </article>
      
    </>
  );
};

export default Question;


