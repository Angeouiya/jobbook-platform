"use client";

import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getDict } from "@/lib/i18n";
import { useEntreprise } from "./EntrepriseContext";

export function EntrepriseHeader() {
  const t = getDict().entreprise.header;
  const account = useEntreprise();

  return (
    <header className="fixed top-0 inset-x-0 z-40 md:left-72 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-border-light pt-safe">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="md:hidden">
            <Logo size={34} />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-label-sm uppercase tracking-wider text-on-surface-variant">
              {t.space}
            </span>
            <span className="text-headline-sm font-bold text-on-surface">
              {account.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            aria-label={t.notifications}
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Icon name="notifications" size={22} />
            <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-brand-burgundy" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
