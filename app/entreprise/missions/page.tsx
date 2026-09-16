"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type TabKey = keyof EntrepriseDict["missions"]["tabs"];

const aAttribuer = [
  { ref: "KED-2024-09", title: "Audit comptable annuel & Consolidation IFRS", prestataire: "Cabinet Diallo & Associés", echeance: "28 sept." },
  { ref: "KED-2024-04", title: "Due Diligence — Projet Delta", prestataire: "Alexandre Vance", echeance: "15 oct." },
];

const actives = [
  { ref: "KED-2024-02", title: "Cartographie des risques BCEAO", prestataire: "Fatou Ndiaye", echeance: "30 sept.", progression: 65 },
  { ref: "KED-2024-01", title: "Accompagnement clôture semestrielle", prestataire: "Cabinet Diallo & Associés", echeance: "10 oct.", progression: 40 },
];

export default function EntrepriseMissionsPage() {
  const t = getDict().entreprise.missions;
  const [tab, setTab] = useState<TabKey>("aAttribuer");

  const tabs: TabKey[] = ["aAttribuer", "actives"];

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-5">
        <section className="pt-2">
          <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">{t.intro}</p>
        </section>

        {/* Onglets */}
        <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl">
          {tabs.map((tk) => (
            <button
              key={tk}
              onClick={() => setTab(tk)}
              className={`flex-1 py-2 rounded-lg text-label-md text-center transition-all ${
                tab === tk ? "bg-primary text-on-primary font-semibold shadow-sm" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {t.tabs[tk]}
            </button>
          ))}
        </div>

        {/* À attribuer */}
        {tab === "aAttribuer" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 stagger">
            {aAttribuer.map((m) => (
              <div
                key={m.ref}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm animate-slide-up flex flex-col gap-3"
              >
                <div>
                  <span className="text-body-sm text-on-surface-variant">{t.labels.reference} {m.ref}</span>
                  <h3 className="text-headline-sm font-bold text-on-surface mt-0.5">{m.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                    <span className="text-caption text-on-surface-variant">{t.labels.prestataire}</span>
                    <span className="text-body-sm font-semibold text-on-surface truncate">{m.prestataire}</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                    <span className="text-caption text-on-surface-variant">{t.labels.echeance}</span>
                    <span className="text-body-sm font-semibold text-brand-burgundy">{m.echeance}</span>
                  </div>
                </div>
                <Link
                  href="/entreprise/paiements"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-brand-burgundy text-white rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                >
                  <Icon name="how_to_reg" size={16} />
                  {t.actions.attribuer}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Actives */}
        {tab === "actives" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 stagger">
            {actives.map((m) => (
              <div
                key={m.ref}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm animate-slide-up flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-body-sm text-on-surface-variant">{t.labels.reference} {m.ref}</span>
                    <h3 className="text-headline-sm font-bold text-on-surface mt-0.5">{m.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary/10 text-secondary text-caption font-bold border border-secondary/20 shrink-0">
                    {m.prestataire.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-caption text-on-surface-variant">{t.labels.progression}</span>
                    <span className="text-caption font-bold text-on-surface">{m.progression}%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${m.progression}%` }} />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-border-light">
                  <Link
                    href="/entreprise/messages"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-on-primary rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                  >
                    {t.actions.suivre}
                  </Link>
                  <Link
                    href="/entreprise/evaluations"
                    className="flex items-center justify-center px-3.5 py-2 bg-surface-container-low text-on-surface rounded-xl text-label-md font-semibold hover:bg-surface-container transition-colors border border-border-light"
                  >
                    {t.actions.evaluer}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
