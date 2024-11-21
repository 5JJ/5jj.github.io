import classNames from "classnames";

type TimelineItemProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  size?: number;
  top?: number;
  highlight?: boolean;
  text: number | string;
};

const TimelineItem = (props: TimelineItemProps) => {
  const {
    onMouseLeave,
    onMouseEnter,
    onClick,
    text,
    size = 16,
    top = 20,
    highlight,
  } = props;

  return (
    <div
      className="relative h-full"
      style={{ width: size }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={classNames("relative z-10 flex", {
          "cursor-pointer": !!onClick,
        })}
        style={{ top }}
        onClick={onClick}
        role={onClick && "button"}
      >
        <span
          className={classNames(
            "rounded-[50%] inline-block border-black_main self-center flex-shrink-0",
            {
              "bg-white border-4": highlight,
              "border-8 bg-black_main": !highlight,
            }
          )}
          style={{ width: size, height: size }}
        />
        <span className="pl-10">{text}</span>
      </div>
      <div
        className="border-2 absolute h-full top-0 border-black_main"
        style={{ left: size / 2 - 2 }}
      />
    </div>
  );
};

export default TimelineItem;
