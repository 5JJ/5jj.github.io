import type { Timeline } from "./types";

type TimelineData = Timeline[];

const data: TimelineData = [
  {
    timelineYear: 2017,
    workExperience: {
      companyInfo: {
        //logo?: ,
        companyName: "Reebonz Korea",
        workplace: "Seoul, South Korea",
        url: "https://reebonz.co.kr",
      },
      contractType: "full-time",
      summary: "",
      usedSkills: ["MySQL", "Ruby on Rails"],
      position: "Backend Engineer",
      projects: [],
      startDate: "2017-09-01T00:00:00+09:00",
      endDate: "2018-08-01T00:00:00+09:00",
    },
  },
  {
    timelineYear: 2018,
    workExperience: {
      companyInfo: {
        //logo?: ,
        companyName: "Reebonz Korea",
        workplace: "Seoul, South Korea",
        url: "https://reebonz.co.kr",
      },
      contractType: "full-time",
      summary: "",
      usedSkills: [
        "JavaScript",
        "Ruby on Rails",
        "MySQL",
        "JQuery",
        "Bootstrap",
        "SASS",
      ],
      position: "Frontend Engineer",
      projects: [],
      startDate: "2018-08-01T00:00:00+09:00",
      endDate: "2021-05-21T00:00:00+09:00",
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
      contractType: "full-time",
      summary: "",
      usedSkills: [
        "JavaScript",
        "NextJS",
        "React",
        "TypeScript",
        "Redux",
        "SASS",
        "Storybook",
        "AngularJS",
        "JQuery",
      ],
      position: "Frontend Engineer",
      projects: [],
      startDate: "2021-05-24T00:00:00+09:00",
      endDate: "2022-07-04T00:00:00+09:00",
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
      usedSkills: [
        "JavaScript",
        "TypeScript",
        "Firebase",
        "React Native",
        "React",
        "React-testing-library",
        "Mobx",
        "Tailwind CSS",
        "React Query",
      ],
      contractType: "full-time",
      position: "Frontend Engineer",
      projects: [],
      startDate: "2022-07-04T00:00:00+09:00",
      endDate: "2024-08-02T00:00:00+09:00",
    },
  },
];

export default data;
