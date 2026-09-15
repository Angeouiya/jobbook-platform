"use client";

import { useTheme } from "./ThemeProvider";
import { Icon } from "./Icon";

export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
      aria-label={dark ? "Mode clair" : "Mode sombre"}
    >
      <Icon name={dark ? "light_mode" : "dark_mode"} size={20} />
    </button>
  );
}
