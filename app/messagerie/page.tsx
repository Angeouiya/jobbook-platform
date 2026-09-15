import { Icon } from "@/components/Icon";

export default function MessageriePage() {
  return (
    <main className="flex flex-col relative w-full bg-surface min-h-dvh">
      {/* Conversation header */}
      <div className="flex flex-col w-full px-4 py-3.5 bg-surface-container-lowest shadow-md border-b border-border-light pt-safe">
        <div className="flex items-center justify-between gap-3">
          <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors border border-border-light shadow-sm">
            <Icon name="arrow_back" size={18} />
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-label-sm text-secondary tracking-wider uppercase font-semibold">Canal Chiffré TLS 1.3 · Sous NDA</span>
          </div>
        </div>
        <div className="flex items-start gap-3 mt-3">
          <div className="relative shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <span className="text-headline-sm text-on-primary font-bold">KC</span>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-secondary flex items-center justify-center shadow-sm border-2 border-surface-container-lowest">
              <Icon name="verified" size={10} fill className="text-on-primary" />
            </div>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h1 className="text-headline-sm text-on-surface truncate font-bold">Kedge Capital West Africa</h1>
              <Icon name="verified_user" size={14} fill className="text-secondary shrink-0" />
            </div>
            <p className="text-label-sm text-on-surface-variant truncate mt-0.5">Mandat : Audit LBO & Consolidation Sous-Régionale</p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-caption text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded-md border border-secondary/15">Réf. #KED-2024-09</span>
              <span className="text-caption text-on-surface-variant font-medium">Comité d&apos;Investissement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Protocol banner */}
      <div className="mx-4 mt-4 p-3.5 rounded-xl bg-surface-container-low shadow-sm border border-border-light flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-sm shrink-0 border border-border-light">
          <Icon name="gavel" size={18} fill className="text-secondary" />
        </div>
        <div className="flex flex-col">
          <p className="text-caption text-on-surface-variant leading-relaxed">
            Les échanges sont consignés et protégés par le protocole d&apos;adjudication <strong className="text-on-surface font-bold">JobBook Sovereign</strong>. Les offres tarifaires déposées sont formellement contraignantes.
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <Icon name="lock" size={12} className="text-secondary" />
            <span className="text-caption text-secondary font-bold tracking-wide uppercase">Horodatage certifié RFC 3161</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col px-4 mt-5 space-y-5 flex-1">
        {/* Date marker */}
        <div className="flex items-center justify-center w-full my-1">
          <div className="px-3.5 py-1.5 rounded-full bg-surface-container-high border border-border-light shadow-sm">
            <span className="text-label-sm text-on-surface-variant uppercase tracking-wider font-medium">Aujourd&apos;hui · 18 Octobre 2024</span>
          </div>
        </div>

        {/* Message 1 - received */}
        <div className="flex flex-col items-start max-w-[90%]">
          <div className="flex items-center gap-2 mb-1.5 pl-1">
            <span className="text-label-sm text-on-surface font-bold">Hervé de Montmirail</span>
            <span className="text-caption text-on-surface-variant">10:14</span>
          </div>
          <div className="p-4 rounded-2xl rounded-tl-sm bg-surface-container-lowest text-on-surface shadow-sm border border-border-light leading-relaxed">
            <p className="text-body-md leading-relaxed">
              Bonjour Alexandre. Votre note méthodologique sur la consolidation SYSCOHADA a retenu l&apos;attention du comité. Pouvez-vous préciser si vos délais d&apos;intervention couvrent également les filiales sénégalaise et togolaise ?
            </p>
            <div className="flex items-center justify-between mt-3 pt-2.5 bg-surface-container-low/50 px-2.5 py-1.5 rounded-lg">
              <span className="text-caption text-on-surface-variant flex items-center gap-1 font-medium">
                <Icon name="shield" size={12} className="text-secondary" /> SHA-256 certifiée
              </span>
              <span className="text-caption text-on-surface-variant">Reçu · Déchiffré</span>
            </div>
          </div>
        </div>

        {/* Message 2 - sent */}
        <div className="flex flex-col items-end max-w-[90%] ml-auto">
          <div className="flex items-center gap-2 mb-1.5 pr-1">
            <span className="text-caption text-on-surface-variant">10:28</span>
            <span className="text-label-sm text-secondary font-bold">Alexandre Vance</span>
          </div>
          <div className="p-4 rounded-2xl rounded-tr-sm bg-primary text-on-primary shadow-md leading-relaxed">
            <p className="text-body-md leading-relaxed">
              Bonjour. Absolument, l&apos;équipe mobilisée dispose de deux directeurs de mission basés à Abidjan et Dakar. Le calendrier prévisionnel de 3 semaines intègre l&apos;audit complet du périmètre UEMOA.
            </p>
            <div className="flex items-center justify-between mt-3 pt-2.5 px-2.5 py-1.5 rounded-lg bg-surface-container-highest/10">
              <span className="text-caption text-on-primary/70 flex items-center gap-1 font-medium">
                <Icon name="verified" size={12} className="text-secondary-fixed" /> Signé électroniquement
              </span>
              <Icon name="done_all" size={14} className="text-on-primary" />
            </div>
          </div>
        </div>

        {/* Contract card */}
        <div className="flex flex-col w-full my-3 p-5 rounded-2xl bg-surface-container-lowest shadow-md border border-border-light">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-secondary shadow-sm" />
              <span className="text-label-md text-secondary tracking-widest uppercase font-bold">Étape Clé Contractuelle</span>
            </div>
            <span className="text-caption text-on-surface-variant font-medium">Acte #ACT-982</span>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-container-low mb-3.5 border border-border-light">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-sm text-on-surface-variant uppercase tracking-wide font-semibold">Statut du mandat</span>
              <span className="text-label-sm text-secondary font-bold bg-secondary/10 px-2.5 py-0.5 rounded-lg border border-secondary/15">Offre Pré-validée</span>
            </div>
            <div className="mt-2.5">
              <span className="text-caption text-on-surface-variant block">Honoraires d&apos;audit consolidé</span>
              <p className="text-headline-lg text-on-surface font-bold tracking-tight mt-1">
                18 500 000 <span className="text-label-md font-semibold text-on-surface-variant">FCFA HT</span>
              </p>
            </div>
            <div className="flex items-center justify-between mt-3.5 pt-3 bg-surface-container-highest/40 px-3 py-2 rounded-lg">
              <span className="text-caption text-on-surface-variant">Acompte séquestre (Confiance Tiers)</span>
              <span className="text-label-sm text-on-surface font-bold">30% (5 550 000 FCFA)</span>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 w-full h-12 px-4 rounded-xl bg-primary text-on-primary hover:opacity-90 active:scale-[0.99] transition-all shadow-sm font-semibold">
            <Icon name="history_edu" size={18} />
            <span className="text-label-md tracking-wider uppercase">Examiner le contrat de mission</span>
          </button>
        </div>
      </div>

      {/* Input bar */}
      <div className="mt-auto px-4 pt-3 pb-4">
        <div className="p-3.5 rounded-2xl bg-surface-container-lowest shadow-lg border border-border-light">
          <div className="flex items-center gap-2.5">
            <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors border border-border-light">
              <Icon name="enhanced_encryption" size={20} />
            </button>
            <div className="flex-1 relative">
              <input className="w-full h-10 px-3.5 text-body-md text-on-surface placeholder:text-on-surface-variant/60 bg-surface-container-low rounded-xl focus:outline-none focus:ring-1 focus:ring-primary transition-all border border-border-light" placeholder="Rédiger une réponse sécurisée..." type="text" />
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-on-primary hover:opacity-90 active:scale-95 transition-all shadow-sm">
              <Icon name="send" size={18} />
            </button>
          </div>
          <div className="flex items-center justify-between mt-2.5 pt-2.5 px-1 border-t border-border-light">
            <div className="flex items-center gap-1.5">
              <Icon name="verified" size={13} className="text-secondary" />
              <span className="text-caption text-secondary font-bold">Signature cryptographique active (SHA-256)</span>
            </div>
            <span className="text-caption text-on-surface-variant font-medium">Souveraineté UEMOA</span>
          </div>
        </div>
      </div>
    </main>
  );
}
