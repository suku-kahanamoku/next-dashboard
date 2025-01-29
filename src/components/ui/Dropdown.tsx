import React, { useState } from "react";
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
  list?: { label: string; value: string }[];
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
  className,
  ...rest
}) => {
  const [selectedLabel, setSelectedLabel] = useState<string | React.ReactNode>(
    label
  );
  const [isOpen, setIsOpen] = useState(open);

  const baseClass = "dropdown";
  const hoverClass = hover ? "dropdown-hover" : "";
  const openClass = isOpen ? "dropdown-close" : "";

  const combinedClassName = `${baseClass} ${placement} ${hoverClass} ${openClass} ${className}`;

  const handleSelect = (label: string) => {
    setSelectedLabel(label);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={combinedClassName} {...rest}>
      <div tabIndex={0} onClick={handleToggle}>
        {typeof selectedLabel === "string" ? (
          <ButtonCmp
            color={color}
            size={size}
            icon={icon}
            appendIcon={appendIcon}
            loading={loading}
          >
            {selectedLabel}
          </ButtonCmp>
        ) : (
          selectedLabel
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
      >
        {list
          ? list.map((item) => (
              <li key={item.value} onClick={() => handleSelect(item.label)}>
                <span>{item.label}</span>
              </li>
            ))
          : children}
      </ul>
    </div>
  );
};

export default DropdownCmp;
