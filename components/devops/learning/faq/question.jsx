import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <article className="py-0 my-1">
        <header className="flex justify-between bg-[#F8F8F8] px-6 py-4">
          <h4 className="w-[90%] md:w-full text-base md:text-lg text-secondary-text font-[500] mb-0">
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
          <p className="text-sm md:text-base leading-[22px] bg-white mb-0 pt-[10px] lg:pt-[29px] pb-4 px-8">
            {info}
          </p>
        )}
      </article>
      
    </>
  );
};

export default Question;
