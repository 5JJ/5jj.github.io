import Section from "../_components/about/Section";
import { withLayout } from "../_components/LayoutWrapper";
import Profile from "../_components/profile";
import SkillSet from "../_components/skills/Skillset";

const About = () => {
  return (
    <div>
      <section>
        <Profile />
      </section>
      {/**ring-1 ring-black/20 */}
      <Section title="SKILLS">
        <SkillSet type="languages" />
        <SkillSet type="technologies" />
        <SkillSet type="soft" />
      </Section>
      {/** TODO: hobbies - accordion style */}
      <Section title="HOBBIES" titleColor="black_main"></Section>
      <Section title="WORK EXPERIENCE"></Section>
    </div>
  );
};

export default withLayout(About);
