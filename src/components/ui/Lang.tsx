"use client";

import React, { useState } from "react";
import { useTransition } from "react";
import { useParams } from "next/navigation";
import Flag from "react-world-flags";
import { useLocale } from "next-intl";

import { usePathname, useRouter, langItems } from "@/i18n/routing";
import DropdownCmp, { IDropdownItem } from "./Dropdown";

const LangCmp: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const query = useParams();

  const [isPending, startTransition] = useTransition();
  const [currentLabel, setCurrentLabel] = useState<string>(
    langItems.find((item) => item.value === locale)?.label!
  );

  const langs = langItems.map((item) => ({
    value: item.value,
    className: "w-8 p-0",
    icon: () => <Flag code={item.label} width={30} height={30} />,
    onClick: onSelectChange,
  }));

  const [filteredLangItems, setFilteredLangItems] = useState<IDropdownItem[]>(
    langs.filter((item) => item.value !== locale)
  );

  function onSelectChange(item: IDropdownItem) {
    startTransition(() => {
      // navigace na vybrany jazyk
      router.replace({ pathname, query }, { locale: item.value });
      // aktualizuje ostatni jazyky
      setFilteredLangItems(
        langs.filter((langItem) => langItem.value !== item.value)
      );
      // aktualizuje label
      const langItem = langItems.find(
        (langItem) => langItem.value === item.value
      );
      setCurrentLabel(langItem?.label!);
    });
  }

  return (
    <DropdownCmp
      placement="dropdown-center"
      label={<Flag code={currentLabel} width={30} height={30} />}
      list={filteredLangItems}
      loading={isPending}
      className="w-full cursor-pointer"
    />
  );
};

export default LangCmp;
