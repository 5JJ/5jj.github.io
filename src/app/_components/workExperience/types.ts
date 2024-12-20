import { StaticImageData } from "next/image";
import skills from "@constants/skills";

type LanuageSkills = (typeof skills)["languages"];
type TechnologySKills = (typeof skills)["technologies"];

export type ISOString = string;
type Project = {
  title: string;
  description: string;
  startDate?: ISOString;
  endDate?: ISOString;
  // TODO: add type for attachments like a screenshot or a video
  link?: string;
};

export type CompanyInfo = {
  logo?: StaticImageData;
  companyName: string;
  workplace: string;
  url?: string;
};

export type WorkExperience = {
  companyInfo: CompanyInfo;
  summary: string;
  usedSkills: (LanuageSkills[number] | TechnologySKills[number])[];
  position: string;
  projects: Project[];
  startDate: ISOString;
  endDate?: ISOString;
  contractType: "full-time" | "contract";
};

export type Timeline = {
  timelineYear: number;
  workExperience: WorkExperience;
};
