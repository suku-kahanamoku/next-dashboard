import React, { useState } from "react";
import { IconType } from "react-icons";
import * as Icons from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

import { Link } from "@/i18n/routing";

export type ButtonColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type ButtonVariant = "default" | "outline" | "soft" | "ghost" | "link";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonModifier = "wide" | "block" | "square" | "circle";

interface ButtonCmpProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  modifier?: ButtonModifier;
  disabled?: boolean;
  active?: boolean;
  href?: string;
  icon?: string | IconType;
  appendIcon?: string | IconType;
  loading?: boolean;
  onHover?: (
    value: boolean,
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children?: React.ReactNode;
}

const colorClasses = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
};

const variantClasses = {
  default: "",
  outline: "btn-outline",
  soft: "btn-soft",
  ghost: "btn-ghost",
  link: "btn-link",
};

const sizeClasses = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
};

const modifierClasses = {
  wide: "btn-wide",
  block: "btn-block",
  square: "btn-square",
  circle: "btn-circle",
};

const ButtonCmp: React.FC<ButtonCmpProps> = ({
  color = "primary",
  variant = "soft",
  size = "md",
  modifier,
  disabled = false,
  active = false,
  onClick,
  onHover,
  href,
  icon,
  appendIcon,
  loading = false,
  children,
  className = "",
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClass = "btn";
  const colorClass = colorClasses[color];
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  const modifierClass = modifier ? modifierClasses[modifier] : "";
  const disabledClass = disabled || loading ? "btn-disabled" : "";
  const activeClass = active ? "btn-active" : "";
  const hoverClass = isHovered && variant !== "link" ? "hover:shadow-sm" : "";

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    setIsHovered(true);
    if (onHover) {
      onHover(true, event);
    }
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    setIsHovered(false);
    if (onHover) {
      onHover(false, event);
    }
  };

  const IconComponent = loading
    ? FaSpinner
    : typeof icon === "string"
    ? (Icons as Record<string, IconType>)[icon]
    : icon;

  const AppendIconComponent =
    typeof appendIcon === "string"
      ? (Icons as Record<string, IconType>)[appendIcon]
      : appendIcon;

  const combinedClassName = `${baseClass} ${colorClass} ${variantClass} ${sizeClass} ${modifierClass} ${disabledClass} ${activeClass} ${hoverClass} ${className}`;

  if (variant === "link" && href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(rest as Record<string, any>)}
      >
        {IconComponent && (
          <IconComponent
            className={children || AppendIconComponent ? "mr-2" : undefined}
          />
        )}
        {children}
        {AppendIconComponent && <AppendIconComponent className="ml-2" />}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {IconComponent && (
        <IconComponent
          className={children || AppendIconComponent ? "mr-2" : undefined}
        />
      )}

      {children}

      {AppendIconComponent && (
        <AppendIconComponent
          className={children || IconComponent ? "ml-2" : undefined}
        />
      )}
    </button>
  );
};

export default ButtonCmp;
