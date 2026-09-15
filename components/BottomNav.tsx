"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const tabs = [
  { path: "/accueil", label: "Accueil", icon: "home" },
  { path: "/espace-prestataire", label: "Missions", icon: "work" },
  { path: "/suivi-candidature", label: "Suivi", icon: "bookmark" },
  { path: "/messagerie", label: "Messages", icon: "chat" },
  { path: "/administration", label: "Admin", icon: "person" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl border-t border-border-light">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const active = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center gap-1 w-16 h-14 transition-all ${
                active
                  ? "text-brand-burgundy font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <Icon
                name={tab.icon}
                size={22}
                fill={active}
              />
              <span className="text-[10px]">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
