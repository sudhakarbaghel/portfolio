import "./portfolioItem.scss";
import Pic from "../../../public/pass.jpeg";
import Image from "next/image";

type Props = {
  certificateLink: string | null;
  githubLink: string | null;
  techStack: string;
  imgSrc: string;
  portfolioType: string;
  heading: string;
  classV:string
};

export default function PortfolioItem({
  portfolioType,
  certificateLink,
  githubLink,
  techStack,
  imgSrc,
  heading,
  classV
}: Props) {
  return (
    <div className={`portfolioItem ${classV}`}>
      <div className="portfolioItemWrap">
        <span>{portfolioType}</span>
        <div className="portfolioItemImg">
          <img
            src={imgSrc}
            alt="Picture of the author"
          
          />
        </div>
        <div className="portfolioItemContent">
          <span>Tech-Stack: {techStack}</span>
        </div>
      </div>
      <h4>{heading}</h4>
      <div>
        {certificateLink && (
          <a target="_blank" href={certificateLink}>
            <div>{portfolioType} Link</div>
          </a>
        )}
        {githubLink && (
          <a target="_blank" href={githubLink}>
            <div>Github</div>
          </a>
        )}
      </div>
    </div>
  );
}
