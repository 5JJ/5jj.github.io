import Skill from "./Skill";
import skillData, { title as skillTitle } from "@constants/skills";

type SkillSetProps = {
  type: keyof typeof skillTitle;
};

const SkillSet = (props: SkillSetProps) => {
  const { type } = props;

  const title = skillTitle[type];

  return (
    <div className="flex p-10 flex-col sm:flex-row">
      <div className="min-w-150 flex-shrink-0 py-10 px-10 font-bold text-[1.2em]">
        {title}
      </div>
      <ul className="flex flex-wrap items-center">
        {skillData[type].map((skill) => (
          <li key={skill} className="m-2">
            <Skill text={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
