import Skill from "./Skill";
import SkillData from "../../../data/skills";

type SkillSetProps = {
  type: keyof typeof SkillData.title;
};

const SkillSet = (props: SkillSetProps) => {
  const { type } = props;

  const title = SkillData.title[type];

  return (
    <div className="flex p-10">
      <div className="min-w-150 flex-shrink-0 pt-10 px-10 font-bold text-[1.2em]">
        {title}
      </div>
      <ul className="flex flex-wrap">
        {SkillData[type].map((skill) => (
          <li key={skill} className="m-2">
            <Skill text={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
