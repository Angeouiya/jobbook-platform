import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function AccueilPage() {
  return (
    <>
      <AppHeader rightAction="notifications" />
      <main className="flex flex-col relative w-full px-4 pt-20 pb-28 bg-surface flex-grow">
        {/* Tagline */}
        <div className="flex flex-col mb-6 mt-1 animate-fade-in">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-burgundy mb-1">
            Plateforme Exécutive
          </span>
          <h1 className="text-headline-lg font-bold text-on-surface mb-2">
            Les bonnes missions.<br />Les bons professionnels.
          </h1>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Un marché exclusif réservé aux talents de haut niveau et leaders d&apos;exception.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
            <Icon name="search" size={20} />
          </div>
          <input
            className="w-full h-12 pl-11 pr-12 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant border border-border-light rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-body-md"
            placeholder="Rechercher une mission d'envergure..."
            type="text"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button className="w-8 h-8 rounded-lg bg-surface-container-lowest border border-border-light flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors shadow-sm">
              <Icon name="tune" size={18} />
            </button>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          <span className="pill pill-active">Actives</span>
          <span className="pill pill-inactive">Catégorie <Icon name="expand_more" size={14} /></span>
          <span className="pill pill-inactive">Localisation <Icon name="expand_more" size={14} /></span>
          <span className="pill pill-inactive">Budget <Icon name="expand_more" size={14} /></span>
        </div>

        {/* Missions header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-headline-md font-bold text-on-surface">Missions récentes</h2>
            <p className="text-caption text-on-surface-variant">Opportunités stratégiques ouvertes aux candidatures</p>
          </div>
          <Link href="#" className="text-label-md text-brand-burgundy font-semibold hover:underline">Voir tout</Link>
        </div>

        {/* Mission cards */}
        <div className="flex flex-col gap-3.5 stagger">
          {[
            { tag: "Tech & Logiciel", title: "Développement d'une application de gestion", location: "Abidjan · Hybride", budget: "750 000 – 1 200 000 FCFA", deadline: "12 jours", isNew: true },
            { tag: "Direction Financière", title: "Audit et refonte du système budgétaire", location: "Dakar · Distant", budget: "1 500 000 FCFA", deadline: "5 jours" },
            { tag: "Marketing Stratégique", title: "Campagne d'acquisition grand compte", location: "Paris · Présentiel", budget: "900 000 FCFA", deadline: "18 jours" },
          ].map((m, i) => (
            <Link key={i} href="/mission-verrouillee" className="card animate-slide-up block">
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-brand-burgundy/10 text-brand-burgundy">{m.tag}</span>
                    {m.isNew && <span className="text-caption text-on-surface-variant">Nouveau</span>}
                  </div>
                  <h3 className="text-headline-sm text-on-surface leading-snug">{m.title}</h3>
                </div>
                <button className="w-8 h-8 rounded-lg bg-surface-container-lowest border border-border-light flex items-center justify-center text-on-surface-variant hover:text-brand-burgundy transition-colors shrink-0 shadow-xs">
                  <Icon name="bookmark" size={18} />
                </button>
              </div>
              <p className="text-body-sm text-on-surface-variant mb-3.5 flex items-center gap-1.5">
                <Icon name="location_on" size={15} className="text-on-surface-variant" />
                {m.location}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border-subtle">
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-on-surface-variant uppercase">Rémunération</span>
                  <span className="text-headline-sm text-on-surface font-bold text-[14px]">{m.budget}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-lowest border border-border-light text-on-surface-variant text-label-sm font-medium">
                  <Icon name="schedule" size={13} className="text-brand-burgundy" />
                  <span>Clôture dans {m.deadline}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-surface-container-low border border-border-light text-on-surface flex flex-col items-center text-center relative overflow-hidden animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-surface-container-lowest border border-border-light flex items-center justify-center mb-3 shadow-sm">
            <Icon name="workspace_premium" size={24} className="text-brand-burgundy" />
          </div>
          <h3 className="text-headline-md font-bold mb-1.5">Rejoignez le Cercle Exécutif</h3>
          <p className="text-body-sm text-on-surface-variant mb-4 max-w-xs leading-relaxed">
            Accédez à des missions confidentielles exclusives négociées directement avec les comités de direction.
          </p>
          <Link href="/choix-role" className="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-medium text-body-md hover:opacity-90 transition-colors shadow-sm text-center">
            Créer mon profil
          </Link>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
