import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import Link from "next/link";

const recommendedMissions = [
  { sector: "Fintech · Tier-1 Bank", title: "Lead Cloud Architect Migration", desc: "Conception et supervision de l'architecture zero-trust multi-cloud pour la nouvelle plateforme de trading haute fréquence.", tags: ["AWS Expert", "Kubernetes", "Terraform"], rate: "€1,400 / jour", location: "Paris / Hybride · 6 mois" },
  { sector: "Luxe Tech · Maison de Couture", title: "Principal Software Architect", desc: "Refonte globale du système d'inventaire mondial et intégration de la traçabilité blockchain pour les collections exclusives.", tags: ["Microservices", "GraphQL", "Go"], rate: "€1,250 / jour", location: "Genève / Remote · 12 mois" },
  { sector: "AI Venture · DeepTech", title: "AI Infrastructure Architect", desc: "Mise à l'échelle des clusters de calcul GPU pour l'entraînement de LLMs souverains et sécurisés.", tags: ["PyTorch", "CUDA", "Slurm"], rate: "€1,500 / jour", location: "Paris / Sur site · 4 mois" },
];

export default function EspacePrestatairePage() {
  return (
    <>
      <AppHeader rightAction="notifications" />
      <main className="flex flex-col relative w-full px-4 pt-20 pb-28 bg-surface flex-grow">
        {/* Greeting */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-headline-lg font-bold text-on-surface">Bonjour, Alexandre</h1>
              <Icon name="verified" size={20} fill className="text-secondary" />
            </div>
            <p className="text-body-md text-on-surface-variant mt-0.5">Architecte Logiciel Senior</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-surface-container-low border border-border-light flex items-center justify-center shadow-sm">
            <span className="text-headline-sm text-on-surface">AV</span>
          </div>
        </div>

        {/* Profile completion */}
        <div className="bg-surface-container-low border border-border-light rounded-xl p-4 mb-4 animate-fade-in">
          <div className="flex justify-between items-start mb-1">
            <div>
              <span className="text-label-sm font-semibold text-brand-burgundy uppercase tracking-wider">Statut du dossier</span>
              <h2 className="text-headline-sm text-on-surface mt-0.5">Profil complété à 78%</h2>
            </div>
            <span className="text-headline-sm font-bold text-on-surface">78%</span>
          </div>
          <div className="w-full h-2 bg-border-light rounded-full overflow-hidden my-2">
            <div className="h-full bg-brand-burgundy rounded-full transition-all duration-500" style={{ width: "78%" }} />
          </div>
          <div className="flex items-center justify-between mt-2 pt-1 gap-3">
            <span className="text-body-sm text-on-surface-variant">Ajoutez vos certifications cloud pour maximiser votre visibilité.</span>
            <button className="bg-brand-burgundy hover:opacity-90 text-white px-3 py-1 rounded-lg text-label-md font-medium transition-all active:scale-95 whitespace-nowrap shadow-sm">
              Finaliser
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[
            { value: "€1,200", label: "TJM Moyen" },
            { value: "14", label: "Opportunités", highlight: true },
            { value: "100%", label: "Réponse" },
          ].map((m, i) => (
            <div key={i} className="bg-surface-container-low border border-border-light rounded-xl p-2 text-center">
              <span className={`text-headline-md font-bold block ${m.highlight ? "text-brand-burgundy" : "text-on-surface"}`}>{m.value}</span>
              <span className="text-label-sm font-medium text-on-surface-variant block mt-1">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Recommended missions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-headline-md font-bold text-on-surface">Recommandées pour vous</h2>
          <Link href="#" className="text-label-md font-semibold text-brand-burgundy hover:underline">Voir tout</Link>
        </div>

        <div className="flex flex-col gap-3 stagger">
          {recommendedMissions.map((m, i) => (
            <div key={i} className="card animate-slide-up">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <span className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider">{m.sector}</span>
                  <h3 className="text-headline-sm font-bold text-on-surface mt-0.5">{m.title}</h3>
                </div>
                <button className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-brand-burgundy transition-colors">
                  <Icon name="bookmark" size={18} />
                </button>
              </div>
              <p className="text-body-sm text-on-surface-variant line-clamp-2 mb-3 leading-relaxed">{m.desc}</p>
              <div className="flex flex-wrap items-center gap-1 mb-3">
                {m.tags.map((tag, j) => (
                  <span key={j} className="bg-surface-container-low text-on-surface px-2.5 py-1 rounded-md text-label-md font-medium">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border-light">
                <div>
                  <span className="text-headline-sm font-bold text-on-surface">{m.rate}</span>
                  <span className="text-body-sm text-on-surface-variant block">{m.location}</span>
                </div>
                <Link href="/mission-verrouillee" className="bg-primary text-on-primary px-3 py-1.5 rounded-lg text-label-md font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm">
                  Postuler
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
