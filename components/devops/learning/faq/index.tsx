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
    <section className="pb-20 md:py-0 mt-10" id="faq">
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
