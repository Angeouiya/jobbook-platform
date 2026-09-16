import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type KpiKey = keyof EntrepriseDict["dashboard"]["kpi"];
type QuickKey = keyof EntrepriseDict["dashboard"]["quickActions"];

const kpis: { key: KpiKey; value: string; icon: string; urgent?: boolean }[] = [
  { key: "nouvellesCandidatures", value: "12", icon: "group", urgent: true },
  { key: "aExaminer", value: "8", icon: "fact_check", urgent: true },
  { key: "decisions", value: "3", icon: "gavel", urgent: true },
  { key: "paiementRequis", value: "2", icon: "payments", urgent: true },
  { key: "brouillons", value: "4", icon: "draft" },
  { key: "publiees", value: "6", icon: "campaign" },
  { key: "preselectionnes", value: "5", icon: "star" },
  { key: "aAttribuer", value: "1", icon: "assignment_ind" },
  { key: "actives", value: "4", icon: "work" },
  { key: "messages", value: "3", icon: "chat" },
  { key: "recus", value: "9", icon: "receipt_long" },
];

const decisions = [
  {
    icon: "fact_check",
    title: "12 candidatures à examiner",
    sub: "Mission KED-2024-09 · Clôture le 28 septembre",
    href: "/entreprise/candidatures",
  },
  {
    icon: "payments",
    title: "2 offres en paiement requis",
    sub: "La publication demeure suspendue jusqu'au règlement",
    href: "/entreprise/paiements",
  },
  {
    icon: "gavel",
    title: "3 sélections à confirmer",
    sub: "Prestataires présélectionnés en attente de décision",
    href: "/entreprise/preselection",
  },
];

const quickActions: { key: QuickKey; icon: string; href: string }[] = [
  { key: "publier", icon: "post_add", href: "/entreprise/publier" },
  { key: "finaliser", icon: "draft", href: "/entreprise/offres" },
  { key: "payer", icon: "payments", href: "/entreprise/paiements" },
  { key: "examiner", icon: "fact_check", href: "/entreprise/candidatures" },
  { key: "comparer", icon: "compare_arrows", href: "/entreprise/candidatures" },
  { key: "preselectionner", icon: "star", href: "/entreprise/preselection" },
];

const missions = [
  { tag: "Finance & Audit", ref: "KED-2024-09", title: "Audit comptable annuel", candidatures: 24, cloture: "28 sept." },
  { tag: "Stratégie M&A", ref: "KED-2024-04", title: "Due Diligence — Projet Delta", candidatures: 8, cloture: "15 oct." },
];

export default function EntrepriseDashboardPage() {
  const t = getDict().entreprise.dashboard;

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-8">
        {/* En-tête */}
        <section className="pt-2 animate-fade-in">
          <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">
            {t.eyebrow}
          </span>
          <h1 className="text-display-hero text-on-surface tracking-tight mt-1">{t.greeting}</h1>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
            {t.intro}
          </p>
        </section>

        {/* Indicateurs */}
        <section className="flex flex-col gap-3">
          <h2 className="text-headline-sm font-bold text-on-surface">{t.kpiTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {kpis.map((k) => (
              <div
                key={k.key}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex flex-col gap-3"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    k.urgent
                      ? "bg-secondary/10 text-secondary border border-secondary/20"
                      : "bg-surface-container-low text-on-surface border border-border-light"
                  }`}
                >
                  <Icon name={k.icon} size={18} fill />
                </div>
                <div>
                  <span
                    className={`text-headline-lg font-bold block leading-none ${
                      k.urgent ? "text-brand-burgundy" : "text-on-surface"
                    }`}
                  >
                    {k.value}
                  </span>
                  <span className="text-caption text-on-surface-variant mt-1.5 block leading-snug">
                    {t.kpi[k.key]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Décisions requises */}
        <section className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-headline-md font-bold text-on-surface">{t.decisionsTitle}</h2>
            <span className="text-label-sm uppercase tracking-wider text-on-surface-variant">
              {t.decisionsSub}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 stagger">
            {decisions.map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm hover:border-brand-burgundy/40 hover:shadow-md transition-all flex items-start gap-3 animate-slide-up"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center shrink-0 border border-brand-burgundy/20">
                  <Icon name={d.icon} size={20} fill />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-headline-sm font-bold text-on-surface">{d.title}</h3>
                  <p className="text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">{d.sub}</p>
                </div>
                <Icon name="chevron_right" size={20} className="text-on-surface-variant shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* Actions rapides */}
        <section className="flex flex-col gap-3">
          <h2 className="text-headline-md font-bold text-on-surface">{t.quickActionsTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickActions.map((a) => (
              <Link
                key={a.key}
                href={a.href}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm hover:border-outline-variant hover:shadow-md transition-all flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-container-low border border-border-light flex items-center justify-center text-on-surface">
                  <Icon name={a.icon} size={20} />
                </div>
                <span className="text-body-md font-semibold text-on-surface leading-snug">
                  {t.quickActions[a.key]}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Missions actives */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-headline-md font-bold text-on-surface">{t.missionsTitle}</h2>
            <Link
              href="/entreprise/missions"
              className="text-label-md font-semibold text-brand-burgundy flex items-center gap-1"
            >
              {t.labels.voirTout}
              <Icon name="chevron_right" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {missions.map((m, i) => (
              <Link
                key={i}
                href="/entreprise/candidatures"
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm hover:border-brand-burgundy/40 hover:shadow-md transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded font-medium text-[11px]">
                        {m.tag}
                      </span>
                      <span className="text-body-sm text-on-surface-variant">
                        {t.labels.reference} {m.ref}
                      </span>
                    </div>
                    <h3 className="text-headline-sm font-bold text-on-surface">{m.title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                    <span className="text-caption text-on-surface-variant">{t.labels.candidatures}</span>
                    <span className="text-headline-md font-bold text-on-surface">{m.candidatures}</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                    <span className="text-caption text-on-surface-variant">{t.labels.cloture}</span>
                    <span className="text-headline-md font-bold text-brand-burgundy">{m.cloture}</span>
                  </div>
                </div>
                <span className="flex items-center justify-center gap-1.5 mt-1 py-2.5 bg-primary text-on-primary rounded-xl text-label-md font-semibold">
                  {t.labels.examiner}
                  <Icon name="arrow_forward" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
