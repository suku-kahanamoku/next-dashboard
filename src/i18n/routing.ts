import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const langItems = [
  {
    value: "en",
    label: "GB",
    iso: "en-GB",
  },
  {
    value: "cs",
    label: "CZ",
    iso: "cs-CZ",
  },
];

export const routing = defineRouting({
  locales: ["en", "cs"],
  defaultLocale: "en",
  localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
