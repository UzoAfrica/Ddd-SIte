"use client"
import React, { useState } from "react";
import Link from "next/link";
import {question} from "./data";
import SingleQuestion from "./question";


export default function Faq() {
  const [questions, setQuestions] = useState(question.slice(0, 8));
  const [show, setShow] = useState(true);

  const showMore = () => {
    setQuestions(question.slice(0, question.length));
    setShow(false);
  };

  return (
    <section className="mx-auto container max-w-screen-xl py-[50px] md:px-8 px-3" id="faq">
      <h3 className="text-2xl text-secondary-text text-center lg:text-[40px] font-[600] mb-4 py-3">
        Frequently Asked Questions
      </h3>
      <div>
        { questions.map((question) => {
          return (
            <SingleQuestion key={question.id} {...question}></SingleQuestion>
          );
        })}
      </div>
    </section>
  );
}
