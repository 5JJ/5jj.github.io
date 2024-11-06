import Link from "next/link";

type HeaderItemProps = { text: string; link: string };

const HeaderItem = (props: HeaderItemProps) => {
  const { text, link } = props;

  return <Link href={link}>{text}</Link>;
};

export default HeaderItem;
