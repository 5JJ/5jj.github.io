import { withLayout } from "../_components/LayoutWrapper";
import Profile from "../_components/profile";
import SkillSet from "../_components/skills/Skillset";

const About = () => {
  return (
    <div>
      <section>
        <Profile />
      </section>
      <section className="bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border-black rounded-14 rounded-tl-0 relative mt-50">
        {/** TODO: add a common header  */}
        <h2 className="text-[#ffd44c] font-bold text-30 absolute top-[-20px] left-3 ">
          SKILLS
        </h2>
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
