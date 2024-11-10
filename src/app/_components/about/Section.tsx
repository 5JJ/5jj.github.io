import { Colors } from "../../../../colors";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
  titleColor?: keyof typeof Colors;
}>;

const Section = (props: SectionProps) => {
  const { children, title, titleColor } = props;

  return (
    // polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)
    <section className="bg-white/15 backdrop-filter backdrop-blur-lg rounded-10 relative mt-40 shadow-lg pt-20 pb-10 overflow-hidden cursor-default ring-1 ring-black/10">
      <h3
        className="text-[#ffc714] font-bold text-24 pb-20 text-center"
        style={titleColor && { color: Colors[titleColor] }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
};

export default Section;
