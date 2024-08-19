import React from "react";
import PartOne from "../assets/l1.svg";
import PartTwo from "../assets/l2.svg";
import ProgramPart from "./ProgramPart";
import PartThree from "../assets/course-icon.svg";


interface ILearning {
  pageType: "main" | "fullstack" | "frontend";
}

const firstCourse = [
  "Introduction to Git",
  "Introduction to Basic HTML/CSS",
  "Core Java Basics",
  "Introduction to OOP",
  "Java Collection Framework",
  "Exception Handling",
  "File Writing and Reading (Input/Output)",
  "Introduction to Unit Testing"
];



const secondCourse = [
  "Advanced Java",
  "Java Functional Programming",
  "Threads, Concurrency, and",
  "Networking  SQL, JDBC, Servlet",
  "Spring Core, Spring MVC",
  "Spring Boot, Hibernate / JPA",
  "Introduction to SQL (MySQL, PostgreSQL)",
  "Spring Security, JWT",
   "Docker, CI/CD, GitHub Actions"
];

const thirdCourse = [
  "Introduction to React ",
  "React State Management",
  "React Router",
  "Final Project",
  "Certificate of Completion ",
  "Complimentary Application Guidance for a Tech Masters abroad",
];
 
const frontendCourse = [
  "Basic HTML",
  "Advanced HTML",
  "Basic CSS ",
  "Advanced CSS",
  "Basic JavaScript",
  "Advanced JavaScript"
];

const frontendAdavnce = [
  "Introduction to React",
  "React State Management",
  "React Router",
  "Advanced React Concepts",
  "Final Project",
  "Certificate of Completion ", 
  "Complimentary Application Guidance for a Tech Masters abroad"
];



function Learning({ pageType }: ILearning) {
  return (
    <div className="">
      <div className="mx-auto container max-w-screen-xl py-5 lg:py-[100px] md:px-8 px-3">
        <h1 className="text-center mb-[53px] text-2xl md:text-[46px] font-[700]">
          What you will <span className="text-[#34A853]">learn</span>
        </h1>
       {pageType === "fullstack" && (
           <div className="grid md:grid-cols-3 gap-10">
           <ProgramPart
             img={PartOne}
             firstCourse={firstCourse}
             title="Program Part 1"
             subtitle="(first 6 weeks)"
           />
           <ProgramPart
             img={PartTwo}
             firstCourse={secondCourse}
             title="Program Part 2"
             subtitle="(second 6 weeks)"
           />
           <ProgramPart
             img={PartThree}
             firstCourse={thirdCourse}
             title="Program Part 3"
             subtitle="(second 6 weeks)"
           />
         </div>
       )}
       {pageType === "frontend" && (
           <div className="grid md:grid-cols-2 gap-10">
           <ProgramPart
             img={PartOne}
             firstCourse={frontendCourse}
             title="Program Part 1"
             subtitle="(first 6 weeks)"
           />
           <ProgramPart
             img={PartTwo}
             firstCourse={frontendAdavnce}
             title="Program Part 2"
             subtitle="(second 6 weeks)"
           />
         </div>
       )}
      </div>
    </div>
  );
}

export default Learning;
