import { Icon } from "./Icon";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
  rightAction?: "theme" | "notifications" | "none";
}

export function AppHeader({
  title,
  showBack = false,
  backHref = "/",
  rightAction = "theme",
}: AppHeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {showBack && (
            <Link
              href={backHref}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label="Retour"
            >
              <Icon name="arrow_back_ios_new" size={20} />
            </Link>
          )}
          <Link href="/accueil" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary">
              <span className="text-headline-sm tracking-tighter">JB</span>
            </div>
            <span className="text-label-md tracking-widest uppercase text-on-surface font-semibold">
              JobBook
            </span>
          </Link>
        </div>

        {title && (
          <h1 className="text-headline-sm text-on-surface truncate max-w-[170px]">
            {title}
          </h1>
        )}

        <div className="flex items-center gap-1">
          {rightAction === "notifications" && (
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Notifications"
            >
              <Icon name="notifications" size={22} />
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
