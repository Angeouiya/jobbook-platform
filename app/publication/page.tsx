"use client";

import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { Icon } from "@/components/Icon";
import Link from "next/link";

const initialSkills = ["IFRS 9 / 16", "Audit Légal", "SYSCOHADA", "Secteur Bancaire"];

export default function PublicationPage() {
  const [skills, setSkills] = useState(initialSkills);
  const [workMode, setWorkMode] = useState("hybrid");

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <>
      <AppHeader title="Enterprise Console" rightAction="notifications" />
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface px-4">
        <div className="flex flex-col w-full pb-8">
          {/* Step header */}
          <div className="flex items-center justify-between py-3 mb-3">
            <button className="w-10 h-10 -ml-2 rounded-xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors border border-border-light">
              <Icon name="arrow_back" size={20} />
            </button>
            <div className="flex items-center gap-1.5 bg-surface-container-low px-3.5 py-1.5 rounded-full shadow-sm border border-border-light">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-label-sm uppercase tracking-wider text-on-surface font-semibold">Étape 3 sur 10</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full mb-5 overflow-hidden">
            <div className="bg-primary h-full w-[30%] rounded-full transition-all duration-500 ease-out" />
          </div>

          {/* Section title */}
          <div className="mb-5">
            <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">Mandat Institutionnel</span>
            <h2 className="text-headline-lg text-on-surface mt-1 font-bold">Compétences & Périmètre</h2>
            <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Définissez les qualifications requises et les livrables attendus pour ce mandat.
            </p>
          </div>

          <form className="flex flex-col gap-7">
            {/* Title input */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
              <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Intitulé du mandat</label>
              <div className="relative">
                <input className="w-full h-12 px-4 bg-surface-container-low text-on-surface text-body-md rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-outline border border-border-light" type="text" defaultValue="Audit comptable annuel & Consolidation IFRS" />
                <Icon name="verified" size={18} className="absolute right-3.5 top-3.5 text-outline pointer-events-none" />
              </div>
              <p className="text-caption text-on-surface-variant leading-relaxed">Visible immédiatement dans le flux des experts accrédités.</p>
            </div>

            {/* Skills */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Compétences requises</label>
                <span className="text-caption text-secondary font-bold px-2 py-0.5 rounded bg-secondary/10">{skills.length} retenues</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <div key={i} className="group inline-flex items-center gap-1.5 px-3.5 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-xl text-body-sm transition-all shadow-sm hover:shadow-md">
                    <span className="font-medium">{skill}</span>
                    <button type="button" onClick={() => removeSkill(i)} className="flex items-center justify-center hover:opacity-75 ml-0.5">
                      <Icon name="close" size={14} />
                    </button>
                  </div>
                ))}
                <button type="button" className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-on-surface hover:bg-surface-container rounded-xl text-body-sm transition-colors shadow-sm border border-border-light">
                  <Icon name="add" size={16} />
                  <span className="font-medium">Ajouter une compétence</span>
                </button>
              </div>
            </div>

            {/* Work mode */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
              <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Modalité d&apos;exercice</label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container-low rounded-xl">
                {[
                  { key: "onsite", label: "Présentiel", icon: "location_on" },
                  { key: "hybrid", label: "Hybride", icon: "sync_alt" },
                  { key: "remote", label: "À distance", icon: "wifi" },
                ].map((mode) => (
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
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-border-light flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Honoraires prévisionnels</label>
                <span className="text-caption text-on-surface-variant font-medium">Barème indicatif</span>
              </div>
              <div className="relative bg-surface-container-low rounded-xl shadow-sm border border-border-light">
                <input className="w-full h-12 px-4 bg-transparent text-on-surface text-body-md focus:outline-none rounded-xl font-semibold" type="text" defaultValue="1 800 000" />
                <span className="absolute right-4 top-3.5 text-label-md uppercase text-on-surface-variant font-semibold">FCFA / mois</span>
              </div>
            </div>

            {/* Confidentiality toggle */}
            <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-border-light shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center border border-border-light">
                  <Icon name="visibility_off" size={20} className="text-on-surface" />
                </div>
                <div>
                  <span className="text-body-md text-on-surface font-bold block">Mode confidentiel</span>
                  <span className="text-caption text-on-surface-variant mt-0.5">Masquer l&apos;identité de l&apos;entreprise</span>
                </div>
              </div>
              <div className="w-12 h-7 rounded-full bg-primary flex items-center justify-end px-0.5 cursor-pointer shadow-sm">
                <div className="w-6 h-6 rounded-full bg-on-primary shadow-md" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/espace-entreprise" className="btn-primary py-3.5">
                <span>Continuer</span>
                <Icon name="arrow_forward" size={18} />
              </Link>
              <button type="button" className="btn-secondary py-3.5">
                <Icon name="save" size={16} />
                <span>Enregistrer brouillon</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
