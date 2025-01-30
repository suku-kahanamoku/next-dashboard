import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

interface ThemeCmpProps extends React.HTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const ThemeCmp: React.FC<ThemeCmpProps> = ({ className = "", ...rest }) => {
  const baseClass = "swap swap-rotate";

  return (
    <label className={baseClass} {...rest}>
      <input type="checkbox" className="theme-controller" value="dark" />

      {/* sun icon */}
      <FiSun className={`swap-off h-6 w-6 ${className}`} />

      {/* moon icon */}
      <FiMoon className={`swap-on h-6 w-6 ${className}`} />
    </label>
  );
};

export default ThemeCmp;
