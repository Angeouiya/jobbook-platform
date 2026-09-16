import type { EntrepriseDict } from "@/lib/i18n";

type NavKey = keyof EntrepriseDict["nav"];
type MobileKey = keyof EntrepriseDict["mobileNav"];

export interface EntrepriseNavItem<K extends string = string> {
  key: K;
  href: string;
  icon: string;
}

/** Navigation complète (sidebar desktop) — spec §3 Navigation Entreprise. */
export const entrepriseNavItems: EntrepriseNavItem<NavKey>[] = [
  { key: "dashboard", href: "/entreprise", icon: "dashboard" },
  { key: "publier", href: "/entreprise/publier", icon: "post_add" },
  { key: "offres", href: "/entreprise/offres", icon: "work" },
  { key: "candidatures", href: "/entreprise/candidatures", icon: "group" },
  { key: "preselection", href: "/entreprise/preselection", icon: "star" },
  { key: "missions", href: "/entreprise/missions", icon: "assignment" },
  { key: "messages", href: "/entreprise/messages", icon: "chat" },
  { key: "paiements", href: "/entreprise/paiements", icon: "payments" },
  { key: "evaluations", href: "/entreprise/evaluations", icon: "reviews" },
  { key: "profil", href: "/entreprise/profil", icon: "corporate_fare" },
  { key: "assistance", href: "/entreprise/assistance", icon: "support_agent" },
];

/** Navigation mobile réduite (barre inférieure) — spec §9. */
export const entrepriseMobileItems: EntrepriseNavItem<MobileKey>[] = [
  { key: "dashboard", href: "/entreprise", icon: "dashboard" },
  { key: "publier", href: "/entreprise/publier", icon: "post_add" },
  { key: "offres", href: "/entreprise/offres", icon: "work" },
  { key: "messages", href: "/entreprise/messages", icon: "chat" },
  { key: "profil", href: "/entreprise/profil", icon: "corporate_fare" },
];

/** Détermine l'onglet actif : correspondance exacte pour la racine, préfixe sinon. */
export function isNavActive(pathname: string, href: string): boolean {
  return href === "/entreprise"
    ? pathname === "/entreprise"
    : pathname.startsWith(href);
}
