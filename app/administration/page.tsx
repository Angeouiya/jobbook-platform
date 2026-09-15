import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function AdministrationPage() {
  return (
    <>
      <AppHeader rightAction="notifications" />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-dvh">
        <div className="flex flex-col w-full px-4 py-3 space-y-5">
          {/* Masthead */}
          <section className="bg-primary text-on-primary rounded-2xl p-5 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-1.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-on-primary/10 text-on-primary text-label-sm tracking-wider uppercase w-fit font-bold border border-on-primary/10">
                  CONSOLE SUPERVISION ADMIN V4.8
                </span>
                <h1 className="text-headline-md text-on-primary tracking-tight font-bold">Surveillance & Gouvernance</h1>
                <p className="text-caption text-on-primary/60">Session sécurisée ID #ADM-8802 · Niveau 3 (Restreint)</p>
              </div>
              <div className="flex items-center gap-1.5 bg-on-primary/10 px-3 py-1.5 rounded-full border border-on-primary/10">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="text-label-sm text-on-primary tracking-wide font-semibold">En direct</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-on-primary/10 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-1.5">
                <Icon name="verified_user" size={16} className="text-on-primary/80" />
                <span className="text-caption text-on-primary/80 font-medium">Agrément UEMOA conforme</span>
              </div>
              <div className="flex items-center justify-end gap-1.5">
                <Icon name="database" size={16} className="text-on-primary/80" />
                <span className="text-caption text-on-primary/80 font-medium">Ledger synced (1.2ms)</span>
              </div>
            </div>
          </section>

          {/* Quick filters */}
          <nav className="overflow-x-auto flex items-center gap-1.5 py-1">
            {[
              { icon: "dashboard", label: "Vue générale", active: true },
              { icon: "pending_actions", label: "Offres (4)", secondary: true },
              { icon: "person_search", label: "Profils (7)" },
              { icon: "balance", label: "Paiements (2)", secondary: true },
            ].map((f, i) => (
              <button key={i} className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-label-sm whitespace-nowrap transition-all ${
                f.active ? "bg-primary text-on-primary shadow-md" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border border-border-light"
              }`}>
                <Icon name={f.icon} size={16} className={f.secondary ? "text-secondary" : ""} />
                <span className="font-semibold">{f.label}</span>
              </button>
            ))}
          </nav>

          {/* KPI Grid */}
          <section className="grid grid-cols-2 gap-2.5 stagger">
            {[
              { icon: "payments", label: "Flux Validés", value: "142 500 000", sub: "FCFA cumulés MTD" },
              { icon: "fact_check", label: "Offres En Attente", value: "6", sub: "Conformité statutaire", highlight: true },
              { icon: "fingerprint", label: "Vérifications KYC", value: "19", sub: "En cours de revue" },
              { icon: "gavel", label: "Litiges Actifs", value: "0", sub: "Arbitrage zéro risque" },
            ].map((kpi, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex flex-col justify-between animate-slide-up border border-border-light">
                <div className="flex items-center justify-between">
                  <span className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">{kpi.label}</span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${kpi.highlight ? "bg-secondary/10" : "bg-surface-container-low"}`}>
                    <Icon name={kpi.icon} size={16} className={kpi.highlight ? "text-secondary" : "text-on-surface"} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className={`text-headline-md tracking-tight font-bold ${kpi.highlight ? "text-secondary" : "text-on-surface"}`}>{kpi.value}</p>
                  <p className="text-caption text-on-surface-variant mt-0.5">{kpi.sub}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Flux strip */}
          <section className="bg-surface-container-lowest rounded-2xl p-4 flex items-center justify-between shadow-sm border border-border-light hover:border-outline-variant transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center shadow-sm border border-border-light">
                <Icon name="shield" size={18} className="text-on-surface" />
              </div>
              <div>
                <p className="text-label-md text-on-surface font-bold">Supervision des Flux & Séquestres</p>
                <p className="text-caption text-on-surface-variant mt-0.5">Conformité stricte BCEAO et règles anti-fraude</p>
              </div>
            </div>
            <Icon name="chevron_right" size={20} className="text-on-surface-variant" />
          </section>

          {/* Priority actions */}
          <section className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-4 bg-secondary rounded-full" />
                <h2 className="text-headline-md text-on-surface font-bold">Actions prioritaires</h2>
              </div>
              <span className="text-label-sm text-secondary uppercase font-bold px-2.5 py-0.5 rounded bg-secondary/10">3 dossiers urgents</span>
            </div>

            {/* Action cards */}
            {[
              { category: "Mandat Stratégique", title: "Validation offre entreprise", desc: "Kedge Capital (M&A Advisory) · 4.5M FCFA", deadline: "Sous 2h", doc: "Mandat_Cession_WestAfrica.pdf", docSize: "3.4 MB" },
              { category: "Conformité Professionnelle", title: "Vérification identité & agrément", desc: "Cabinet Audit Dakar · Ordre National des Experts", deadline: "Critique", critical: true },
              { category: "Séquestre & Trésorerie", title: "Réconciliation dépôt fiduciaire", desc: "Lot #ESC-2024-44 · 12.8M FCFA en attente", deadline: "24h" },
            ].map((action, i) => (
              <article key={i} className={`card flex flex-col space-y-2.5 ${action.critical ? "border-secondary/30" : ""}`}>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className={`text-caption font-bold uppercase tracking-wider ${action.critical ? "text-secondary" : "text-on-surface-variant"}`}>{action.category}</span>
                    <h3 className="text-headline-sm text-on-surface font-bold">{action.title}</h3>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">{action.desc}</p>
                  </div>
                  <span className={`inline-flex px-2.5 py-1 rounded-lg text-label-sm font-semibold shrink-0 ${action.critical ? "bg-secondary/10 text-secondary" : "bg-surface-container-low text-on-surface"}`}>
                    {action.deadline}
                  </span>
                </div>
                {action.doc && (
                  <div className="bg-surface-container-low rounded-xl p-2.5 flex items-center justify-between border border-border-light">
                    <div className="flex items-center gap-2">
                      <Icon name="description" size={16} className="text-on-surface-variant" />
                      <span className="text-caption text-on-surface font-medium">{action.doc}</span>
                    </div>
                    <span className="text-caption text-on-surface-variant">{action.docSize}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 pt-1.5">
                  <button className="flex-1 h-10 rounded-xl bg-primary text-on-primary text-label-md uppercase tracking-wider flex items-center justify-center gap-1.5 hover:opacity-90 transition-colors shadow-sm font-semibold">
                    <Icon name="check" size={18} />
                    <span>Approuver</span>
                  </button>
                  <button className="flex-1 h-10 rounded-xl bg-surface-container-low text-on-surface text-label-md uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors border border-border-light font-semibold">
                    <Icon name="close" size={18} />
                    <span>Refuser</span>
                  </button>
                </div>
              </article>
            ))}
          </section>

          {/* Registry modules */}
          <section>
            <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant font-bold mb-3">Registre & Modules</h3>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { icon: "groups", label: "Membres" },
                { icon: "receipt_long", label: "Mandats" },
                { icon: "account_balance_wallet", label: "Séquestres" },
                { icon: "report", label: "Litiges" },
                { icon: "analytics", label: "Analytics" },
                { icon: "settings", label: "Paramètres" },
              ].map((mod, i) => (
                <Link key={i} href="#" className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col items-center gap-2 shadow-sm hover:bg-surface-container-low hover:shadow-md transition-all border border-border-light">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center">
                    <Icon name={mod.icon} size={22} className="text-on-surface" />
                  </div>
                  <span className="text-caption text-on-surface-variant font-bold">{mod.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Regulatory footer */}
          <div className="text-center py-5 border-t border-border-light">
            <p className="text-caption text-on-surface-variant font-medium">
              JobBook Sovereign Platform · Agrément BCEAO N° 892-U · Conforme UEMOA
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
