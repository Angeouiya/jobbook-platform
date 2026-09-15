import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function SplashPage() {
  return (
    <main className="flex flex-col relative w-full bg-surface flex-grow min-h-dvh justify-between items-center px-6 py-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-96 h-96 rounded-full bg-surface-bright/20 blur-3xl" />
      </div>

      {/* Top status */}
      <div className="w-full flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">
            Secure Gateway
          </span>
        </div>
        <span className="text-label-sm text-on-surface-variant/60 uppercase">
          v4.8.2-EXC
        </span>
      </div>

      {/* Central brand */}
      <div className="flex flex-col items-center text-center z-10 my-auto max-w-sm animate-fade-in">
        <div className="w-20 h-20 mb-8 rounded-xl bg-surface-container-highest flex items-center justify-center shadow-2xl relative">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-surface-variant/20 to-transparent" />
          <Icon name="diamond" size={36} fill className="text-primary" />
        </div>

        <h1 className="text-display-hero text-on-surface tracking-tight mb-3">
          Job<span className="text-primary font-light">Book</span>
        </h1>

        <p className="text-body-md text-on-surface-variant italic font-light tracking-wide max-w-xs">
          &ldquo;Les bonnes missions. Les bons professionnels.&rdquo;
        </p>

        <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-label-sm uppercase tracking-wider">
          <Icon name="verified" size={14} className="text-secondary" />
          <span>Executive Syndicate</span>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="w-full max-w-sm flex flex-col gap-4 z-10 pb-6 animate-slide-up">
        <Link href="/accueil" className="btn-primary py-4 text-label-md">
          <span>Continuer</span>
          <Icon name="arrow_forward" size={18} />
        </Link>
        <div className="flex justify-center items-center gap-6 mt-2">
          <Link
            href="/administration"
            className="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Institutional Index
          </Link>
          <span className="w-1 h-1 rounded-full bg-outline-variant" />
          <Link
            href="/messagerie"
            className="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Private Ledger
          </Link>
        </div>
      </div>
    </main>
  );
}
