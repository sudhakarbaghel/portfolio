import "./skill.scss";

type Props = { skill: string; Icon?: React.ComponentType };

export default function Skill({ skill, Icon }: Props) {
  return (
    <div className="skill">
      <span>{skill}</span>
      {Icon && <Icon />}
    </div>
  );
}
