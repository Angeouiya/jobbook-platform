import type { ReactNode } from "react";
import { EntrepriseProvider } from "@/components/entreprise/EntrepriseContext";
import { EntrepriseHeader } from "@/components/entreprise/EntrepriseHeader";
import { EntrepriseSidebar } from "@/components/entreprise/EntrepriseSidebar";
import { EntrepriseNav } from "@/components/entreprise/EntrepriseNav";

/**
 * Coquille de la plateforme Entreprise.
 * Sidebar sur écran large (>=768px), barre inférieure sur mobile.
 * Le contexte fournit le compte simulé (maquette frontend).
 */
export default function EntrepriseLayout({ children }: { children: ReactNode }) {
  return (
    <EntrepriseProvider>
      <EntrepriseSidebar />
      <EntrepriseHeader />
      <div className="md:pl-72 min-h-dvh flex flex-col">{children}</div>
      <EntrepriseNav />
    </EntrepriseProvider>
  );
}
