import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import Link from "next/link";

const metrics = [
  { icon: "group", label: "À examiner", sub: "12 nouvelles candidatures", action: "Gérer", urgent: true },
  { icon: "work", label: "Missions actives", sub: "4 en cours d'exécution", action: "Voir tout" },
  { icon: "error", label: "Décisions requises", sub: "3 validations en attente", action: "Intervenir", urgent: true },
];

const missions = [
  { tag: "Finance & Audit", ref: "KED-2024-09", title: "Audit comptable annuel", candidatures: 24, cloture: "28 sept." },
  { tag: "Stratégie M&A", ref: "KED-2024-04", title: "Due Diligence - Projet Delta", candidatures: 8, cloture: "15 oct." },
];

export default function EspaceEntreprisePage() {
  return (
    <>
      <AppHeader rightAction="notifications" />
      <main className="flex flex-col relative w-full px-4 pt-20 pb-28 bg-surface flex-grow">
        <div className="flex flex-col w-full gap-6">
          {/* Greeting */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">Espace Entreprise</span>
              <h1 className="text-headline-lg font-bold text-on-surface">Bonjour, Kedge Capital</h1>
            </div>
            <Link href="/publication" className="flex items-center gap-1 px-3 py-2.5 bg-primary text-on-primary rounded-xl text-label-md font-semibold shadow-sm hover:opacity-90 transition-colors">
              <Icon name="add" size={18} />
              <span>Publier</span>
            </Link>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 gap-3 stagger">
            {metrics.map((m, i) => (
              <div key={i} className="card flex items-center justify-between cursor-pointer hover:border-brand-burgundy/40 animate-slide-up">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    m.urgent ? "bg-secondary/10 text-secondary border border-secondary/20" : "bg-surface-container-low text-on-surface border border-border-light"
                  }`}>
                    <Icon name={m.icon} size={20} fill />
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-bold text-on-surface">{m.label}</h3>
                    <p className="text-body-sm text-on-surface-variant">{m.sub}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${m.urgent ? "text-brand-burgundy" : "text-on-surface-variant"}`}>
                  <span className="text-label-md font-semibold">{m.action}</span>
                  <Icon name="chevron_right" size={18} />
                </div>
              </div>
            ))}
          </div>

          {/* Missions section */}
          <div className="flex flex-col gap-4 mt-1">
            <div className="flex items-center justify-between">
              <h2 className="text-headline-md font-bold text-on-surface">Vos missions</h2>
              <span className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">2 actives</span>
            </div>

            {missions.map((m, i) => (
              <Link key={i} href="/comparateur" className="card flex flex-col gap-3 animate-slide-up block">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <span className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded font-medium text-[11px]">{m.tag}</span>
                      <span className="text-body-sm text-on-surface-variant">· Réf: {m.ref}</span>
                    </div>
                    <h3 className="text-headline-sm font-bold text-on-surface">{m.title}</h3>
                  </div>
                  <button className="w-8 h-8 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant cursor-pointer">
                    <Icon name="more_vert" size={18} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 py-1">
                  <div className="flex flex-col bg-surface-container-low p-2 rounded-lg border border-border-light/60">
                    <span className="text-[12px] text-on-surface-variant">Candidatures</span>
                    <span className="text-headline-md font-bold text-on-surface">{m.candidatures}</span>
                  </div>
                  <div className="flex flex-col bg-surface-container-low p-2 rounded-lg border border-border-light/60">
                    <span className="text-[12px] text-on-surface-variant">Clôture</span>
                    <span className="text-headline-md font-bold text-brand-burgundy">{m.cloture}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center -space-x-2">
                    {["JD", "AM"].map((init, j) => (
                      <div key={j} className="w-7 h-7 rounded-full bg-primary border-2 border-surface-container-lowest flex items-center justify-center text-[10px] text-on-primary font-medium">{init}</div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-surface-container-low border-2 border-surface-container-lowest flex items-center justify-center text-[10px] text-on-surface-variant font-medium border border-border-light">+{m.candidatures - 2}</div>
                  </div>
                  <span className="flex items-center gap-1 px-3 py-2 bg-primary text-on-primary rounded-lg text-label-md hover:opacity-90 transition-colors">
                    <span>Examiner</span>
                    <Icon name="arrow_forward" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
