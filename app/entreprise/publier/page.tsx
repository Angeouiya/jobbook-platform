"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { getDict, type EntrepriseDict } from "@/lib/i18n";

type ModaliteKey = keyof EntrepriseDict["publier"]["modalites"];

const initialSkills = ["IFRS 9 / 16", "Audit Légal", "SYSCOHADA", "Secteur Bancaire"];

const modalites: { key: ModaliteKey; icon: string }[] = [
  { key: "onsite", icon: "location_on" },
  { key: "hybrid", icon: "sync_alt" },
  { key: "remote", icon: "wifi" },
];

export default function EntreprisePublierPage() {
  const t = getDict().entreprise.publier;
  const [skills, setSkills] = useState(initialSkills);
  const [workMode, setWorkMode] = useState<ModaliteKey>("hybrid");
  const [confidential, setConfidential] = useState(true);

  const removeSkill = (index: number) => setSkills(skills.filter((_, i) => i !== index));

  return (
    <main className="flex-1 w-full px-4 pt-20 pb-28 md:pb-12 bg-surface">
      <div className="mx-auto w-full max-w-3xl flex flex-col pb-4">
        {/* Étape */}
        <div className="flex items-center justify-between py-3">
          <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">
            {t.eyebrow}
          </span>
          <div className="flex items-center gap-1.5 bg-surface-container-low px-3.5 py-1.5 rounded-full shadow-sm border border-border-light">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-label-sm uppercase tracking-wider text-on-surface font-semibold">
              {t.step}
            </span>
          </div>
        </div>

        {/* Progression */}
        <div className="w-full bg-surface-container-highest h-1.5 rounded-full mb-5 overflow-hidden">
          <div className="bg-primary h-full w-[30%] rounded-full transition-all duration-500 ease-out" />
        </div>

        {/* Titre de section */}
        <div className="mb-5">
          <h1 className="text-headline-lg text-on-surface font-bold">{t.sectionTitle}</h1>
          <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">{t.sectionIntro}</p>
        </div>

        <form className="flex flex-col gap-5">
          {/* Intitulé */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
            <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
              {t.intituleLabel}
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 bg-surface-container-low text-on-surface text-body-md rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline border border-border-light"
                type="text"
                defaultValue="Audit comptable annuel & Consolidation IFRS"
              />
              <Icon name="verified" size={18} className="absolute right-3.5 top-3.5 text-outline pointer-events-none" />
            </div>
            <p className="text-caption text-on-surface-variant leading-relaxed">{t.intituleHint}</p>
          </div>

          {/* Compétences */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                {t.competencesLabel}
              </label>
              <span className="text-caption text-secondary font-bold px-2 py-0.5 rounded bg-secondary/10">
                {skills.length} {t.competencesCount}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-xl text-body-sm transition-all shadow-sm hover:shadow-md"
                >
                  <span className="font-medium">{skill}</span>
                  <button type="button" onClick={() => removeSkill(i)} className="flex items-center justify-center hover:opacity-75 ml-0.5">
                    <Icon name="close" size={14} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-on-surface hover:bg-surface-container rounded-xl text-body-sm transition-colors shadow-sm border border-border-light"
              >
                <Icon name="add" size={16} />
                <span className="font-medium">{t.ajouterCompetence}</span>
              </button>
            </div>
          </div>

          {/* Modalité */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
            <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
              {t.modaliteLabel}
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container-low rounded-xl">
              {modalites.map((mode) => (
                <button
                  key={mode.key}
                  type="button"
                  onClick={() => setWorkMode(mode.key)}
                  className={`h-10 rounded-lg text-body-sm flex items-center justify-center gap-1.5 transition-all ${
                    workMode === mode.key
                      ? "bg-primary text-on-primary font-semibold shadow-md"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <Icon name={mode.icon} size={16} />
                  {t.modalites[mode.key]}
                </button>
              ))}
            </div>
          </div>

          {/* Honoraires */}
          <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                {t.honorairesLabel}
              </label>
              <span className="text-caption text-on-surface-variant font-medium">{t.baremeIndicatif}</span>
            </div>
            <div className="relative bg-surface-container-low rounded-xl shadow-sm border border-border-light">
              <input
                className="w-full h-12 px-4 bg-transparent text-on-surface text-body-md focus:outline-none rounded-xl font-semibold"
                type="text"
                defaultValue="1 800 000"
              />
              <span className="absolute right-4 top-3.5 text-label-md uppercase text-on-surface-variant font-semibold">
                {t.honorairesUnit}
              </span>
            </div>
          </div>

          {/* Confidentialité */}
          <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-border-light shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center border border-border-light">
                <Icon name="visibility_off" size={20} className="text-on-surface" />
              </div>
              <div>
                <span className="text-body-md text-on-surface font-bold block">{t.confidentielTitle}</span>
                <span className="text-caption text-on-surface-variant mt-0.5">{t.confidentielSub}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setConfidential((v) => !v)}
              aria-pressed={confidential}
              className={`w-12 h-7 rounded-full flex items-center px-0.5 cursor-pointer shadow-sm transition-colors ${
                confidential ? "bg-primary justify-end" : "bg-surface-container-high justify-start"
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-on-primary shadow-md" />
            </button>
          </div>

          {/* Avis de paiement */}
          <div className="p-3.5 bg-surface-container-low rounded-xl flex gap-2.5 items-start border border-border-light">
            <Icon name="info" size={20} className="text-secondary shrink-0 mt-0.5" />
            <p className="text-caption text-on-surface-variant leading-relaxed">{t.paymentNotice}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-1">
            <Link href="/entreprise/paiements" className="btn-primary py-3.5">
              <Icon name="lock" size={16} />
              <span>{t.continuer}</span>
            </Link>
            <button type="button" className="btn-secondary py-3.5">
              <Icon name="save" size={16} />
              <span>{t.brouillon}</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
