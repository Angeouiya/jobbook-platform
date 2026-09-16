import { Icon } from "@/components/Icon";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type FieldKey = keyof EntrepriseDict["profil"]["fields"];

const groups: { section: keyof EntrepriseDict["profil"]["sections"]; icon: string; fields: { key: FieldKey; value: string }[] }[] = [
  {
    section: "identite",
    icon: "corporate_fare",
    fields: [
      { key: "raisonSociale", value: "Kedge Capital SA" },
      { key: "secteur", value: "Services financiers & Investissement" },
      { key: "pays", value: "Côte d'Ivoire" },
    ],
  },
  {
    section: "contact",
    icon: "mail",
    fields: [
      { key: "email", value: "conformite@kedge-capital.ci" },
      { key: "telephone", value: "+225 27 20 00 00 00" },
    ],
  },
  {
    section: "conformite",
    icon: "verified_user",
    fields: [
      { key: "registre", value: "CI-ABJ-2016-B-12345" },
    ],
  },
];

export default function EntrepriseProfilPage() {
  const t = getDict().entreprise.profil;

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-6">
        <section className="pt-2 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-burgundy text-white flex items-center justify-center text-headline-lg font-bold shrink-0">
            K
          </div>
          <div>
            <h1 className="text-display-hero text-on-surface tracking-tight">{t.title}</h1>
            <p className="text-body-md text-on-surface-variant mt-1 max-w-2xl leading-relaxed">{t.intro}</p>
          </div>
        </section>

        <form className="flex flex-col gap-4">
          {groups.map((g) => (
            <section
              key={g.section}
              className="bg-surface-container-lowest rounded-2xl p-4 border border-border-light shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-surface-container-low border border-border-light flex items-center justify-center text-on-surface">
                  <Icon name={g.icon} size={18} />
                </div>
                <h2 className="text-headline-sm font-bold text-on-surface">{t.sections[g.section]}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {g.fields.map((f) => (
                  <div key={f.key} className="flex flex-col gap-1.5">
                    <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                      {t.fields[f.key]}
                    </label>
                    <input
                      type="text"
                      defaultValue={f.value}
                      className="w-full h-11 px-3.5 bg-surface-container-low text-on-surface text-body-md rounded-xl border border-border-light shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}

          <button type="button" className="btn-primary h-12 mt-1">
            <Icon name="save" size={18} />
            <span>{t.save}</span>
          </button>
        </form>
      </div>
    </main>
  );
}
