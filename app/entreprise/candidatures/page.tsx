"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type TabKey = keyof EntrepriseDict["candidatures"]["tabs"];

const candidates = [
  {
    name: "Cabinet Diallo & Associés",
    match: "99%",
    location: "Abidjan, CI",
    exp: "12 ans",
    tjm: "1 800 000 FCFA",
    tags: ["IFRS", "SYSCOHADA", "Big Four"],
    verified: true,
    preselected: true,
    compared: true,
  },
  {
    name: "Alexandre Vance",
    match: "96%",
    location: "Dakar, SN",
    exp: "9 ans",
    tjm: "1 650 000 FCFA",
    tags: ["Audit Légal", "Consolidation", "Banque"],
    verified: false,
    preselected: true,
    compared: true,
  },
  {
    name: "Fatou Ndiaye",
    match: "92%",
    location: "Abidjan, CI",
    exp: "7 ans",
    tjm: "1 400 000 FCFA",
    tags: ["SYSCOHADA", "Fiscalité"],
    verified: true,
    preselected: false,
    compared: false,
  },
];

export default function EntrepriseCandidaturesPage() {
  const t = getDict().entreprise.candidatures;
  const [tab, setTab] = useState<TabKey>("toutes");

  const tabs: TabKey[] = ["toutes", "preselection", "comparateur"];
  const visible = candidates.filter((c) =>
    tab === "preselection" ? c.preselected : tab === "comparateur" ? c.compared : true
  );

  const stats = [
    { value: String(candidates.length), label: t.stats.total },
    { value: String(candidates.filter((c) => c.preselected).length), label: t.stats.preselection, highlight: true },
    { value: String(candidates.filter((c) => c.compared).length), label: t.stats.comparateur },
  ];

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-4xl flex flex-col">
        {/* En-tête mission */}
        <div className="pt-2 mb-4">
          <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary rounded text-label-sm font-semibold uppercase tracking-wider mb-2">
            {t.eyebrow}
          </span>
          <h1 className="text-headline-lg font-bold text-on-surface">{t.missionTitle}</h1>
          <p className="text-body-sm text-on-surface-variant mt-1">{t.missionMeta}</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl p-3 text-center border border-border-light shadow-sm">
              <span className={`text-headline-md font-bold block ${s.highlight ? "text-brand-burgundy" : "text-on-surface"}`}>
                {s.value}
              </span>
              <span className="text-caption text-on-surface-variant">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Onglets */}
        <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl mb-4">
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

        {/* Cartes candidats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 stagger">
          {visible.map((c, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm hover:shadow-md transition-all animate-slide-up flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${i === 0 ? "bg-brand-burgundy" : "bg-primary"}`}>
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-headline-sm font-bold text-on-surface">{c.name}</h3>
                      {c.verified && <Icon name="verified" size={14} fill className="text-secondary" />}
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{c.location} · {c.exp}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-headline-md font-bold text-brand-burgundy">{c.match}</span>
                  <span className="text-caption text-on-surface-variant">{t.labels.match}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                  <span className="text-caption text-on-surface-variant block">{t.labels.tjm}</span>
                  <span className="text-body-md font-semibold text-on-surface">{c.tjm}</span>
                </div>
                <div className="bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                  <span className="text-caption text-on-surface-variant block">{t.labels.experience}</span>
                  <span className="text-body-md font-semibold text-on-surface">{c.exp}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {c.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded text-caption">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-border-light mt-auto">
                <Link
                  href="/entreprise/preselection"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-on-primary rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                >
                  <Icon name="star" size={16} />
                  {t.actions.preselectionner}
                </Link>
                <Link
                  href="/entreprise/messages"
                  className="flex-1 flex items-center justify-center py-2 bg-surface-container-low text-on-surface rounded-xl text-label-md font-semibold hover:bg-surface-container transition-colors border border-border-light"
                >
                  {t.actions.contacter}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Garantie séquestre */}
        <div className="mt-6 p-3.5 bg-surface-container-low rounded-xl flex items-start gap-2.5 border border-border-light">
          <Icon name="shield" size={18} fill className="text-secondary shrink-0 mt-0.5" />
          <div>
            <p className="text-label-md text-on-surface font-semibold">{t.escrowTitle}</p>
            <p className="text-caption text-on-surface-variant leading-relaxed">{t.escrowText}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
