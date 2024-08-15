"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  devopsQuestion,
  frontendQuestion,
  fullstackQuestion,
  question,
} from "./data";
import SingleQuestion from "./question";

interface IFAQ {
  pageType: "frontend" | "fullstack" | "devops";
}

export default function Faq({ pageType }: IFAQ) {
  const [questions, setQuestions] = useState(question.slice(0, 8));
  const [frontendQuestions, setFrontendQuestions] = useState(
    frontendQuestion.slice(0, 8)
  );
  const [fullstackQuestions, setFullstackQuestions] = useState(
    fullstackQuestion.slice(0, 8)
  );
  const [devopsQuestions, setDevopsQuestions] = useState(
    devopsQuestion.slice(0, 8)
  );
  const [show, setShow] = useState(true);

  const showMore = () => {
    setQuestions(question.slice(0, question.length));
    setShow(false);
  };

  return (
    <section
      className="mx-auto container max-w-screen-xl py-[50px] md:px-8 px-3"
      id="faq"
    >
      <h3 className="text-2xl text-secondary-text text-center lg:text-[40px] font-[600] mb-4 py-3">
        Frequently Asked Questions
      </h3>
      {pageType === "fullstack" && (
        <div>
          {fullstackQuestions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      )}
      {pageType === "frontend" && (
        <div>
          {frontendQuestions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      )}
      {pageType === "devops" && (
        <div>
          {devopsQuestions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      )}
    </section>
  );
}
