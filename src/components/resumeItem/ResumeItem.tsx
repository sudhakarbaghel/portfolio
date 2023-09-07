import "./resumeItem.scss";

type Props = { title: string; date: string; content: string[] };

export default function ResumeItem({title,date,content}: Props) {
  return (
    <div className="resumeItem">
      <span className="circle"></span>
      <h3>{title}</h3>
      <span>{date}</span>
      <ul>
        {content.map((line, i) => {
          return <li key={i}>{line}</li>;
        })}
      </ul>
    </div>
  );
}
