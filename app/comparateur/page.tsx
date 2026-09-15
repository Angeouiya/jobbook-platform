import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function ComparateurPage() {
  return (
    <>
      <AppHeader title="Comparateur" showBack backHref="/espace-entreprise" rightAction="notifications" />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface px-4">
        {/* Header */}
        <div className="pt-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded text-label-sm font-semibold uppercase tracking-wider">Appel d&apos;offres restreint</span>
          </div>
          <h1 className="text-headline-lg font-bold text-on-surface">Audit comptable annuel & Consolidation IFRS</h1>
          <p className="text-body-sm text-on-surface-variant mt-1">Réf. KED-2024-09 · 24 candidatures reçues · Clôture 28 sept.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { value: "24", label: "Total" },
            { value: "8", label: "Présélection", highlight: true },
            { value: "3", label: "Comparateur" },
          ].map((s, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-xl p-2 text-center border border-border-light shadow-sm">
              <span className={`text-headline-md font-bold block ${s.highlight ? "text-brand-burgundy" : "text-on-surface"}`}>{s.value}</span>
              <span className="text-caption text-on-surface-variant">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl mb-4">
          {["Toutes", "Présélection", "Comparateur"].map((tab, i) => (
            <button key={i} className={`flex-1 py-2 rounded-lg text-label-md text-center transition-all ${
              i === 2 ? "bg-primary text-on-primary font-semibold shadow-sm" : "text-on-surface-variant hover:text-on-surface"
            }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Candidate cards */}
        <div className="flex flex-col gap-3 stagger">
          {[
            { name: "Cabinet Diallo & Associés", match: "99%", location: "Abidjan, CI", exp: "12 ans", tjm: "1 800 000 FCFA", tags: ["IFRS", "SYSCOHADA", "Big Four"], verified: true },
            { name: "Alexandre Vance", match: "96%", location: "Dakar, SN", exp: "9 ans", tjm: "1 650 000 FCFA", tags: ["Audit Légal", "Consolidation", "Banque"] },
          ].map((c, i) => (
            <div key={i} className="card animate-slide-up">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-on-primary font-bold ${i === 0 ? "bg-brand-burgundy" : "bg-primary"}`}>
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-headline-sm text-on-surface">{c.name}</h3>
                      {c.verified && <Icon name="verified" size={14} fill className="text-secondary" />}
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{c.location} · {c.exp} d&apos;expérience</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-headline-md font-bold text-brand-burgundy">{c.match}</span>
                  <span className="text-caption text-on-surface-variant">match</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-surface-container-low p-2 rounded-lg">
                  <span className="text-caption text-on-surface-variant block">TJM proposé</span>
                  <span className="text-body-md font-semibold text-on-surface">{c.tjm}</span>
                </div>
                <div className="bg-surface-container-low p-2 rounded-lg">
                  <span className="text-caption text-on-surface-variant block">Expérience</span>
                  <span className="text-body-md font-semibold text-on-surface">{c.exp}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {c.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded text-caption">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border-light">
                <Link href="/suivi-candidature" className="flex-1 py-2 bg-primary text-on-primary rounded-lg text-label-md text-center font-semibold hover:opacity-90 transition-colors">
                  Examiner
                </Link>
                <button className="flex-1 py-2 bg-surface-container-low text-on-surface rounded-lg text-label-md text-center font-semibold hover:bg-surface-container transition-colors border border-border-light">
                  Contacter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Escrow guarantee */}
        <div className="mt-6 p-3 bg-surface-container-low rounded-xl flex items-start gap-2.5">
          <Icon name="shield" size={18} fill className="text-secondary shrink-0 mt-0.5" />
          <div>
            <p className="text-label-md text-on-surface font-semibold">Garantie Séquestre UEMOA</p>
            <p className="text-caption text-on-surface-variant leading-relaxed">
              Tous les paiements sont protégés par dépôt fiduciaire conformément à la réglementation BCEAO.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
