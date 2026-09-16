import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getDict } from "@/lib/i18n";

const prestataires = [
  { name: "Cabinet Diallo & Associés", match: "99%", tjm: "1 800 000 FCFA", mission: "Audit comptable annuel & Consolidation IFRS", tags: ["IFRS", "SYSCOHADA", "Big Four"], verified: true },
  { name: "Alexandre Vance", match: "96%", tjm: "1 650 000 FCFA", mission: "Audit comptable annuel & Consolidation IFRS", tags: ["Audit Légal", "Consolidation"], verified: false },
  { name: "Fatou Ndiaye", match: "92%", tjm: "1 400 000 FCFA", mission: "Cartographie des risques BCEAO", tags: ["SYSCOHADA", "Fiscalité"], verified: true },
];

export default function EntreprisePreselectionPage() {
  const t = getDict().entreprise.preselection;

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-6">
        <section className="pt-2">
          <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">{t.intro}</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 stagger">
          {prestataires.map((p, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm hover:shadow-md transition-all animate-slide-up flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${i === 0 ? "bg-brand-burgundy" : "bg-primary"}`}>
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-headline-sm font-bold text-on-surface">{p.name}</h3>
                      {p.verified && <Icon name="verified" size={14} fill className="text-secondary" />}
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{t.labels.mission} · {p.mission}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-headline-md font-bold text-brand-burgundy">{p.match}</span>
                  <span className="text-caption text-on-surface-variant">{t.labels.match}</span>
                </div>
              </div>

              <div className="bg-surface-container-low p-2.5 rounded-xl border border-border-light mb-3">
                <span className="text-caption text-on-surface-variant block">{t.labels.tjm}</span>
                <span className="text-body-md font-semibold text-on-surface">{p.tjm}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {p.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded text-caption">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-border-light mt-auto">
                <Link
                  href="/entreprise/missions"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-on-primary rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                >
                  <Icon name="how_to_reg" size={16} />
                  {t.actions.selectionner}
                </Link>
                <Link
                  href="/entreprise/candidatures"
                  className="flex items-center justify-center px-3.5 py-2 bg-surface-container-low text-on-surface rounded-xl text-label-md font-semibold hover:bg-surface-container transition-colors border border-border-light"
                >
                  {t.actions.examiner}
                </Link>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 bg-surface-container-low text-on-surface-variant rounded-xl hover:bg-surface-container transition-colors border border-border-light shrink-0"
                  aria-label={t.actions.retirer}
                >
                  <Icon name="close" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
