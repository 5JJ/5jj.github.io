import { Colors } from "@colors";
import Button from "../_components/common/button";
import PopupSlider from "../_components/common/popup/PopupSlider";
import PopupSliderItem from "../_components/common/popup/PopupSliderItem";
import { withLayout } from "../_components/LayoutWrapper";
import Profile from "../_components/profile";

const About = () => {
  return (
    <div>
      <Profile />
      <Button bgColor={Colors.main} fontColor={"white"}>
        HI
      </Button>
      <PopupSlider initalSlide={20}>
        {new Array(30).fill(0).map((id, index) => (
          <PopupSliderItem key={index}>{index}</PopupSliderItem>
        ))}
      </PopupSlider>
    </div>
  );
};

export default withLayout(About);
