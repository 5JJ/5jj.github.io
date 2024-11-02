import { Colors } from "@colors";
import Button from "../_components/common/button";
import PopupSlider from "../_components/common/popup/PopupSlider";
import PopupSliderItem from "../_components/common/popup/PopupSliderItem";
import { withLayout } from "../_components/LayoutWrapper";
import Profile from "../_components/profile";
import Skill from "../_components/skills/Skill";
import SkillSet from "../_components/skills/Skillset";

const About = () => {
  return (
    <div>
      <section>
        <h1>HI, I'm Jeonghui Oh</h1>
        <Profile />
      </section>
      <section>
        {/** TODO: add a common header  */}
        <h2>SKILLS</h2>
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
