import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function MissionVerrouilleePage() {
  return (
    <>
      <AppHeader title="Mandate Dossier" showBack backHref="/accueil" />
      <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface min-h-dvh">
        <div className="flex flex-col w-full px-4 pb-28">
          {/* Badges */}
          <div className="flex items-center justify-between gap-2 pt-4 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-secondary/5 text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-label-sm uppercase tracking-wider">Finance & Audit</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface">
              <Icon name="check_circle" size={14} className="text-on-surface-variant" />
              <span className="text-label-sm">Actif</span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h2 className="text-headline-lg text-on-surface">Audit comptable annuel & Consolidation IFRS</h2>
            <div className="flex items-start gap-1.5 text-on-surface-variant mt-1">
              <Icon name="verified_user" size={16} className="text-outline shrink-0 mt-0.5" />
              <p className="text-body-sm">Institution Financière Panafricaine <span className="text-outline text-caption">(Identité sous accord de confidentialité)</span></p>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-2 mb-4 stagger">
            {[
              { icon: "payments", label: "Honoraires", value: "1 800 000 FCFA", sub: "par mois · T.J.M. équivalent" },
              { icon: "location_on", label: "Lieu", value: "Abidjan", sub: "Mode hybride (3j / 2j)" },
              { icon: "schedule", label: "Clôture", value: "Dans 14 jours", sub: "Dépôt confidentiel", highlight: true },
              { icon: "military_tech", label: "Séniorité", value: "Senior / Exécutif", sub: "Min. 8 ans en Big Four/Banque" },
            ].map((m, i) => (
              <div key={i} className="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex flex-col justify-between animate-slide-up">
                <div className="flex items-center gap-1 text-on-surface-variant mb-1">
                  <Icon name={m.icon} size={16} className="text-outline" />
                  <span className="text-label-sm uppercase">{m.label}</span>
                </div>
                <span className={`text-headline-sm ${m.highlight ? "text-secondary" : "text-on-surface"}`}>{m.value}</span>
                <span className="text-caption text-on-surface-variant">{m.sub}</span>
              </div>
            ))}
          </div>

          {/* Public aperçu */}
          <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="visibility" size={18} className="text-on-surface" />
              <h3 className="text-headline-sm text-on-surface">Aperçu public</h3>
            </div>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-2">
              Dans le cadre de la réorganisation stratégique de ses filiales Ouest-Africaines, l&apos;institution bancaire recrute un cabinet d&apos;audit ou expert-comptable indépendant pour piloter la revue analytique de l&apos;exercice clos et finaliser le reporting de consolidation selon les référentiels IFRS et SYSCOHADA révisé.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["IFRS 9 / 16", "Audit Légal", "Secteur Bancaire", "Zone UEMOA"].map((tag, i) => (
                <span key={i} className="text-caption px-2 py-1 rounded-lg bg-surface-container text-on-surface-variant">{tag}</span>
              ))}
            </div>
          </div>

          {/* Protected section */}
          <div className="bg-surface-container-low rounded-xl p-4 shadow-sm mb-6 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0">
                <Icon name="lock" size={16} className="text-on-surface" />
              </div>
              <h3 className="text-headline-sm text-on-surface">Informations complémentaires protégées</h3>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-relaxed mb-3">
              Le cahier des charges détaillé, le périmètre d&apos;audit, les annexes techniques et les contacts décisionnels deviennent accessibles après validation de l&apos;accès aux frais applicables.
            </p>
            <div className="space-y-1 bg-surface-container-lowest p-2 rounded-lg">
              {[
                { icon: "description", label: "Cahier des charges & TDR complets" },
                { icon: "account_balance", label: "Filiales concernées & Organigramme" },
                { icon: "contact_phone", label: "Comité de sélection & Ligne directe" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1 px-1">
                  <div className="flex items-center gap-2">
                    <Icon name={item.icon} size={16} className="text-outline" />
                    <span className="text-body-sm text-on-surface">{item.label}</span>
                  </div>
                  <span className="text-caption text-secondary">Disponible après validation</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust strip */}
          <div className="flex items-center justify-center gap-2 text-on-surface-variant text-center px-2 mb-4">
            <Icon name="gavel" size={15} className="text-outline" />
            <p className="text-caption">Mission régie par les protocoles d&apos;adjudication JobBook Privé (Art. 12 & 27).</p>
          </div>
        </div>

        {/* Persistent CTA */}
        <div className="fixed bottom-0 inset-x-0 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-3 pb-safe z-40 flex flex-col gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
          <Link href="/paiement" className="btn-primary h-11">
            <Icon name="key" size={18} />
            <span>Accéder au dossier</span>
          </Link>
          <p className="text-caption text-center text-on-surface-variant">
            Frais d&apos;accès requis conformément au barème réglementaire JobBook
          </p>
        </div>
      </main>
    </>
  );
}
