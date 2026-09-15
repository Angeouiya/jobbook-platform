import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function PaiementPage() {
  return (
    <>
      <AppHeader title="Retain Executive" showBack backHref="/mission-verrouillee" />
      <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface min-h-dvh">
        <div className="flex flex-col w-full pb-10">
          {/* Header badge */}
          <section className="px-4 pt-4 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant text-label-sm uppercase tracking-wider font-semibold border border-border-light">
                <Icon name="verified_user" size={14} fill />
                Portail Agréé UEMOA
              </span>
              <span className="text-caption text-on-surface-variant font-medium">Protocole TLS 1.3</span>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-md border border-border-light flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-label-sm uppercase text-secondary tracking-wider font-bold">Mandat Exclusif</span>
                  <h2 className="text-headline-md text-on-surface mt-1 font-bold leading-tight">Audit comptable annuel & Consolidation IFRS</h2>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface text-label-sm font-bold shrink-0 border border-border-light">KED-2024-09</span>
              </div>
              <div className="flex items-center gap-3 pt-1.5 text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-body-sm">
                  <Icon name="domain" size={16} />
                  <span>Énergie & Mines</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-outline-variant" />
                <div className="flex items-center gap-1.5 text-body-sm">
                  <Icon name="location_on" size={16} />
                  <span>Abidjan / Hybride</span>
                </div>
              </div>
            </div>
          </section>

          {/* Financial breakdown */}
          <section className="px-4 mt-5">
            <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-md border border-border-light flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <h3 className="text-label-md uppercase tracking-wider text-on-surface font-bold">Ventilation Financière Réglementaire</h3>
                </div>
                <span className="text-caption text-on-surface-variant font-medium">XOF (FCFA)</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-on-surface-variant">Montant de référence mission</span>
                  <span className="text-body-md text-on-surface font-bold">1 800 000 FCFA</span>
                </div>
                <div className="h-px bg-border-light" />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-body-sm text-on-surface-variant">Taux réglementaire JobBook</span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 bg-surface-container-high text-on-surface text-label-sm font-bold rounded-md">10%</span>
                    </div>
                    <span className="text-caption text-on-surface-variant mt-1 leading-relaxed">Chaque partie règle séparément le taux complet applicable</span>
                  </div>
                  <span className="text-body-sm text-on-surface font-bold shrink-0">180 000 FCFA</span>
                </div>
                <div className="h-px bg-border-light" />
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-on-surface-variant">Frais d&apos;accès & traitement dossier</span>
                  <span className="text-body-sm text-on-surface font-bold">180 000 FCFA</span>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low rounded-xl flex items-center justify-between border border-border-light">
                <div className="flex flex-col">
                  <span className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Total net à régler</span>
                  <span className="text-caption text-on-surface-variant mt-0.5">TVA incluse selon directive WAEMU</span>
                </div>
                <span className="text-display-hero text-on-surface tracking-tight" style={{ fontSize: "28px", lineHeight: "32px" }}>180 000 <span className="text-label-md font-semibold">FCFA</span></span>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl flex gap-2.5 items-start border border-border-light">
                <Icon name="info" size={20} className="text-secondary shrink-0 mt-0.5" />
                <p className="text-caption text-on-surface-variant leading-relaxed">
                  Le règlement permet d&apos;accéder aux informations complémentaires et de transmettre votre candidature. Il ne garantit pas votre sélection.
                </p>
              </div>
            </div>
          </section>

          {/* Payment methods */}
          <section className="px-4 mt-5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-label-md uppercase tracking-wider text-on-surface font-bold">Moyen de règlement sécurisé</h3>
              <span className="text-caption text-on-surface-variant font-medium">Sans frais de transaction</span>
            </div>
            {[
              { icon: "credit_card", name: "Carte Bancaire", badge: "3D Secure", desc: "Visa, Mastercard, Cartes Corporate internationales", active: true },
              { icon: "account_balance", name: "Virement Bancaire", badge: "BCEAO", desc: "Transfert SEPA / Wire international" },
              { icon: "smartphone", name: "Mobile Money", badge: "UEMOA", desc: "Orange Money, MTN MoMo, Wave" },
            ].map((method, i) => (
              <label key={i} className={`card cursor-pointer flex items-center justify-between transition-all ${
                method.active ? "border-primary shadow-md ring-1 ring-primary/15" : ""
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    method.active ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface border border-border-light"
                  }`}>
                    <Icon name={method.icon} size={22} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-headline-sm text-on-surface font-bold">{method.name}</span>
                      <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface text-label-sm font-semibold">{method.badge}</span>
                    </div>
                    <span className="text-caption text-on-surface-variant mt-0.5">{method.desc}</span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${method.active ? "bg-primary" : "border-2 border-border-light"}`}>
                  {method.active && <span className="w-2 h-2 rounded-full bg-on-primary" />}
                </div>
              </label>
            ))}
          </section>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-5 mt-7 px-4">
            {["ISO 27001", "Séquestre UEMOA", "Reçu fiscal"].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Icon name="verified" size={14} fill className="text-secondary" />
                <span className="text-caption text-on-surface-variant font-bold">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="fixed bottom-0 inset-x-0 bg-surface-container-lowest/95 backdrop-blur-xl px-4 py-3.5 pb-safe z-40 border-t border-border-light">
          <Link href="/mission-deverrouillee" className="btn-primary h-12">
            <Icon name="lock_open" size={18} />
            <span>Continuer vers paiement sécurisé</span>
          </Link>
        </div>
      </main>
    </>
  );
}
