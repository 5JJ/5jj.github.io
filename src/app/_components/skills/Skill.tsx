import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type SkillProps = {
  text: string;
  icon?: StaticImageData;
};

const Skill = (props: SkillProps) => {
  const { text, icon } = props;

  return (
    <div className="border-1 px-10 py-6 rounded-2">
      {!!icon && <Image src={icon} alt={text} />}
      <span>{text}</span>
    </div>
  );
};

export default Skill;
