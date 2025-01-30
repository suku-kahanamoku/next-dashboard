import React from "react";
import Image from "next/image";

import logo from "@/assets/images/logo.svg";
import { Link } from "@/i18n/routing";
import ThemeCmp from "./Theme";
import LangCmp from "./Lang";

const MainMenuCmp: React.FC = () => {
  return (
    <div className="navbar justify-between items-center py-2 px-4 shadow-md">
      <Link href="/">
        <Image src={logo} alt="Logo" height={52} />
      </Link>

      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
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
