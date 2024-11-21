"use client";

import WorkExperience from "./WorkExperience";
import LinkIcon from "@icons/link_icon.svg";
import Popup from "./_components/Popup";
import { useState } from "react";
import TimelineItem from "./_components/TimelineItem";
import data from "./timelineData";

const Timeline = () => {
  data.sort((prev, next) => next.timelineYear - prev.timelineYear);

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const openPopup = (clickedIndex: number) => {
    setSelectedIndex(clickedIndex);
  };
  const closePopup = () => {
    setSelectedIndex(-1);
  };

  return (
    <div>
      <ul>
        {data.map(({ timelineYear, workExperience }, index) => (
          <li className="flex" key={timelineYear}>
            <div className="m-x-20 flex-shrink-0 pl-20 pr-50">
              <TimelineItem text={timelineYear} />
            </div>

            <div className="px-10 py-20 sm:p-20 flex-auto break-all">
              <WorkExperience {...workExperience} />
            </div>
            <div className="p-20 flex-shrink-0 pl-0">
              <button onClick={() => openPopup(index)}>
                <LinkIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Popup
        open={selectedIndex !== -1}
        closePopup={closePopup}
        initialItemIndex={selectedIndex}
      />
    </div>
  );
};

export default Timeline;
