import React from "react";
import { IconType } from "react-icons";
import { MdClose } from "react-icons/md";

import ButtonCmp, { ButtonColor, ButtonVariant, ButtonSize } from "./Button";

export type DialogPlacement =
  | "modal-top"
  | "modal-middle"
  | "modal-bottom"
  | "modal-start"
  | "modal-end";

interface DialogCmpProps extends React.HTMLAttributes<HTMLDivElement> {
  placement?: DialogPlacement;
  open?: boolean;
  label: string | React.ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string | IconType;
  appendIcon?: string | IconType;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const DialogCmp: React.FC<DialogCmpProps> = ({
  placement = "modal-middle",
  open = false,
  label,
  color,
  variant,
  size,
  icon,
  appendIcon,
  loading,
  disabled,
  children,
  className = "",
  ...rest
}) => {
  const baseClass = "modal absolute";
  const openClass = open ? "modal-open" : "";
  const combinedClassName = `${baseClass} ${placement} ${openClass} ${className}`;

  const handleOpen = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    dialog?.showModal();
  };

  const handleClose = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    if (dialog) {
      dialog?.close();
    }
  };

  return (
    <div>
      {typeof label === "string" ? (
        <ButtonCmp
          color={color}
          variant={variant}
          size={size}
          appendIcon={appendIcon}
          loading={loading}
          disabled={disabled}
          onClick={() => handleOpen(rest.id as string)}
        >
          {label}
        </ButtonCmp>
      ) : (
        label
      )}
      <dialog className={combinedClassName} {...(rest as Record<string, any>)}>
        <div className="modal-box p-0">
          <div className="flex justify-between border-b border-gray-200">
            <h3 className="font-bold text-lg p-4">Hello!</h3>
            <ButtonCmp
              icon={MdClose}
              color={color}
              className="modal-close rounded-t-none rounded-br-none"
              onClick={() => handleClose(rest.id as string)}
            />
          </div>

          <div className="p-4">{children}</div>
        </div>

        <div
          className="modal-backdrop"
          onClick={() => handleClose(rest.id as string)}
        ></div>
      </dialog>
    </div>
  );
};

export default DialogCmp;
