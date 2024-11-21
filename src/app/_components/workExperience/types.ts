import { StaticImageData } from "next/image";

type LanuageSkills = "JS" | "TypeScript";
type TechnologySKills =
  | "NextJs"
  | "ReactJS"
  | "Ruby on Rails"
  | "Jest"
  | "React-testing-library"
  | "React Native"
  | "Storybook";

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
  usedSkills: (LanuageSkills | TechnologySKills)[];
  position: string;
  projects: Project[];
  startDate: ISOString;
  endDate?: ISOString;
};

export type Timeline = {
  timelineYear: number;
  workExperience: WorkExperience;
};
