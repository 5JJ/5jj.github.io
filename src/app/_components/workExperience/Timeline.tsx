"use client";

import { Timeline } from "./types";
import WorkExperience from "./WorkExperience";
import LinkIcon from "@icons/link_icon.svg";
import Popup from "./_components/Popup";
import { useState } from "react";

type TimelineData = Timeline[];

const Timeline = () => {
  // TODO: get data list from props;
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

  data.sort((prev, next) => next.timelineYear - prev.timelineYear);

  const [open, setOpen] = useState<boolean>(false);

  const onMouseEnter = () => {};

  const onMouseLeave = () => {};

  const openPopup = (clickedYear: number) => {
    setOpen(true);
  };
  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div>
      <ul>
        {data.map(({ timelineYear, workExperience }) => (
          <li className="flex" key={timelineYear}>
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="m-x-20 py-20 pl-20 relative flex-shrink-0"
            >
              <div className="relative z-10 flex">
                <span className="rounded-50 border-8 inline-block border-black_main w-16 h-16 self-center"></span>
                <span className="pl-10">{timelineYear}</span>
              </div>
              <div className="border-2 absolute h-full top-0 left-[25.5px] border-black_main"></div>
            </div>
            <div className="p-20 flex-auto">
              <WorkExperience {...workExperience} />
            </div>
            <div className="p-20 flex-shrink-0">
              <button onClick={() => openPopup(timelineYear)}>
                <LinkIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Popup open={open} closePopup={closePopup} />
    </div>
  );
};

export default Timeline;
