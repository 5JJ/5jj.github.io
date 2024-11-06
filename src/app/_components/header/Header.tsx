"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { SupportedLangs } from "../../types";
import { createLinkWithLang } from "@utils";
import HeaderItem from "./HeaderItem";

const Header = (props: { lang?: SupportedLangs }) => {
  const { lang } = props;
  const pathname = usePathname();
  const menuItems = useMemo(() => {
    return [
      {
        title: "About",
        href: createLinkWithLang("/about", lang),
      },
      {
        title: "Projects",
        href: createLinkWithLang("/projects", lang),
      },
    ];
  }, [lang]);

  return (
    <header className="p-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-50 text-gray-500 border-b border-black">
      <nav>
        <ul className="flex justify-end pr-20">
          {menuItems.map(({ title, href }) => (
            <li
              className={classNames("ml-20", {
                "text-white": pathname === href,
                "font-bold": pathname === href,
              })}
              key={title}
            >
              <HeaderItem text={title} link={href} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
