import ExperienceIcon from "@/components/svgComps/ExperienceIcon";
import Underline from "@/components/svgComps/Underline";
import "./resume.scss";
import ResumeItem from "@/components/resumeItem/ResumeItem";
import { ExpData, EduData } from "@/utils/Data/ExperienceData";
import EducationIcon from "@/components/svgComps/EducationIcon";
import SkillsIcon from "@/components/svgComps/SkillsIcon";
import Skill from "@/components/skill/Skill";
import NodeIcon from "@/components/svgComps/skillsIcon/NodeIcon";
import MySqlIcon from "@/components/svgComps/skillsIcon/MySqlIcon";
import TagIcon from "@/components/svgComps/skillsIcon/TagIcon";
import HtmlIcon from "@/components/svgComps/skillsIcon/HtmlIcon";
import CssIcon from "@/components/svgComps/skillsIcon/CssIcon";
import ScssIcon from "@/components/svgComps/skillsIcon/ScssIcon";
import NextIcon from "@/components/svgComps/skillsIcon/NextIcon";
import ReactIcon from "@/components/svgComps/skillsIcon/ReactIcon";
import ExpressIcon from "@/components/svgComps/skillsIcon/ExpressIcon";
import ReduxIcon from "@/components/svgComps/skillsIcon/ReduxIcon";
import MongoIcon from "@/components/svgComps/skillsIcon/MongoIcon";
import ScrapingIcon from "@/components/svgComps/skillsIcon/ScrapingIcon";
import AlgoIcon from "@/components/svgComps/skillsIcon/AlgoIcon";
import DataStrucIcon from "@/components/svgComps/skillsIcon/DataStrucIcon";
import TsIcon from "@/components/svgComps/skillsIcon/TsIcon";
import AntDesignIcon from "@/components/svgComps/skillsIcon/AntdIcon";
import AuthIcon from "@/components/svgComps/skillsIcon/AuthIcon";
import LinuxIcon from "@/components/svgComps/skillsIcon/LinuxIcon";
import AwsIcon from "@/components/svgComps/skillsIcon/AwsIcon";
import SolidityIcon from "@/components/svgComps/skillsIcon/SolidityIcon";
type Props = {};

export default function Resume({}: Props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <Underline />
      <div className="resumeSkills">
        <h2>
          <SkillsIcon />
          Skills
        </h2>
        <div className="resumeSkillsContent">
          <Skill skill="C++" Icon={TagIcon} />
          <Skill skill="Data Structures" Icon={DataStrucIcon} />
          <Skill skill="Algorithms" Icon={AlgoIcon} />
          <Skill skill="HTML" Icon={HtmlIcon} />
          <Skill skill="CSS" Icon={CssIcon} />
          <Skill skill="SCSS" Icon={ScssIcon} />
          <Skill skill="React.js" Icon={ReactIcon} />
          <Skill skill="Next.js" Icon={NextIcon} />
          <Skill skill="TypeScript.js" Icon={TsIcon} />
          <Skill skill="Redux" Icon={ReduxIcon} />
          <Skill skill="Node.js" Icon={NodeIcon} />
          <Skill skill="Express.js" Icon={ExpressIcon} />
          <Skill skill="My Sql" Icon={MySqlIcon} />
          <Skill skill="Mongo DB" Icon={MongoIcon} />
          <Skill skill="OAuth 2.O" Icon={AuthIcon} />
          <Skill skill="Linux" Icon={LinuxIcon} />
          <Skill skill="Mongo DB" Icon={MongoIcon} />
          <Skill skill="Web Scraping" Icon={ScrapingIcon} />
          <Skill skill="Ant Design" Icon={AntDesignIcon} />
          <Skill skill="AWS" Icon={AwsIcon} />
          <Skill skill="Solidity" Icon={SolidityIcon} />
        </div>
      </div>
      <h2>
        <ExperienceIcon />
        Experience
      </h2>
      {ExpData.map((item, index) => {
        return (
          <ResumeItem
            title={item.title}
            date={item.date}
            content={item.content.map((line) => ({ __html: line }))}
            key={index}
          />
        );
      })}
      <div className="resumeItems">
        <div>
          <h2>
            <EducationIcon />
            Education
          </h2>
          {EduData.map((item, index) => {
            return (
              <ResumeItem
                title={item.title}
                date={item.date}
                content={item.content.map((line) => ({ __html: line }))}
                key={index}
              />
            );
          })}
        </div>
        {/* <div>
          <h2>
            <EducationIcon />
            Education
          </h2>
          {EduData.map((item, index) => {
            return (
              <ResumeItem
                title={item.title}
                date={item.date}
                content={item.content}
                key={index}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
}
