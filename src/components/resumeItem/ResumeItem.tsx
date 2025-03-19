import { Key } from "react";
import "./resumeItem.scss";

type Props = { 
  title: string; 
  date: string; 
  content: Array<{ __html: string }>;
};

export default function ResumeItem({ title, date, content }: Props) {
  return (
    <div className="resumeItem">
      <span className="circle"></span>
      <h3>{title}</h3>
      <span>{date}</span>
      <ul>
        {content.map((line, i: Key) => (
          line ? <li key={i} dangerouslySetInnerHTML={line}></li> : null
        ))}
      </ul>
    </div>
  );
}
