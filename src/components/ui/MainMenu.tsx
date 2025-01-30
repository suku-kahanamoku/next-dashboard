import React from "react";
import Image from "next/image";

import logo from "@/assets/images/logo.svg";
import { Link } from "@/i18n/routing";
import ThemeCmp from "./Theme";
import LangCmp from "./Lang";
import { getAllMenus } from "@/utils/menus";

const MainMenuCmp: React.FC = () => {
  const menus = getAllMenus();
  console.dir(menus);

  return (
    <div className="navbar justify-between items-center py-2 px-4 shadow-md">
      <Link href="/">
        <Image src={logo} alt="Logo" height={52} />
      </Link>

      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <ThemeCmp className="text-gray-500" />
        <LangCmp />
      </div>
    </div>
  );
};

export default MainMenuCmp;
