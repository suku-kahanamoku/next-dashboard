"use client";

import React from "react";
import { FaApple, FaBeer } from "react-icons/fa";
import Flag from "react-world-flags";

import DropdownCmp, { IDropdownItem, DropdownPlacement } from "../Dropdown";
import { ButtonColor, ButtonSize } from "../Button";

const placements: DropdownPlacement[] = [
  "dropdown-start",
  "dropdown-center",
  "dropdown-end",
  "dropdown-top",
  "dropdown-bottom",
  "dropdown-left",
  "dropdown-right",
];

const colors: ButtonColor[] = [
  "neutral",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const sizes: ButtonSize[] = ["xs", "sm", "md", "lg", "xl"];

const variants: string[] = ["variant1", "variant2", "variant3"]; // Add appropriate variants here

const listItems: IDropdownItem[] = [
  {
    label: "Item 1",
    value: "item1",
    icon: FaApple,
    disabled: true,
    onClick: () => alert("Item 1"),
  },
  { label: "Item 2", value: "item2", icon: FaBeer, href: "/about" },
  { label: "English", value: "", icon: () => <Flag code="GB" width={24} /> },
  { label: "Czech", value: "cs", icon: () => <Flag code="CZ" width={24} /> },
];

export default function DropdownsCmp({}) {
  return (
    <div className="flex flex-col gap-8">
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
    </div>
  );
}
