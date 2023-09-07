"use client";
import "./button.scss";
import { usePathname } from "next/navigation";

type Props = { Icon: any; title: string };

export default function Button({ Icon, title }: Props) {
  const path = usePathname();
 
  const isMatch = path.includes(title.toLowerCase()) || (path==='/' && title.toLowerCase()==='about');
  const buttonClassName = `button${isMatch ? " selected" : ""}`;


  return (
    <div className="buttonComp">
      <button className={buttonClassName}>
        <Icon />
        <span>{title}</span>
      </button>
    </div>
  );
}
