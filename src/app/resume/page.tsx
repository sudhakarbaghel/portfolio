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
import DockerIcon from "@/components/svgComps/skillsIcon/DockerIcon";
import NestIcon from "@/components/svgComps/skillsIcon/NestIcon";
import DynamoDBIcon from "@/components/svgComps/skillsIcon/DynamoDBIcon";
import MicroservicesIcon from "@/components/svgComps/skillsIcon/MicroservicesIcon";
import GrpcIcon from "@/components/svgComps/skillsIcon/GrpcIcon";
import HardhatIcon from "@/components/svgComps/skillsIcon/HardhatIcon";

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
          <Skill skill="TypeScript" Icon={TsIcon} />
          <Skill skill="Redux" Icon={ReduxIcon} />
          <Skill skill="Node.js" Icon={NodeIcon} />
          <Skill skill="Express.js" Icon={ExpressIcon} />
          <Skill skill="MySQL" Icon={MySqlIcon} />
          <Skill skill="MongoDB" Icon={MongoIcon} />
          <Skill skill="OAuth" Icon={AuthIcon} />
          <Skill skill="Linux" Icon={LinuxIcon} />
          <Skill skill="Web Scraping" Icon={ScrapingIcon} />
          <Skill skill="Ant Design" Icon={AntDesignIcon} />
          <Skill skill="AWS" Icon={AwsIcon} />
          <Skill skill="AWS SQS" Icon={AwsIcon} />
          <Skill skill="AWS Kinesis" Icon={AwsIcon} />
          <Skill skill="DynamoDB" Icon={DynamoDBIcon} />
          <Skill skill="Nest.js" Icon={NestIcon} />
          <Skill skill="Docker" Icon={DockerIcon} />
          <Skill skill="Microservices" Icon={MicroservicesIcon} />
          <Skill skill="gRPC" Icon={GrpcIcon} />
          <Skill skill="Solidity" Icon={SolidityIcon} />
          <Skill skill="Hardhat" Icon={HardhatIcon} />
        </div>
      </div>
      <h2>
        <ExperienceIcon />
        Experience
      </h2>
      {ExpData.map((item, index) => {
        return (
          <ResumeItem
            titleHtml={item.titleHtml}
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
                titleHtml={item.title}
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
