"use client"
import Underline from "@/components/svgComps/Underline";
import initGA from "@/utils/Analytics/analytics";
import "./page.scss";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <div className="about">
      <h1>About Me</h1>
      <Underline />
      <p>
        Hello, I am <strong>Sudhakar Singh Baghel</strong>, a passionate and
        skilled software engineer with expertise in various technologies. I hold
        a B.Tech(2023) degree in Electronics & Communication Engineering from{" "}
        <strong>Lakshmi Narain College of Technology (LNCT)</strong> in Bhopal,
        Madhya Pradesh, India.
      </p>
      <p>
        My professional journey has been focused on software and web development, and I have
        gained proficiency in languages such as <strong>C++</strong>,{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>JavaScript/TypeScript</strong>. I have a strong understanding of data
        structures, algorithms, and database management systems like{" "}
        <strong>MySQL</strong>, <strong>MongoDB</strong>, and <strong>DynamoDB</strong>. Additionally, I
        have experience in working with modern frameworks, cloud architectures, and methodologies such as{" "}
        <strong>Next.js</strong>, <strong>React.js</strong>,{" "}
        <strong>Node.js</strong>, <strong>Nest.js</strong>,{" "}
        <strong>Redux</strong>, <strong>AWS (SQS, Kinesis)</strong>, <strong>Docker</strong>, and <strong>Microservices</strong>.
      </p>
      <p>
        Outside of my technical pursuits, I have achieved notable success on{" "}
        <strong>CODECHEF</strong> (4★ competitive programmer, max rating), with global rankings in various competitions.
      </p>
      <p>
        While technology remains a significant part of my life and career, I
        recognize the importance of embracing a well-rounded approach. By
        actively engaging in discussions, exploring diverse interests, and being
        open to new experiences, I strive to cultivate a balanced perspective
        that goes beyond the boundaries of technology.
      </p>
    </div>
  );
}
