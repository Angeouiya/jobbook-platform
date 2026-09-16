/**
 * Point d'entrée i18n JobBook.
 * Français d'abord ; l'anglais sera ajouté en phase bilingue via une clé « en ».
 */
import { entrepriseFr } from "./fr/entreprise";

export type Locale = "fr" | "en";

const dictionaries = {
  fr: { entreprise: entrepriseFr },
} as const;

export type Dictionary = (typeof dictionaries)["fr"];

/**
 * Retourne le dictionnaire de la locale demandée.
 * Repli sur le français tant que l'anglais n'est pas fourni.
 */
export function getDict(locale: Locale = "fr"): Dictionary {
  return dictionaries[locale as "fr"] ?? dictionaries.fr;
}

export type { EntrepriseDict } from "./fr/entreprise";
