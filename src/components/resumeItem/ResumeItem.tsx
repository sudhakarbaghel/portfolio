import { Key } from "react";
import "./resumeItem.scss";

type Props = {
  titleHtml: string;
  date: string;
  content: Array<{ __html: string }>;
};

export default function ResumeItem({ titleHtml, date, content }: Props) {
  return (
    <div className="resumeItem">
      <span className="circle"></span>
      <h3 dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <span>{date}</span>
      <ul>
        {content.map((line, i: Key) => (
          line ? <li key={i} dangerouslySetInnerHTML={line}></li> : null
        ))}
      </ul>
    </div>
  );
}
