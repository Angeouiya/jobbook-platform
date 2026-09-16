"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function ChoixRolePage() {
  const [role, setRole] = useState<"enterprise" | "provider">("enterprise");

  return (
    <main className="flex flex-col relative w-full bg-surface min-h-dvh">
      <div className="flex flex-col w-full px-4 pb-8">
        {/* Header */}
        <header className="flex items-center justify-between w-full py-4">
          <Logo size={32} withText />
          <div className="flex items-center gap-1 bg-surface-container px-2 py-1 rounded-sm">
            <button className="text-label-sm text-on-surface font-semibold">FR</button>
            <span className="text-outline text-caption leading-none">|</span>
            <button className="text-label-sm text-on-surface-variant hover:text-on-surface">EN</button>
          </div>
        </header>

        {/* Headline */}
        <div className="flex flex-col mt-2 mb-6 animate-fade-in">
          <span className="text-label-sm text-secondary uppercase tracking-widest mb-1">Accréditation Institutionnelle</span>
          <h1 className="text-display-hero text-on-surface tracking-tight">Bienvenue sur JobBook</h1>
          <p className="text-body-md text-on-surface-variant mt-1 max-w-xs">Comment souhaitez-vous utiliser JobBook ?</p>
        </div>

        {/* Role cards */}
        <div className="flex flex-col gap-4" role="radiogroup">
          {/* Enterprise */}
          <div
            onClick={() => setRole("enterprise")}
            className={`group relative flex flex-col p-4 bg-surface-container-lowest rounded-xl shadow-sm cursor-pointer transition-all duration-200 ${
              role === "enterprise" ? "ring-2 ring-secondary shadow-md" : ""
            }`}
          >
            <div className="flex items-start justify-between w-full mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  role === "enterprise" ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface"
                }`}>
                  <Icon name="domain" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-caption text-secondary font-semibold uppercase tracking-wider">Accès Recruteur</span>
                  <span className="text-headline-sm text-on-surface">Compte Entreprise</span>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                role === "enterprise" ? "bg-secondary" : "bg-surface-container-high"
              }`}>
                {role === "enterprise" && <div className="w-2 h-2 rounded-full bg-surface-container-lowest" />}
              </div>
            </div>
            <h2 className="text-headline-sm text-on-surface mb-1">Je recherche des Prestataires</h2>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Publiez des missions confidentielles, recevez des dossiers qualifiés et pilotez vos recrutements stratégiques.
            </p>
            <div className="flex items-center gap-2 mt-3 pt-2 bg-surface-container-low px-2 py-1.5 rounded-sm">
              <Icon name="verified" size={14} fill className="text-secondary" />
              <span className="text-caption text-on-surface font-semibold tracking-wide uppercase">Candidatures vérifiées & Processus sous NDA</span>
            </div>
          </div>

          {/* Provider */}
          <div
            onClick={() => setRole("provider")}
            className={`group relative flex flex-col p-4 bg-surface-container-lowest rounded-xl shadow-sm cursor-pointer transition-all duration-200 ${
              role === "provider" ? "ring-2 ring-secondary shadow-md" : ""
            }`}
          >
            <div className="flex items-start justify-between w-full mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  role === "provider" ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface"
                }`}>
                  <Icon name="badge" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-caption text-secondary font-semibold uppercase tracking-wider">Accès Spécialiste</span>
                  <span className="text-headline-sm text-on-surface">Compte Prestataire</span>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                role === "provider" ? "bg-secondary" : "bg-surface-container-high"
              }`}>
                {role === "provider" && <div className="w-2 h-2 rounded-full bg-surface-container-lowest" />}
              </div>
            </div>
            <h2 className="text-headline-sm text-on-surface mb-1">Je recherche des missions</h2>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Accédez aux opportunités exclusives, valorisez vos expertises et postulez directement.
            </p>
            <div className="flex items-center gap-2 mt-3 pt-2 bg-surface-container-low px-2 py-1.5 rounded-sm">
              <Icon name="lock" size={14} fill className="text-secondary" />
              <span className="text-caption text-on-surface font-semibold tracking-wide uppercase">Mandats directs & Discrétion assurée</span>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-between p-4 mt-6 bg-surface-container rounded-lg">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {["JD", "AM", "CP"].map((initials, i) => (
                <div key={i} className="w-7 h-7 rounded-full bg-primary border-2 border-surface-container flex items-center justify-center text-[10px] text-on-primary font-medium">
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-caption text-on-surface-variant">Rejoint par +1,400 leaders et consultants validés</span>
          </div>
          <Icon name="arrow_forward" size={16} className="text-outline" />
        </div>

        {/* CTA */}
        <div className="flex flex-col w-full mt-8 gap-3">
          <Link href={role === "enterprise" ? "/entreprise" : "/espace-prestataire"} className="btn-primary h-11">
            <span>Continuer</span>
            <Icon name="chevron_right" size={18} />
          </Link>
          <div className="flex items-center justify-center gap-1 text-center">
            <span className="text-body-sm text-on-surface-variant">Déjà un compte ?</span>
            <Link href="#" className="text-body-sm text-on-surface font-semibold underline underline-offset-4 decoration-outline-variant hover:decoration-on-surface transition-colors">
              Se connecter
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center mt-8 text-center">
          <p className="text-caption text-on-surface-variant max-w-xs">
            Plateforme sécurisée régie par protocole de confidentialité stricte.
          </p>
        </div>
      </div>
    </main>
  );
}
