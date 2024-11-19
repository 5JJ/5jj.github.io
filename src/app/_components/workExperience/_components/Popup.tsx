import Modal from "../../common/popup/Modal";
import PopupSlider from "../../common/popup/PopupSlider";
import PopupSliderItem from "../../common/popup/PopupSliderItem";

const Popup = (props: { open?: boolean; closePopup: () => void }) => {
  const { open = false, closePopup } = props;

  return (
    <Modal open={open} onClick={closePopup}>
      <div className="bg-white w-full h-full text-16">
        <PopupSlider>
          <PopupSliderItem>A</PopupSliderItem>
          <PopupSliderItem>B</PopupSliderItem>
          <PopupSliderItem>C</PopupSliderItem>
          <PopupSliderItem>D</PopupSliderItem>
        </PopupSlider>
      </div>
    </Modal>
  );
};

export default Popup;
