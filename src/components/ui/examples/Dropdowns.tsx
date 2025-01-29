"use client";

import React from "react";
import DropdownCmp from "../Dropdown";

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

const listItems = [
  { label: "Item 1", value: "item1" },
  { label: "Item 2", value: "item2" },
];

export default function DropdownsCmp({}) {
  return (
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
  );
}
