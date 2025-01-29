import React from "react";
import ButtonCmp from "./Button";
import { IconType } from "react-icons";

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
  children: React.ReactNode;
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
  children,
  className,
  ...rest
}) => {
  const baseClass = "dropdown";
  const hoverClass = hover ? "dropdown-hover" : "";
  const openClass = open ? "dropdown-open" : "";

  const combinedClassName = `${baseClass} ${placement} ${hoverClass} ${openClass} ${className}`;

  return (
    <div className={combinedClassName} {...rest}>
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
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
      >
        {children}
      </ul>
    </div>
  );
};

export default DropdownCmp;
