import { Icon } from "@/components/Icon";
import Link from "next/link";

const steps = [
  { label: "Dossier déverrouillé & Frais acquittés", desc: "Accès NDA scellé & documentation préliminaire débloquée.", date: "14 Oct. · 09:12 GMT", done: true },
  { label: "Offre formelle déposée", desc: "Méthodologie financière, chronogramme et composition d'équipe.", date: "15 Oct. · 18:40 GMT", done: true, badge: "18 500 000 FCFA" },
  { label: "Revue de conformité", desc: "Vérification des accréditations et certifications professionnelles.", date: "16 Oct. · 10:00 GMT", done: true },
  { label: "Audition du Comité", desc: "Présentation orale devant le comité d'adjudication.", date: "En cours", active: true },
  { label: "Séquestre & Contractualisation", desc: "Dépôt fiduciaire et signature du contrat de mission.", date: "En attente" },
];

export default function SuiviCandidaturePage() {
  return (
    <main className="flex flex-col relative w-full bg-surface min-h-dvh">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-surface-bright/95 backdrop-blur-md px-5 py-3 flex items-center justify-between border-b border-border-light pt-safe">
        <Link href="/espace-prestataire" className="flex items-center gap-1.5 text-on-surface hover:opacity-75 transition-opacity">
          <Icon name="arrow_back_ios" size={16} />
          <span className="text-label-sm uppercase tracking-wider font-semibold">Candidatures</span>
        </Link>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-border-light">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-burgundy animate-pulse" />
          <span className="text-label-sm tracking-wide text-brand-burgundy font-semibold">En revue décisionnelle</span>
        </div>
      </header>

      <div className="flex flex-col w-full px-5 pb-10">
        {/* Mandat summary */}
        <section className="pt-5 pb-5">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-lg bg-surface-container-low text-caption text-on-surface-variant uppercase tracking-wider font-semibold border border-border-light">Mandat Privé</span>
            <span className="text-caption text-on-surface-variant font-medium">Réf. #KED-2024-09</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant" />
            <span className="text-caption text-on-surface-variant">14 Oct. 2024</span>
          </div>
          <h1 className="text-headline-lg text-on-surface mb-3 font-bold tracking-tight leading-tight">Audit LBO & Consolidation Sous-Régionale</h1>
          <div className="flex items-center gap-2.5 bg-surface-container-low rounded-xl px-3 py-2.5 border border-border-light">
            <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm border border-border-light">
              <Icon name="domain" size={16} className="text-on-surface" />
            </div>
            <div className="flex flex-col">
              <span className="text-body-md text-on-surface font-semibold">Kedge Capital West Africa</span>
              <span className="text-caption text-on-surface-variant">Abidjan, Côte d&apos;Ivoire</span>
            </div>
          </div>
        </section>

        {/* Action card */}
        <section className="mb-5">
          <div className="relative overflow-hidden bg-surface-container-lowest rounded-2xl p-5 shadow-md border border-border-light">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-burgundy" />
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-sm">
                  <Icon name="videocam" size={13} fill />
                </span>
                <span className="text-label-md uppercase tracking-wider text-brand-burgundy font-bold">Action requise</span>
              </div>
              <span className="text-caption text-on-surface-variant font-medium px-2 py-0.5 rounded bg-surface-container-low">Sous 24h</span>
            </div>
            <h2 className="text-headline-md text-on-surface mb-2 font-bold">Audition du Comité d&apos;Adjudication</h2>
            <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
              Le collège exécutif de Kedge Capital a présélectionné votre offre d&apos;expertise. Veuillez confirmer votre disponibilité pour l&apos;audition.
            </p>

            {/* Slot */}
            <div className="bg-surface-container-low p-3.5 rounded-xl flex items-center justify-between mb-4 border border-border-light">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm">
                  <Icon name="calendar_today" size={20} className="text-on-surface" />
                </div>
                <div>
                  <div className="text-body-md text-on-surface font-bold">Demain, 15:00 GMT</div>
                  <div className="text-caption text-on-surface-variant mt-0.5">Chambre Sécurisée Sovereign · 45 min</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-label-sm text-on-surface font-semibold border border-border-light shadow-sm">Visio HD</span>
            </div>

            <div className="flex flex-col gap-2.5">
              <button className="btn-primary py-3.5">
                <Icon name="check_circle" size={18} />
                <span>Confirmer le créneau de 15h00</span>
              </button>
              <button className="btn-secondary py-3.5">
                <Icon name="schedule" size={16} />
                <span>Proposer une alternative</span>
              </button>
            </div>
          </div>
        </section>

        {/* Stepper */}
        <section className="mb-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant font-bold">Protocole d&apos;Adjudication</h3>
            <span className="text-caption text-on-surface-variant font-medium px-2 py-0.5 rounded bg-surface-container-low">Étape 4 sur 5</span>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-md border border-border-light">
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={i} className={`flex gap-3.5 ${i < steps.length - 1 ? "pb-5" : ""} relative`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      step.done ? "bg-primary text-on-primary" : step.active ? "bg-brand-burgundy text-white ring-4 ring-brand-burgundy/20" : "bg-surface-container-high text-on-surface-variant"
                    }`}>
                      {step.done ? <Icon name="check" size={14} /> : step.active ? <span className="w-2.5 h-2.5 rounded-full bg-white" /> : <span className="w-2.5 h-2.5 rounded-full bg-on-surface-variant/30" />}
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`w-[2px] grow my-1.5 rounded-full ${step.done ? "bg-primary" : "bg-border-light"}`} />
                    )}
                  </div>
                  <div className={`pt-0.5 flex-1 ${step.active ? "pb-1" : ""}`}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className={`text-body-md font-bold ${step.active ? "text-brand-burgundy" : "text-on-surface"}`}>{step.label}</h4>
                      {step.badge && <span className="px-2 py-0.5 rounded-lg bg-surface-container-low text-caption text-on-surface font-semibold border border-border-light">{step.badge}</span>}
                    </div>
                    <p className="text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">{step.desc}</p>
                    <span className={`text-caption mt-1.5 inline-block font-medium ${step.active ? "text-brand-burgundy font-bold" : "text-on-surface-variant"}`}>{step.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
