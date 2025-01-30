"use client";

import React from "react";
import DropdownCmp, { IDropdownItem } from "../Dropdown";
import { FaApple, FaBeer } from "react-icons/fa";

const placements: Array<
  | "dropdown-start"
  | "dropdown-center"
  | "dropdown-end"
  | "dropdown-top"
  | "dropdown-bottom"
  | "dropdown-left"
  | "dropdown-right"
> = [
  "dropdown-start",
  "dropdown-center",
  "dropdown-end",
  "dropdown-top",
  "dropdown-bottom",
  "dropdown-left",
  "dropdown-right",
];

const colors: Array<
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
> = [
  "neutral",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
];

const variants: Array<"default" | "outline" | "soft" | "ghost" | "link"> = [
  "default",
  "outline",
  "soft",
  "ghost",
  "link",
];

const listItems: IDropdownItem[] = [
  {
    label: "Item 1",
    value: "item1",
    icon: FaApple,
    disabled: true,
    onClick: () => alert("Item 1"),
  },
  { label: "Item 2", value: "item2", icon: FaBeer, href: "/about" },
];

export default function DropdownsCmp({}) {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {placements.map((placement) => (
          <DropdownCmp
            key={placement}
            placement={placement}
            hover
            label={`Dropdown ${placement}`}
            list={listItems}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <DropdownCmp
            key={color}
            placement="dropdown-start"
            hover
            color={color}
            label={`Dropdown ${color}`}
            list={listItems}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <DropdownCmp
            key={size}
            placement="dropdown-start"
            hover
            size={size}
            label={`Dropdown Size ${size}`}
            list={listItems}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <DropdownCmp
            key={variant}
            placement="dropdown-start"
            hover
            label={`Dropdown ${variant}`}
            list={listItems}
          />
        ))}
      </div>
    </>
  );
}
