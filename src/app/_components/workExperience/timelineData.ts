import type { Timeline } from "./types";

type TimelineData = Timeline[];

const data: TimelineData = [
  {
    timelineYear: 2018,
    workExperience: {
      companyInfo: {
        //logo?: ,
        companyName: "Reebonz Korea",
        workplace: "Seoul, South Korea",
        url: "https://reebonz.co.kr",
      },
      summary: "",
      usedSkills: ["JS"],
      position: "Frontend Engineer",
      projects: [],
      startDate: "2018-09-01T00:00:00Z",
      endDate: "2021-06-01T00:00:00Z",
    },
  },
  {
    timelineYear: 2021,
    workExperience: {
      companyInfo: {
        companyName: "Jandi (Tosslab)",
        workplace: "Seoul, South Korea",
        url: "https://www.jandi.com/landing",
      },
      summary: "",
      usedSkills: ["JS", "NextJs", "ReactJS", "TypeScript", "Storybook"],
      position: "Frontend Engineer",
      projects: [],
      startDate: "2021-06-01T00:00:00Z",
      endDate: "2022-07-01T00:00:00Z",
    },
  },
  {
    timelineYear: 2022,
    workExperience: {
      companyInfo: {
        //logo?: ,
        companyName: "Kokozi",
        workplace: "Seoul, South Korea",
        url: "https://kokozi.com",
      },
      summary: "",
      usedSkills: ["JS"],
      position: "Frontend Engineer",
      projects: [],
      startDate: "2022-07-01T00:00:00Z",
      endDate: "2024-08-01T00:00:00Z",
    },
  },
];

export default data;
