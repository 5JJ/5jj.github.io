"use client";

import Image, { StaticImageData } from "next/image";
import { useTheme } from "../theme/ThemeContext";

type SkillProps = {
  text: string;
  icon?: StaticImageData;
};

const Skill = (props: SkillProps) => {
  const { text, icon } = props;

  const { theme } = useTheme();

  return (
    <div
      className={`border-1 px-10 py-6 rounded-2 border-black_main hover:text-${theme}-point_sub hover:bg-black_main`}
    >
      {!!icon && <Image src={icon} alt={text} />}
      <span>{text}</span>
    </div>
  );
};

export default Skill;
