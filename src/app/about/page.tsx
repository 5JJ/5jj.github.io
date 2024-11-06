import { withLayout } from "../_components/LayoutWrapper";
import Profile from "../_components/profile";
import SkillSet from "../_components/skills/Skillset";

const About = () => {
  return (
    <div>
      <section>
        <h1>HI, I&apos;m Jeonghui Oh</h1>
        <Profile />
      </section>
      <section>
        {/** TODO: add a common header  */}
        <h2 className="text-[#ffd44c] font-bold text-20">SKILLS</h2>
        <SkillSet type="languages" />
        <SkillSet type="technologies" />
        <SkillSet type="soft" />
      </section>
      <section>
        {/** TODO: add a common header  */}
        <h2>WORK EXPERIENCE</h2>
      </section>
    </div>
  );
};

export default withLayout(About);
