"use client";

import React from "react";
import DialogCmp, { DialogPlacement } from "../Dialog";

const placements: DialogPlacement[] = [
  "modal-top",
  "modal-middle",
  "modal-bottom",
  "modal-start",
  "modal-end",
];

export default function DialogsCmp({}) {
  return (
    <div className="flex flex-col gap-4">
      {placements.map((placement, index) => (
        <DialogCmp
          key={placement}
          id={`dialog_${index}`}
          placement={placement}
          label={`Open ${placement} Dialog`}
        >
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </DialogCmp>
      ))}
    </div>
  );
}
