"use client";

import { HeroUIProvider } from "@heroui/system";

export function UiProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return <HeroUIProvider locale={locale}>{children}</HeroUIProvider>;
}
