"use client";

import ButtonCmp from "./Button";

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

const variants: Array<"default" | "outline" | "soft" | "ghost" | "link"> = [
  "default",
  "outline",
  "soft",
  "ghost",
  "link",
];

const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl"> = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
];

const modifiers: Array<"wide" | "block" | "square" | "circle"> = [
  "wide",
  "block",
  "square",
  "circle",
];

export default function ButtonsCmp({}) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    color: string,
    variant: string
  ) => {
    console.log(
      `Button clicked: color=${color}, variant=${variant}, event=${event}`,
      event
    );
  };

  const handleHover = (
    value: boolean,
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    color: string,
    variant: string
  ) => {
    console.log(
      `Button hovered: value=${value}, color=${color}, variant=${variant}, event=${event}`,
      event
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {colors.map((color) => (
        <div key={color} className="flex flex-row gap-4 items-center">
          <div className="">{color}</div>
          {variants.map((variant) => (
            <ButtonCmp
              key={`${color}-${variant}`}
              color={color}
              variant={variant}
              href={variant === "link" ? "/about" : undefined}
              onClick={(event) => handleClick(event, color, variant)}
              onHover={(value, event) =>
                handleHover(value, event, color, variant)
              }
              data-testid="button"
              className="prdel"
            >
              {variant}
            </ButtonCmp>
          ))}
        </div>
      ))}
      {sizes.map((size) => (
        <div key={size} className="flex flex-row gap-4 items-center">
          <div className="">{size}</div>
          <ButtonCmp
            size={size}
            onClick={(event) => handleClick(event, "default", size)}
            onHover={(value, event) =>
              handleHover(value, event, "default", size)
            }
          >
            Size {size}
          </ButtonCmp>
        </div>
      ))}
      {modifiers.map((modifier) => (
        <div key={modifier} className="flex flex-row gap-4 items-center">
          <div className="">{modifier}</div>
          <ButtonCmp
            modifier={modifier}
            onClick={(event) => handleClick(event, "default", modifier)}
            onHover={(value, event) =>
              handleHover(value, event, "default", modifier)
            }
          >
            Modifier {modifier}
          </ButtonCmp>
        </div>
      ))}
      <div className="flex flex-row gap-4 items-center">
        <div className="">States</div>
        <ButtonCmp
          disabled
          onClick={(event) => handleClick(event, "default", "disabled")}
          onHover={(value, event) =>
            handleHover(value, event, "default", "disabled")
          }
        >
          Disabled
        </ButtonCmp>
        <ButtonCmp
          active
          onClick={(event) => handleClick(event, "default", "active")}
          onHover={(value, event) =>
            handleHover(value, event, "default", "active")
          }
        >
          Active
        </ButtonCmp>
      </div>
    </div>
  );
}
