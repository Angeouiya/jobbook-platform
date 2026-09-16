"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { getDict } from "@/lib/i18n";
import { entrepriseMobileItems, isNavActive } from "./nav-items";

export function EntrepriseNav() {
  const pathname = usePathname();
  const t = getDict().entreprise.mobileNav;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl border-t border-border-light">
      <div className="flex justify-around items-center h-16 px-2">
        {entrepriseMobileItems.map((item) => {
          const active = isNavActive(pathname, item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all ${
                active
                  ? "text-brand-burgundy font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Icon name={item.icon} size={22} fill={active} />
              <span className="text-[10px]">{t[item.key]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
