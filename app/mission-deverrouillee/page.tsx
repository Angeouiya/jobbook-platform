import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";

export default function MissionDeverrouilleePage() {
  return (
    <>
      <AppHeader title="Specialist Workspace" rightAction="notifications" />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface px-4">
        <div className="flex flex-col w-full space-y-4">
          {/* Back & status */}
          <div className="flex items-center justify-between pt-1">
            <button className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface transition-colors py-1">
              <Icon name="arrow_back" size={20} />
              <span className="text-label-md uppercase tracking-wider">Retour</span>
            </button>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-surface-container-high rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-label-sm text-on-surface uppercase tracking-widest font-semibold">Accès complet validé</span>
            </div>
          </div>

          {/* Title */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Réf. Privée</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
              <span className="text-label-sm uppercase tracking-widest text-secondary font-semibold">Mandat #KED-2024-09</span>
            </div>
            <h2 className="text-headline-lg text-on-surface tracking-tight">Audit LBO & Consolidation Sous-Régionale</h2>
          </div>

          {/* Unlock banner */}
          <div className="bg-surface-container-low rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface shrink-0 shadow-sm">
                <Icon name="lock_open" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-label-md uppercase tracking-wider text-on-surface">Dossier Déverrouillé</span>
                  <span className="inline-flex items-center px-1.5 py-0.2 bg-surface-container-highest rounded text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">Protocole Habilité</span>
                </div>
                <p className="text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Les informations confidentielles, l&apos;identification du donneur d&apos;ordre et le cahier des charges officiel sont désormais accessibles.
                </p>
              </div>
            </div>
          </div>

          {/* Revealed data */}
          <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2">
              <span className="text-label-sm uppercase tracking-wider text-on-surface-variant">Données autrefois protégées</span>
              <Icon name="verified_user" size={16} className="text-secondary" />
            </div>
            {[
              { icon: "apartment", caption: "Donneur d'Ordre Officiel", title: "Kedge Capital West Africa", sub: "Siège Abidjan Plateau — Immeuble Grand Siècle" },
              { icon: "account_balance", caption: "Comité Décisionnaire", title: "Direction Affaires Financières & Comité d'Audit", sub: "Mandataire: Secrétariat Général Exécutif" },
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-low rounded-lg p-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface shrink-0">
                  <Icon name={item.icon} size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-caption text-on-surface-variant uppercase tracking-wider">{item.caption}</p>
                  <p className="text-headline-sm text-on-surface truncate">{item.title}</p>
                  <p className="text-caption text-on-surface-variant truncate">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Documents */}
            <div className="space-y-2 pt-1">
              <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">Pièces Maîtresses & Annexes</p>
              {[
                { name: "Cahier_des_charges_Audit_2024_vDef.pdf", size: "3.8 MB", desc: "Spécifications d'intervention", icon: "picture_as_pdf" },
                { name: "Périmètre_Filiales_Consolidation.xlsx", size: "1.2 MB", desc: "Tableaux analytiques", icon: "table_chart" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon name={doc.icon} size={20} className={i === 0 ? "text-secondary shrink-0" : "text-on-surface-variant shrink-0"} />
                    <div className="min-w-0">
                      <p className="text-label-md text-on-surface truncate">{doc.name}</p>
                      <p className="text-caption text-on-surface-variant">{doc.size} • {doc.desc}</p>
                    </div>
                  </div>
                  <button className="shrink-0 px-2.5 py-1.5 bg-primary text-on-primary rounded text-caption text-label-sm uppercase tracking-wider hover:opacity-90 transition-colors flex items-center gap-1">
                    <Icon name="download" size={14} />
                    <span>Télécharger</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submission form */}
          <form className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-headline-sm text-on-surface">Offre de Prestation Formelle</h3>
                <p className="text-caption text-on-surface-variant">Formulation contractuelle soumise au comité d&apos;adjudication</p>
              </div>
              <span className="text-label-sm text-secondary uppercase font-semibold">Étape 2/2</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Proposition d&apos;honoraires globale (FCFA HT)</label>
                <div className="relative flex items-center">
                  <input className="w-full h-11 px-3 bg-surface-container-low text-on-surface rounded text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline" placeholder="ex: 18 500 000" type="number" />
                  <span className="absolute right-3 text-label-md uppercase text-on-surface-variant pointer-events-none">XOF</span>
                </div>
              </div>
              <div>
                <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Délai de mobilisation proposé</label>
                <div className="relative flex items-center">
                  <select className="w-full h-11 px-3 bg-surface-container-low text-on-surface rounded text-body-md appearance-none focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>Immédiat / sous 48 heures</option>
                    <option>Sous 7 jours ouvrés (Recommandé)</option>
                    <option>Sous 15 jours calendaires</option>
                  </select>
                  <Icon name="expand_more" size={18} className="absolute right-3 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">Note méthodologique synthétique</label>
              <textarea className="w-full p-3 bg-surface-container-low text-on-surface rounded text-body-md focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline leading-relaxed resize-none" placeholder="Précisez votre cadrage opérationnel, vos étapes clés..." rows={4} />
            </div>

            {/* Accreditation */}
            <div className="flex items-center justify-between p-2 bg-surface-container-low rounded-lg">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded bg-surface-container-highest flex items-center justify-center text-on-surface shrink-0">
                  <Icon name="verified" size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-label-md text-on-surface truncate">Certificat_Ordre_ONECCA_2024.pdf</p>
                  <p className="text-caption text-on-surface-variant">Validé JobBook • Dossier Membre #8821</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="check_circle" size={18} className="text-secondary" />
                <span className="text-label-sm text-on-surface uppercase tracking-wider">Joint</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button type="button" className="btn-primary h-12">
                <span>Transmettre ma candidature définitive</span>
                <Icon name="send" size={18} />
              </button>
              <div className="flex items-start gap-2 px-1">
                <Icon name="policy" size={14} className="text-on-surface-variant shrink-0 mt-0.5" />
                <p className="text-caption text-on-surface-variant leading-normal">
                  Votre soumission engage votre responsabilité professionnelle sous le régime strict du protocole JobBook.
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
