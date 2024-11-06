import Link from "next/link";
import { SupportedLangs } from "../../types";

type FooterProps = {
  lang?: SupportedLangs;
};

const Footer = (props: FooterProps) => {
  const { lang } = props;

  const CONTACT_INFORMATION = [
    {
      title: "Github",
      url: "",
    },
    {
      title: "LinkedIn",
      url: "",
    },
    {
      title: "Email",
      url: "mailto:wjdgml015@gmail.com",
    },
  ];

  return (
    <footer className="bg-black backdrop-filter backdrop-blur-lg bg-opacity-80 p-24">
      {/* 
        contact 
        TODO: replace a text with a proper icon
      */}
      <h3 className="font-bold text-center text-gray-200 text-20 mb-20">
        Thanks for scrolling!
      </h3>
      <ul className="flex gap-10 justify-center">
        {CONTACT_INFORMATION.map(({ title, url }) => (
          <li
            key={title}
            className="rounded-50 overflow-hidden border-1  w-40 h-40 border-gray-200 hover:opacity-60"
          >
            <Link href={url} className="w-full h-full inline-block">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
