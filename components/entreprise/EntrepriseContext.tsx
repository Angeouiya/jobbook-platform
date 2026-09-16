"use client";

import { createContext, useContext, type ReactNode } from "react";

/** Compte Entreprise simulé (maquette frontend, pas d'authentification réelle). */
export interface EntrepriseAccount {
  name: string;
  role: "entreprise";
}

const defaultAccount: EntrepriseAccount = {
  name: "Kedge Capital",
  role: "entreprise",
};

const EntrepriseContext = createContext<EntrepriseAccount>(defaultAccount);

export function EntrepriseProvider({
  value = defaultAccount,
  children,
}: {
  value?: EntrepriseAccount;
  children: ReactNode;
}) {
  return (
    <EntrepriseContext.Provider value={value}>
      {children}
    </EntrepriseContext.Provider>
  );
}

export function useEntreprise() {
  return useContext(EntrepriseContext);
}
