import { Icon } from "@/components/Icon";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type Channel = {
  titleKey: keyof EntrepriseDict["assistance"]["channels"];
  descKey: keyof EntrepriseDict["assistance"]["channels"];
  icon: string;
};

const channels: Channel[] = [
  { titleKey: "docTitle", descKey: "docDesc", icon: "menu_book" },
  { titleKey: "contactTitle", descKey: "contactDesc", icon: "support_agent" },
  { titleKey: "statusTitle", descKey: "statusDesc", icon: "monitor_heart" },
];

export default function EntrepriseAssistancePage() {
  const t = getDict().entreprise.assistance;

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-6">
        <section className="pt-2">
          <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl leading-relaxed">{t.intro}</p>
        </section>

        <div className="grid grid-cols-1 gap-3">
          {channels.map((c) => (
            <div
              key={c.titleKey}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-border-light flex items-center justify-center text-on-surface shrink-0">
                <Icon name={c.icon} size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-headline-sm font-bold text-on-surface">{t.channels[c.titleKey]}</h2>
                <p className="text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">{t.channels[c.descKey]}</p>
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 bg-surface-container-low text-on-surface rounded-xl text-label-md font-semibold border border-border-light hover:bg-surface-container transition-colors shrink-0"
              >
                <span className="hidden sm:inline">{t.action}</span>
                <Icon name="arrow_forward" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
