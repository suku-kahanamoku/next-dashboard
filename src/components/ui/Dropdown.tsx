import React from "react";
import { IconType } from "react-icons";

import ButtonCmp from "./Button";
import { Link } from "@/i18n/routing";

export interface IDropdownItem {
  label: string;
  value: string;
  href?: string;
  icon?: string | IconType;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

interface DropdownCmpProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?:
    | "dropdown-start"
    | "dropdown-center"
    | "dropdown-end"
    | "dropdown-top"
    | "dropdown-bottom"
    | "dropdown-left"
    | "dropdown-right";
  hover?: boolean;
  open?: boolean;
  label: string | React.ReactNode;
  color?:
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: string | IconType;
  appendIcon?: string | IconType;
  loading?: boolean;
  list?: IDropdownItem[];
  children?: React.ReactNode;
}

const DropdownCmp: React.FC<DropdownCmpProps> = ({
  placement = "dropdown-start",
  hover = false,
  open = false,
  label,
  color = "primary",
  size = "md",
  icon,
  appendIcon,
  loading = false,
  list,
  children,
  className = "",
  ...rest
}) => {
  const baseClass = "dropdown";
  const hoverClass = hover ? "dropdown-hover" : "";
  const openClass = open ? "dropdown-open" : "dropdown-close";

  const combinedClassName = `${baseClass} ${placement} ${hoverClass} ${openClass} ${className}`;

  const handleSelect = (item: IDropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <div className={combinedClassName} {...rest}>
      {/* tlacitko, kterym se otevre dropdown */}
      <div tabIndex={0}>
        {typeof label === "string" ? (
          <ButtonCmp
            color={color}
            size={size}
            icon={icon}
            appendIcon={appendIcon}
            loading={loading}
          >
            {label}
          </ButtonCmp>
        ) : (
          label
        )}
      </div>

      {/* seznam polozek dropdownu */}
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
      >
        {list
          ? list.map((item) => (
              <li
                key={item.value}
                className={item.className}
                onClick={() => !item.disabled && handleSelect(item)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={item.disabled ? "disabled" : ""}
                  >
                    {item.icon && <item.icon className="mr-2" />}
                    {item.label}
                  </Link>
                ) : (
                  <span className={item.disabled ? "disabled" : ""}>
                    {item.icon && <item.icon className="mr-2" />}
                    {item.label}
                  </span>
                )}
              </li>
            ))
          : children}
      </ul>
    </div>
  );
};

export default DropdownCmp;
