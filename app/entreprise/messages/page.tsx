import { Icon } from "@/components/Icon";
import { getDict } from "@/lib/i18n";

const conversations = [
  { name: "Cabinet Diallo & Associés", mission: "Audit comptable annuel", preview: "Nous vous transmettons la note de cadrage révisée pour validation.", time: "10:24", unread: 2, verified: true },
  { name: "Alexandre Vance", mission: "Due Diligence — Projet Delta", preview: "Bien reçu, je reviens vers vous avant la clôture de l'appel d'offres.", time: "Hier", unread: 0, verified: false },
  { name: "Fatou Ndiaye", mission: "Cartographie des risques BCEAO", preview: "Le calendrier d'intervention est confirmé pour la semaine prochaine.", time: "Lun.", unread: 1, verified: true },
];

export default function EntrepriseMessagesPage() {
  const t = getDict().entreprise.messages;
  const totalUnread = conversations.reduce((n, c) => n + c.unread, 0);

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-5">
        <section className="pt-2 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
            <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">{t.intro}</p>
          </div>
          {totalUnread > 0 && (
            <span className="mt-1 shrink-0 px-2.5 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy text-label-sm font-bold border border-brand-burgundy/20">
              {totalUnread} {t.unread}
            </span>
          )}
        </section>

        {/* Recherche */}
        <div className="relative">
          <Icon name="search" size={18} className="absolute left-3.5 top-3.5 text-on-surface-variant pointer-events-none" />
          <input
            type="text"
            placeholder={t.search}
            className="w-full h-12 pl-11 pr-4 bg-surface-container-low text-on-surface text-body-md rounded-xl border border-border-light shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
          />
        </div>

        {/* Liste des conversations */}
        <div className="flex flex-col gap-2.5">
          {conversations.map((c, i) => (
            <button
              key={i}
              type="button"
              aria-label={t.open}
              className="text-left bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm hover:shadow-md transition-all flex items-start gap-3"
            >
              <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${i === 0 ? "bg-brand-burgundy" : "bg-primary"}`}>
                {c.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <h3 className="text-headline-sm font-bold text-on-surface truncate">{c.name}</h3>
                    {c.verified && <Icon name="verified" size={14} fill className="text-secondary shrink-0" />}
                  </div>
                  <span className="text-caption text-on-surface-variant shrink-0">{c.time}</span>
                </div>
                <p className="text-caption text-secondary font-medium mt-0.5">{c.mission}</p>
                <p className="text-body-sm text-on-surface-variant mt-1 line-clamp-1">{c.preview}</p>
              </div>
              {c.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-brand-burgundy text-white text-caption font-bold flex items-center justify-center shrink-0 mt-1">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
