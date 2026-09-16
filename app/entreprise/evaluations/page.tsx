import { Icon } from "@/components/Icon";
import { getDict } from "@/lib/i18n";

const aEvaluer = [
  { mission: "Cartographie des risques BCEAO", ref: "KED-2024-02", prestataire: "Fatou Ndiaye" },
];

const emises = [
  { mission: "Refonte du contrôle interne", ref: "KED-2023-21", prestataire: "Cabinet Diallo & Associés", note: 5, commentaire: "Rigueur remarquable et respect scrupuleux des délais convenus." },
  { mission: "Consolidation IFRS Groupe", ref: "KED-2023-14", prestataire: "Alexandre Vance", note: 4, commentaire: "Expertise solide ; restitutions claires et documentées." },
];

function Stars({ note }: { note: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={16} fill={i < note} className={i < note ? "text-brand-burgundy" : "text-outline-variant"} />
      ))}
    </div>
  );
}

export default function EntrepriseEvaluationsPage() {
  const t = getDict().entreprise.evaluations;

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-6">
        <section className="pt-2">
          <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">{t.intro}</p>
        </section>

        {/* À évaluer */}
        <section className="flex flex-col gap-3">
          {aEvaluer.map((e) => (
            <div
              key={e.ref}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-brand-burgundy/30 shadow-sm flex items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <span className="text-body-sm text-on-surface-variant">{t.labels.mission} · {e.ref}</span>
                <h3 className="text-headline-sm font-bold text-on-surface mt-0.5 truncate">{e.mission}</h3>
                <p className="text-body-sm text-on-surface-variant mt-0.5">{t.labels.prestataire} : {e.prestataire}</p>
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-burgundy text-white rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity shrink-0"
              >
                <Icon name="rate_review" size={16} />
                <span className="hidden sm:inline">{t.actions.evaluer}</span>
              </button>
            </div>
          ))}
        </section>

        {/* Évaluations émises */}
        <section className="flex flex-col gap-3">
          {emises.map((e) => (
            <div
              key={e.ref}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex flex-col gap-2.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-body-sm text-on-surface-variant">{t.labels.mission} · {e.ref}</span>
                  <h3 className="text-headline-sm font-bold text-on-surface mt-0.5 truncate">{e.mission}</h3>
                  <p className="text-body-sm text-on-surface-variant mt-0.5">{t.labels.prestataire} : {e.prestataire}</p>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <Stars note={e.note} />
                  <span className="text-caption text-on-surface-variant mt-1">{t.labels.note} {e.note}/5</span>
                </div>
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed pt-2 border-t border-border-light">
                « {e.commentaire} »
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
