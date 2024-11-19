import Skill from "../skills/Skill";
import CompanyInfo from "./_components/CompanyInfo";
import Period from "./_components/Period";
import type { WorkExperience as WorkExperienceProps } from "./types";

const WorkExperience = (props: WorkExperienceProps) => {
  const { companyInfo, startDate, endDate, summary, usedSkills } = props;

  return (
    <div>
      <Period startDate={startDate} endDate={endDate} />
      <CompanyInfo {...companyInfo} />
      <p>{summary}</p>
      <div>{/** projects */}</div>
      <ul className="flex flex-wrap">
        {usedSkills.map((skill) => (
          <li key={skill} className="m-2">
            <Skill text={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
