"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { getDict } from "@/lib/i18n";
import { entrepriseNavItems, isNavActive } from "./nav-items";

export function EntrepriseSidebar() {
  const pathname = usePathname();
  const t = getDict().entreprise;

  return (
    <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-72 z-50 flex-col bg-surface-container-lowest border-r border-border-light">
      <div className="h-16 px-5 flex items-center border-b border-border-light shrink-0">
        <Link href="/entreprise">
          <Logo size={32} withText />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5">
        <span className="px-3 pt-2 pb-1.5 text-label-sm uppercase tracking-wider text-on-surface-variant/70">
          {t.nav.sectionMain}
        </span>
        {entrepriseNavItems.map((item) => {
          const active = isNavActive(pathname, item.href);
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-body-md transition-colors ${
                active
                  ? "bg-brand-burgundy text-white font-semibold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`}
            >
              <Icon name={item.icon} size={20} fill={active} />
              <span>{t.nav[item.key]}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-border-light shrink-0">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="verified_user" size={16} fill className="text-secondary" />
          <span className="text-label-sm uppercase tracking-wider">{t.header.space}</span>
        </div>
      </div>
    </aside>
  );
}
