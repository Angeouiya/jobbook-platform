import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getDict } from "@/lib/i18n";

const brouillons = [
  { ref: "KED-2024-11", title: "Refonte du contrôle interne", montant: "2 400 000 FCFA", maj: "12 sept." },
  { ref: "KED-2024-13", title: "Accompagnement clôture semestrielle", montant: "1 150 000 FCFA", maj: "9 sept." },
];

const paiementRequis = [
  { ref: "KED-2024-10", title: "Cartographie des risques BCEAO", montant: "1 500 000 FCFA" },
  { ref: "KED-2024-12", title: "Mission conseil fiscalité indirecte", montant: "980 000 FCFA" },
];

const publiees = [
  { ref: "KED-2024-09", title: "Audit comptable annuel & Consolidation IFRS", candidatures: 24, cloture: "28 sept." },
  { ref: "KED-2024-04", title: "Due Diligence — Projet Delta", candidatures: 8, cloture: "15 oct." },
];

export default function EntrepriseOffresPage() {
  const t = getDict().entreprise.offres;

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-6">
        {/* En-tête */}
        <section className="pt-2 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">{t.intro}</p>
          </div>
          <Link
            href="/entreprise/publier"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 bg-primary text-on-primary rounded-xl text-label-md font-semibold shadow-sm hover:opacity-90 transition-opacity shrink-0"
          >
            <Icon name="add" size={18} />
            <span>{t.newOffer}</span>
          </Link>
        </section>

        {/* Paiement requis */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-headline-sm font-bold text-on-surface">{t.groups.paiementRequis}</h2>
            <span className="px-2 py-0.5 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-label-sm font-bold border border-brand-burgundy/20">
              {paiementRequis.length}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {paiementRequis.map((o) => (
              <div
                key={o.ref}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-brand-burgundy/30 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-body-sm text-on-surface-variant">{t.labels.reference} {o.ref}</span>
                    <h3 className="text-headline-sm font-bold text-on-surface mt-0.5">{o.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-brand-burgundy/10 text-brand-burgundy text-caption font-bold border border-brand-burgundy/20 shrink-0">
                    <Icon name="visibility_off" size={13} />
                    {t.statutInvisible}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border-light">
                  <div className="flex flex-col">
                    <span className="text-caption text-on-surface-variant">{t.labels.montant}</span>
                    <span className="text-body-md font-bold text-on-surface">{o.montant}</span>
                  </div>
                  <Link
                    href="/entreprise/paiements"
                    className="flex items-center gap-1.5 px-4 py-2 bg-brand-burgundy text-white rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Icon name="payments" size={16} />
                    {t.actions.payer}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brouillons */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-headline-sm font-bold text-on-surface">{t.groups.brouillons}</h2>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-label-sm font-bold">
              {brouillons.length}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {brouillons.map((o) => (
              <div
                key={o.ref}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex flex-col gap-3"
              >
                <div>
                  <span className="text-body-sm text-on-surface-variant">{t.labels.reference} {o.ref}</span>
                  <h3 className="text-headline-sm font-bold text-on-surface mt-0.5">{o.title}</h3>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border-light">
                  <div className="flex flex-col">
                    <span className="text-caption text-on-surface-variant">{t.labels.maj}</span>
                    <span className="text-body-md font-semibold text-on-surface">{o.maj}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3.5 py-2 bg-surface-container-low text-on-surface rounded-xl text-label-md font-semibold border border-border-light hover:bg-surface-container transition-colors">
                      {t.actions.modifier}
                    </button>
                    <Link
                      href="/entreprise/publier"
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                    >
                      {t.actions.finaliser}
                      <Icon name="arrow_forward" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publiées */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-headline-sm font-bold text-on-surface">{t.groups.publiees}</h2>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-label-sm font-bold">
              {publiees.length}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {publiees.map((o) => (
              <div
                key={o.ref}
                className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-body-sm text-on-surface-variant">{t.labels.reference} {o.ref}</span>
                    <h3 className="text-headline-sm font-bold text-on-surface mt-0.5">{o.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary/10 text-secondary text-caption font-bold border border-secondary/20 shrink-0">
                    <Icon name="visibility" size={13} />
                    {t.statutVisible}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                    <span className="text-caption text-on-surface-variant">{t.labels.candidatures}</span>
                    <span className="text-headline-md font-bold text-on-surface">{o.candidatures}</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low p-2.5 rounded-xl border border-border-light">
                    <span className="text-caption text-on-surface-variant">{t.labels.cloture}</span>
                    <span className="text-headline-md font-bold text-brand-burgundy">{o.cloture}</span>
                  </div>
                </div>
                <Link
                  href="/entreprise/candidatures"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-primary text-on-primary rounded-xl text-label-md font-semibold hover:opacity-90 transition-opacity"
                >
                  {t.actions.examiner}
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
