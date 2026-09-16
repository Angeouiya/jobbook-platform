"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type MethodKey = keyof EntrepriseDict["paiements"]["methods"];

const methods: { key: Extract<MethodKey, "card" | "transfer" | "mobile">; icon: string; badge: string }[] = [
  { key: "card", icon: "credit_card", badge: "3D Secure" },
  { key: "transfer", icon: "account_balance", badge: "BCEAO" },
  { key: "mobile", icon: "smartphone", badge: "UEMOA" },
];

const recus = [
  { ref: "REC-2024-014", title: "Audit comptable annuel & Consolidation IFRS", montant: "205 000 FCFA", date: "12 sept. 2024" },
  { ref: "REC-2024-011", title: "Due Diligence — Projet Delta", montant: "180 000 FCFA", date: "28 août 2024" },
  { ref: "REC-2024-008", title: "Cartographie des risques BCEAO", montant: "150 000 FCFA", date: "14 août 2024" },
];

export default function EntreprisePaiementsPage() {
  const t = getDict().entreprise.paiements;
  const [selected, setSelected] = useState<MethodKey>("card");

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-5">
        {/* En-tête sécurité */}
        <section className="pt-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant text-label-sm uppercase tracking-wider font-semibold border border-border-light">
            <Icon name="verified_user" size={14} fill />
            {t.portalBadge}
          </span>
          <span className="text-caption text-on-surface-variant font-medium">{t.protocol}</span>
        </section>

        {/* Mandat concerné */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-light flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-label-sm uppercase text-secondary tracking-wider font-bold">{t.mandatEyebrow}</span>
              <h1 className="text-headline-md text-on-surface mt-1 font-bold leading-tight">{t.mandatTitle}</h1>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface text-label-sm font-bold shrink-0 border border-border-light">
              KED-2024-09
            </span>
          </div>
        </section>

        {/* Ventilation financière */}
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-border-light flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <h2 className="text-label-md uppercase tracking-wider text-on-surface font-bold">{t.breakdownTitle}</h2>
            </div>
            <span className="text-caption text-on-surface-variant font-medium">{t.currency}</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">{t.lignes.reference}</span>
              <span className="text-body-md text-on-surface font-bold">1 800 000 FCFA</span>
            </div>
            <div className="h-px bg-border-light" />
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-body-sm text-on-surface-variant">{t.lignes.taux}</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 bg-surface-container-high text-on-surface text-label-sm font-bold rounded-md">10%</span>
                </div>
                <span className="text-caption text-on-surface-variant mt-1 leading-relaxed max-w-xs">{t.lignes.tauxNote}</span>
              </div>
              <span className="text-body-sm text-on-surface font-bold shrink-0">180 000 FCFA</span>
            </div>
            <div className="h-px bg-border-light" />
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">{t.lignes.frais}</span>
              <span className="text-body-sm text-on-surface font-bold">25 000 FCFA</span>
            </div>
          </div>
          <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between border border-border-light">
            <div className="flex flex-col">
              <span className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">{t.totalLabel}</span>
              <span className="text-caption text-on-surface-variant mt-0.5">{t.totalNote}</span>
            </div>
            <span className="text-on-surface tracking-tight font-bold" style={{ fontSize: "28px", lineHeight: "32px" }}>
              205 000 <span className="text-label-md font-semibold">FCFA</span>
            </span>
          </div>
          <div className="p-3 bg-surface-container-low rounded-xl flex gap-2.5 items-start border border-border-light">
            <Icon name="info" size={20} className="text-secondary shrink-0 mt-0.5" />
            <p className="text-caption text-on-surface-variant leading-relaxed">{t.disclaimer}</p>
          </div>
        </section>

        {/* Moyens de paiement */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-label-md uppercase tracking-wider text-on-surface font-bold">{t.methodsTitle}</h2>
            <span className="text-caption text-on-surface-variant font-medium">{t.methodsNote}</span>
          </div>
          {methods.map((m) => {
            const active = selected === m.key;
            const descKey = `${m.key}Desc` as MethodKey;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setSelected(m.key)}
                aria-pressed={active}
                className={`text-left w-full bg-surface-container-lowest rounded-2xl p-4 border shadow-sm flex items-center justify-between transition-all ${
                  active ? "border-primary ring-1 ring-primary/15" : "border-border-light hover:border-outline-variant"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                      active ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface border border-border-light"
                    }`}
                  >
                    <Icon name={m.icon} size={22} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-headline-sm text-on-surface font-bold">{t.methods[m.key]}</span>
                      <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface text-label-sm font-semibold">{m.badge}</span>
                    </div>
                    <span className="text-caption text-on-surface-variant mt-0.5">{t.methods[descKey]}</span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${active ? "bg-primary" : "border-2 border-border-light"}`}>
                  {active && <span className="w-2 h-2 rounded-full bg-on-primary" />}
                </div>
              </button>
            );
          })}
        </section>

        {/* Badges de confiance */}
        <div className="flex items-center justify-center gap-5 mt-1">
          {[t.trust.iso, t.trust.escrow, t.trust.receipt].map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <Icon name="verified" size={14} fill className="text-secondary" />
              <span className="text-caption text-on-surface-variant font-bold">{badge}</span>
            </div>
          ))}
        </div>

        {/* CTA de règlement */}
        <button type="button" className="btn-primary h-12">
          <Icon name="lock" size={18} />
          <span>{t.cta}</span>
        </button>

        {/* Reçus disponibles */}
        <section className="flex flex-col gap-3 pt-2">
          <h2 className="text-headline-sm font-bold text-on-surface">{t.receiptsTitle}</h2>
          <div className="flex flex-col gap-2.5">
            {recus.map((r) => (
              <div
                key={r.ref}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low border border-border-light flex items-center justify-center text-on-surface shrink-0">
                    <Icon name="receipt_long" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-body-md font-semibold text-on-surface truncate">{r.title}</p>
                    <p className="text-caption text-on-surface-variant mt-0.5">
                      {t.receiptLabel} {r.ref} · {r.date} · {r.montant}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-on-surface rounded-xl text-label-md font-semibold border border-border-light hover:bg-surface-container transition-colors shrink-0"
                >
                  <Icon name="download" size={16} />
                  <span className="hidden sm:inline">{t.download}</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
