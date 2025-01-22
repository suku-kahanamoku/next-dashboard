"use client";

import { NextUIProvider } from "@nextui-org/react";

export function UiProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return <NextUIProvider locale={locale}>{children}</NextUIProvider>;
}
