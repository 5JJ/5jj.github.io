import Section from "../_components/about/Section";
import { withLayout } from "../_components/LayoutWrapper";
import Profile from "../_components/profile";
import SkillSet from "../_components/skills/Skillset";
import Timeline from "../_components/workExperience/Timeline";

const About = () => {
  return (
    <div>
      <section>
        <Profile />
      </section>
      {/**ring-1 ring-black/20 */}
      <Section title="SKILLS" highlight>
        <SkillSet type="languages" />
        <SkillSet type="technologies" />
        <SkillSet type="soft" />
      </Section>
      {/** TODO: hobbies - accordion style */}
      <Section title="HOBBIES"></Section>
      <Section title="WORK EXPERIENCE" highlight>
        <Timeline />
      </Section>
    </div>
  );
};

export default withLayout(About);
